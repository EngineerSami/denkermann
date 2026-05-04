import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { contactInquiries } from "../drizzle/schema";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email required"),
          phone: z.string().optional().default(""),
          company: z.string().optional().default(""),
          product: z.string().optional().default(""),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database unavailable");

        // Save inquiry to DB
        await db.insert(contactInquiries).values({
          name: input.name,
          email: input.email,
          phone: input.phone || null,
          company: input.company || null,
          product: input.product || null,
          message: input.message,
        });

        // Notify owner
        const productLabel = input.product
          ? `Product Interest: ${input.product === "A21" ? "Oil Filter A21" : input.product === "A14" ? "Air Filter A14" : input.product === "A12" ? "Fuel Filter A12" : "All Products"}`
          : "";

        await notifyOwner({
          title: `New Inquiry from ${input.name} — Denkermann Palestine`,
          content: `**New inquiry received on DENKERMANN.PS**\n\n**Name:** ${input.name}\n**Email:** ${input.email}\n**Phone:** ${input.phone || "—"}\n**Company:** ${input.company || "—"}\n${productLabel ? `**${productLabel}**\n` : ""}**Message:**\n${input.message}`,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
