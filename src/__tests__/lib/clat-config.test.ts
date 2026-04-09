import { describe, it, expect } from "vitest";
import { clatConfig } from "@/lib/clat/config";

describe("clatConfig", () => {
  it("has correct examId", () => {
    expect(clatConfig.examId).toBe("EXAM041");
  });

  it("has correct slug", () => {
    expect(clatConfig.slug).toBe("clat");
  });

  it("has at least one section", () => {
    expect(clatConfig.sections.length).toBeGreaterThan(0);
  });

  it("has theme colors", () => {
    expect(clatConfig.theme.accent).toMatch(/^#[0-9A-Fa-f]{6}$/);
    expect(clatConfig.theme.accentDark).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  it("has IP disclaimer", () => {
    expect(clatConfig.ipDisclaimer.length).toBeGreaterThan(0);
  });

  it("has freemium gate config", () => {
    expect(clatConfig.freemiumGate.freeQuestionsPerDay).toBe(10);
  });
});
