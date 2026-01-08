import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-100/40 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        {/* Badge */}
        <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 mb-8 shadow-sm">
          Get Started Today
        </span>

        {/* Heading */}
        <h2 className="text-[28px] md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
          Ready to Modernize Your Clinic?
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of healthcare providers who have already transformed their practice with HealthDesk.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white hover:scale-105 transition-all duration-300 shadow-lg font-medium group rounded-xl"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-base bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 rounded-xl"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book a Demo
          </Button>
        </div>

        {/* Trust indicator */}
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}