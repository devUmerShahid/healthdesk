import { Calendar, Users, FileText, Bell, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  { icon: Calendar, title: "Smart Appointment Booking", desc: "Online booking, real-time doctor availability, walk-ins & waitlist management." },
  { icon: Users, title: "Complete Patient Management", desc: "Digital profiles, medical history, visit notes, and secure document storage." },
  { icon: FileText, title: "Digital Prescriptions & Notes", desc: "Easy prescription builder with PDF export and clinical notes." },
  { icon: Bell, title: "Automated Email Reminders", desc: "Reduce no-shows with timely patient reminders." },
  { icon: Shield, title: "Role-Based Secure Access", desc: "Separate dashboards for Admin, Doctors, Receptionists, and Patients." },
];

export default function Features() {
  return (
    <section className="w-full py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Everything Your Clinic Needs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}