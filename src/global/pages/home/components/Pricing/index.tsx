import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    desc: "Perfect for small clinics starting digital transformation",
    features: ["Up to 3 doctors", "Unlimited patients", "Appointment booking", "Patient records", "Email reminders", "Basic analytics"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$199",
    period: "/month",
    desc: "Most popular – for growing clinics",
    features: ["Unlimited doctors", "Everything in Starter", "Advanced analytics", "Prescription builder", "Payment tracking", "Priority support"],
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section className="w-full py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16">
          14-day free trial • No credit card required
        </p>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border-2 p-10 relative ${
                plan.popular ? "border-blue-600 shadow-2xl scale-105" : "border-gray-200 dark:border-gray-700"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-xl text-gray-600 dark:text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full" variant={plan.popular ? "default" : "outline"}>
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}