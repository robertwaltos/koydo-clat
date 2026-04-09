"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 opacity-60">{error.message}</p>
      <button onClick={reset} className="mt-6 px-4 py-2 rounded-lg bg-[var(--accent)] text-white">
        Try again
      </button>
    </main>
  );
}
