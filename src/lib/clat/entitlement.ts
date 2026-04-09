import type { UserEntitlement } from "./types";

export function canAccessQuestion(entitlement: UserEntitlement): boolean {
  if (entitlement.tier === "premium") return true;
  return entitlement.questionsUsedToday < entitlement.maxFreePerDay;
}

export function getRemainingFreeQuestions(entitlement: UserEntitlement): number {
  if (entitlement.tier === "premium") return Infinity;
  return Math.max(0, entitlement.maxFreePerDay - entitlement.questionsUsedToday);
}
