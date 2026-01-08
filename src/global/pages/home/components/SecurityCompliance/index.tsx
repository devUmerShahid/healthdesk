import { Shield, Lock, FileCheck, Server, UserCheck, Activity } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "HIPAA Compliant",
    desc: "Built from the ground up to meet strict HIPAA standards for protected health information."
  },
  {
    icon: <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "End-to-End Encryption",
    desc: "All data encrypted in transit and at rest. Only authorized roles can access patient records."
  },
  {
    icon: <Server className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "Secure Cloud Storage",
    desc: "Powered by trusted providers with regular audits and compliance certifications."
  },
  {
    icon: <UserCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "Role-Based Access",
    desc: "Granular permission controls ensure staff only access data relevant to their role."
  },
  {
    icon: <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "24/7 Monitoring",
    desc: "Continuous security monitoring and automated threat detection systems."
  },
  {
    icon: <FileCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "Regular Backups",
    desc: "Automated daily backups with point-in-time recovery capabilities."
  }
];

export default function SecurityCompliance() {
  return (
    <section className="w-full py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-cyan-100/50 dark:bg-cyan-900/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700 mb-4">
            Security & Trust
          </span>
          <h2 className="text-[28px] md:text-[28px] font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Your Patient Data Is Safe With Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl text-lg">
            Enterprise-grade security measures to protect sensitive medical information
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 mb-6 group-hover:scale-110 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/50 transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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