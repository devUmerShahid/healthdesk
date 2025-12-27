import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full bg-blue-600 dark:bg-blue-900 py-20">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Ready to Modernize Your Clinic?
        </h2>
        <p className="text-xl text-blue-100 mb-12">
          Join hundreds of clinics already saving time and improving patient care.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-12 py-7">
            Start Your Free Trial
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-12 py-7 text-white border-white hover:bg-white hover:text-blue-600">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}