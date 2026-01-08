import { useState, useEffect, useRef } from "react";

const steps = [
  {
    step: "1",
    title: "Sign Up & Set Up Clinic",
    desc: "Create your account and add doctors' schedules in minutes.",
    icon: "🏥"
  },
  {
    step: "2",
    title: "Invite Staff & Patients",
    desc: "Add receptionists, doctors, and let patients register online.",
    icon: "👥"
  },
  {
    step: "3",
    title: "Start Booking Appointments",
    desc: "Patients book online, staff manage walk-ins seamlessly.",
    icon: "📅"
  },
  {
    step: "4",
    title: "Manage Records & Billing",
    desc: "Digital prescriptions, notes, payments — all in one place.",
    icon: "💼"
  },
];

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSteps((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index];
                  }
                  return prev;
                });
              }
            });
          },
          {
            threshold: 0.2,
            rootMargin: "0px 0px -100px 0px",
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="w-full py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700 mb-4">
            How It Works
          </span>
          <h2 className="text-[28px] md:text-[28px] font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl text-lg">
            From setup to success in minutes — no technical expertise required
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-800 dark:via-blue-600 dark:to-blue-800 hidden md:block transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((s, index) => (
              <div
                key={s.step}
                ref={(el) => { stepRefs.current[index] = el; }}
                className={`relative flex flex-col md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } transition-all duration-700 ${visibleSteps.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                  }`}
              >
                {/* Content Card */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="group relative bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                    {/* Mobile Step Badge */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 md:hidden w-12 h-12 rounded-full border-2 border-blue-300 dark:border-blue-400 bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold shadow-lg z-20">
                      {s.step}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 mb-4 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {s.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 dark:group-hover:from-blue-400 dark:group-hover:to-cyan-400 transition-all duration-300">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {s.desc}
                    </p>

                    {/* Decorative gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                  </div>
                </div>

                {/* Center Badge - Outlined (Desktop Only) */}
                <div className="relative flex-shrink-0 hidden md:block">
                  <div className="w-16 h-16 rounded-full border-2 border-blue-300 dark:border-blue-400 bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl font-bold shadow-lg hover:scale-125 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 z-10 relative">
                    {s.step}
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300 blur-xl opacity-30 animate-pulse"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}