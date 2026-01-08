import { Calendar, Users, FileText, Bell, Shield } from "lucide-react";
import Banner from "@/assets/banner.png";

const leftFeatures = [
  {
    icon: Calendar,
    title: "Smart Appointment Booking",
    desc: "Online booking, real-time doctor availability, walk-ins & waitlist management."
  },
  {
    icon: Users,
    title: "Complete Patient Management",
    desc: "Digital profiles, medical history, visit notes, and secure document storage."
  },
  {
    icon: FileText,
    title: "Digital Prescriptions & Notes",
    desc: "Easy prescription builder with PDF export and clinical notes."
  },
];

const rightFeatures = [
  {
    icon: Bell,
    title: "Automated Email Reminders",
    desc: "Reduce no-shows with timely patient reminders."
  },
  {
    icon: Shield,
    title: "Role-Based Secure Access",
    desc: "Separate dashboards for Admin, Doctors, Receptionists, and Patients."
  },
];

export default function Features() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700 mb-4">
            Features
          </span>
          <h2 className="text-[28px] md:text-[28px] font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Everything Your Clinic Needs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl text-lg">
            Powerful features designed to streamline your healthcare operations
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {leftFeatures.map((feature, index) => (
              <div
                key={index}
                className="group flex gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-x-2"
                style={{
                  animation: `fadeInLeft 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Image */}
          <div className="hidden lg:flex justify-center items-center lg:order-none order-first">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-3xl opacity-20"></div>
              <img
                src={Banner}
                alt="Healthcare Professional"
                className="relative w-full max-w-md rounded-2xl  transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-10">
            {rightFeatures.map((feature, index) => (
              <div
                key={index}
                className="group flex gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:translate-x-2"
                style={{
                  animation: `fadeInRight 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}