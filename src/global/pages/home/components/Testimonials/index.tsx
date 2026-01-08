import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "HealthDesk transformed how we manage appointments. No-shows dropped by 60% in the first month!",
    author: "Dr. Sarah Chen",
    role: "Medical Director, Riverside Family Clinic (45 beds)",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    quote: "Finally, a system that understands small hospital needs. Patient records are now digital and easy to access.",
    author: "Maria Gonzalez",
    role: "Head Nurse, Oakwood Community Hospital (80 beds)",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  },
  {
    quote: "The role-based access keeps everything secure while letting our team collaborate efficiently.",
    author: "Dr. James Patel",
    role: "Chief Physician, Green Valley Medical Center",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getCardPosition = (index: number) => {
    const diff = index - activeIndex;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(testimonials.length - 1)) return "right";
    if (diff === -1 || diff === testimonials.length - 1) return "left";
    return "hidden";
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700 mb-4">
            Testimonials
          </span>
          <h2 className="text-[28px] md:text-[28px] font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Loved by Clinics Like Yours
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl text-lg">
            Hear from healthcare professionals who transformed their practice with HealthDesk
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Previous Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 z-10 p-3 rounded-full bg-white dark:bg-gray-800 border-none outline-none focus:outline-none active:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full max-w-5xl h-[400px] flex items-center justify-center overflow-hidden">
            {testimonials.map((t, i) => {
              const position = getCardPosition(i);

              return (
                <Card
                  key={i}
                  className={`absolute transition-all duration-500 ease-in-out ${position === "center"
                    ? "z-20 scale-100 opacity-100 translate-x-0"
                    : position === "left"
                      ? "z-10 scale-90 opacity-40 -translate-x-[70%] blur-[2px]"
                      : position === "right"
                        ? "z-10 scale-90 opacity-40 translate-x-[70%] blur-[2px]"
                        : "opacity-0 scale-75"
                    } ${position === "center" ? "w-[85vw] md:w-[500px]" : "w-[75vw] md:w-[450px]"
                    }`}
                >
                  <CardContent className="pt-10 pb-8 px-8">
                    <Quote className="h-10 w-10 text-blue-600 absolute top-4 left-6 opacity-50" />
                    <p className="text-lg italic mb-8 pl-4">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={t.image}
                        alt={t.author}
                        className="w-14 h-14 rounded-full object-cover !bg-[#f5f5f5]"
                      />
                      <div>
                        <div className="font-semibold">{t.author}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{t.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-3 rounded-full bg-white dark:bg-gray-800 border-none outline-none focus:outline-none active:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>


      </div>
    </section>
  );
}