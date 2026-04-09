type SignalPayload = Record<string, unknown>;

export function emitSignal(event: string, payload: SignalPayload = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("koydo:cortex", {
      detail: { event, exam: "clat-ug", timestamp: Date.now(), ...payload },
    })
  );
}

export const Signals = {
  pageView: (page: string) => emitSignal("page_view", { page }),
  questionAttempt: (questionId: string, correct: boolean) =>
    emitSignal("question_attempt", { questionId, correct }),
  subscriptionStart: () => emitSignal("subscription_start"),
  subscriptionCancel: () => emitSignal("subscription_cancel"),
};
