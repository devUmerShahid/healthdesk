import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    desc: "Perfect for trying out HealthDesk",
    features: [
      { text: "Up to 1 doctor", included: true },
      { text: "Up to 50 patients", included: true },
      { text: "Basic appointment booking", included: true },
      { text: "Patient records", included: true },
      { text: "Email reminders", included: false },
      { text: "Analytics", included: false },
      { text: "Priority support", included: false },
    ],
    popular: false,
    cta: "Get Started Free",
  },
  {
    name: "Professional",
    price: "$199",
    period: "/month",
    desc: "Most popular – for growing clinics",
    features: [
      { text: "Up to 10 doctors", included: true },
      { text: "Unlimited patients", included: true },
      { text: "Advanced appointment booking", included: true },
      { text: "Patient records & history", included: true },
      { text: "Email & SMS reminders", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Prescription builder", included: true },
      { text: "Payment tracking", included: true },
      { text: "Priority support", included: true },
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "$499",
    period: "/month",
    desc: "For large clinics and hospitals",
    features: [
      { text: "Unlimited doctors", included: true },
      { text: "Unlimited patients", included: true },
      { text: "Everything in Professional", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom analytics & reports", included: true },
      { text: "24/7 phone support", included: true },
      { text: "On-premise deployment option", included: true },
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700 mb-4">
            Pricing
          </span>
          <h2 className="text-[28px] md:text-[28px] font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl text-lg">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${plan.popular
                  ? "border-2 border-blue-500 dark:border-blue-400 shadow-2xl bg-white dark:bg-gray-900 scale-105 md:scale-110"
                  : "border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-blue-300 dark:hover:border-blue-600"
                }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[48px]">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  {plan.price}
                </span>
                <span className="text-xl text-gray-600 dark:text-gray-400">
                  {plan.period}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 dark:text-gray-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-400 dark:text-gray-600 line-through"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                size="lg"
                className={`w-full transition-all duration-300 ${plan.popular
                    ? "!bg-gradient-to-r !from-blue-600 !to-cyan-600 hover:!from-blue-700 hover:!to-cyan-700 text-white shadow-lg hover:shadow-xl"
                    : "!bg-white dark:!bg-gray-800 !text-blue-600 dark:!text-blue-400 !border-2 !border-blue-600 dark:!border-blue-400 hover:!bg-blue-50 dark:hover:!bg-blue-900/20"
                  }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}