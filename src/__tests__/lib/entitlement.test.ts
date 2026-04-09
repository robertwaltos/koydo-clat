import { describe, it, expect } from "vitest";
import { canAccessQuestion, getRemainingFreeQuestions } from "@/lib/clat/entitlement";
import type { UserEntitlement } from "@/lib/clat/types";

describe("entitlement", () => {
  it("allows premium users unlimited access", () => {
    const e: UserEntitlement = { tier: "premium", questionsUsedToday: 999, maxFreePerDay: 10 };
    expect(canAccessQuestion(e)).toBe(true);
    expect(getRemainingFreeQuestions(e)).toBe(Infinity);
  });

  it("allows free users under daily limit", () => {
    const e: UserEntitlement = { tier: "free", questionsUsedToday: 5, maxFreePerDay: 10 };
    expect(canAccessQuestion(e)).toBe(true);
    expect(getRemainingFreeQuestions(e)).toBe(5);
  });

  it("blocks free users at daily limit", () => {
    const e: UserEntitlement = { tier: "free", questionsUsedToday: 10, maxFreePerDay: 10 };
    expect(canAccessQuestion(e)).toBe(false);
    expect(getRemainingFreeQuestions(e)).toBe(0);
  });
});
