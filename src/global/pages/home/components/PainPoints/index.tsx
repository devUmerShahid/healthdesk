import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
  {
    icon: "📅",
    title: "Manual Scheduling Chaos",
    description: "Double bookings, phone tag, and endless back-and-forth with patients.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: "📄",
    title: "Paper-Based Records",
    description: "Lost files, illegible handwriting, and hours wasted searching for patient history.",
    color: "from-cyan-500 to-blue-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    icon: "👥",
    title: "Poor Staff Coordination",
    description: "Doctors and receptionists working from different information, leading to mistakes.",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
  },
];

export default function PainPoints() {
  return (
    <section className="w-full py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700 mb-4">
            Common Challenges
          </span>
          <h2 className="text-[28px] md:text-[28px] font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Tired of These Daily Challenges?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl text-lg">
            We understand the frustrations you face every day. Let's solve them together.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <CardContent className="relative pt-10 pb-8 px-6 text-center">
                {/* Icon Container */}
                <div className={`${point.bgColor} rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <span className="text-4xl">{point.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 dark:group-hover:from-blue-400 dark:group-hover:to-cyan-400 transition-all duration-300">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {point.description}
                </p>

                {/* Decorative bottom line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${point.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </CardContent>
            </Card>
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