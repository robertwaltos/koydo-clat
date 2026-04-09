export const clatPricing = {
  currency: "INR",
  symbol: "₹",
  free: {
    price: 0,
    label: "Free",
    features: ["10 questions per day", "Basic analytics", "Limited mock tests"],
  },
  premium: {
    price: 249,
    period: "month" as const,
    label: "Premium",
    features: ["Unlimited questions", "Full mock tests", "Detailed analytics", "Priority support"],
  },
};
