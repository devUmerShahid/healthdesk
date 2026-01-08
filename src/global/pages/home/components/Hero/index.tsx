import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Banner from "@/assets/banner.png"

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-black dark:to-gray-900 py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(96, 165, 250, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 0.15) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text + CTAs */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700">
              🏥 Healthcare Management Platform
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">Streamline Your Clinic </span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Operations
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              HealthDesk is the all-in-one digital solution designed for small and medium clinics.
              Reduce paperwork, eliminate no-shows, and let your team focus on what matters most — patient care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-10 py-7 shadow-xl !bg-blue-600 hover:!bg-blue-700 transition-all duration-300 hover:scale-105">
                Start Free Trial
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 !border-blue-600 !text-blue-600 hover:!bg-blue-50 dark:hover:!bg-blue-900/20 transition-all duration-300">
                Book a Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ✓ 14-day free trial
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ✓ No credit card required
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ✓ Cancel anytime
              </p>
            </div>
          </div>

          {/* Right Side: Illustration */}
          <div className="order-first lg:order-last hidden md:flex justify-center">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0  rounded-2xl blur-2xl opacity-30"></div>
              <img
                src={Banner}
                alt="Doctor Image"
                className="relative w-full max-w-lg rounded-2xl object-cover  transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}