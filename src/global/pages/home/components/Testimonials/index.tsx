import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "HealthDesk transformed how we manage appointments. No-shows dropped by 60% in the first month!",
    author: "Dr. Sarah Chen",
    role: "Medical Director, Riverside Family Clinic (45 beds)",
  },
  {
    quote: "Finally, a system that understands small hospital needs. Patient records are now digital and easy to access.",
    author: "Maria Gonzalez",
    role: "Head Nurse, Oakwood Community Hospital (80 beds)",
  },
  {
    quote: "The role-based access keeps everything secure while letting our team collaborate efficiently.",
    author: "Dr. James Patel",
    role: "Chief Physician, Green Valley Medical Center",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Loved by Clinics Like Yours
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <Card key={i} className="relative">
              <CardContent className="pt-10">
                <Quote className="h-10 w-10 text-blue-600 absolute top-4 left-6 opacity-50" />
                <p className="text-lg italic mb-8 pl-4">"{t.quote}"</p>
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}