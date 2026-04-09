import { describe, it, expect, vi } from "vitest";
import { emitSignal } from "@/lib/clat/cortex-signals";

describe("cortex-signals", () => {
  it("dispatches a CustomEvent on window", () => {
    const spy = vi.fn();
    window.addEventListener("koydo:cortex", spy);
    emitSignal("test_event", { foo: "bar" });
    expect(spy).toHaveBeenCalledTimes(1);
    const detail = (spy.mock.calls[0][0] as CustomEvent).detail;
    expect(detail.event).toBe("test_event");
    expect(detail.exam).toBe("clat-ug");
    expect(detail.foo).toBe("bar");
    window.removeEventListener("koydo:cortex", spy);
  });
});
