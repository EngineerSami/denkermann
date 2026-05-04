import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database and notification modules
vi.mock("./db", () => ({
  getDb: vi.fn().mockResolvedValue({
    insert: vi.fn().mockReturnValue({
      values: vi.fn().mockResolvedValue(undefined),
    }),
  }),
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should accept a valid inquiry and return success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Ahmad Khalil",
      email: "ahmad@example.ps",
      phone: "+970 59 123 4567",
      company: "Khalil Auto Workshop",
      product: "A21",
      message: "I need pricing for 100 units of the oil filter A21.",
    });

    expect(result).toEqual({ success: true });
  });

  it("should accept an inquiry without optional fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Sara Nasser",
      email: "sara@example.ps",
      message: "Please send me your full product catalog.",
    });

    expect(result).toEqual({ success: true });
  });

  it("should reject an inquiry with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "not-an-email",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("should reject an inquiry with empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "test@example.ps",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("should reject an inquiry with empty message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "test@example.ps",
        message: "",
      })
    ).rejects.toThrow();
  });
});
