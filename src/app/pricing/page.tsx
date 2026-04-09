export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 max-w-2xl w-full">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Free</h2>
          <p className="mt-2 text-3xl font-bold">₹0</p>
          <ul className="mt-4 space-y-2 text-sm opacity-70">
            <li>10 questions per day</li>
            <li>Basic analytics</li>
            <li>Limited mock tests</li>
          </ul>
        </div>
        <div className="rounded-2xl border-2 border-[var(--accent)] p-6">
          <h2 className="text-xl font-semibold">Premium</h2>
          <p className="mt-2 text-3xl font-bold">₹249<span className="text-base font-normal opacity-60">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm opacity-70">
            <li>Unlimited questions</li>
            <li>Full mock tests</li>
            <li>Detailed analytics</li>
            <li>Priority support</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
