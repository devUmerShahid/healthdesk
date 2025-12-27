import { Shield, Lock, FileCheck } from "lucide-react";

export default function SecurityCompliance() {
  return (
    <section className="w-full py-20 bg-blue-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Your Patient Data Is Safe With Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">HIPAA Compliant</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built from the ground up to meet strict HIPAA standards for protected health information.
            </p>
          </div>
          <div className="text-center">
            <Lock className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">End-to-End Encryption</h3>
            <p className="text-gray-600 dark:text-gray-300">
              All data encrypted in transit and at rest. Only authorized roles can access patient records.
            </p>
          </div>
          <div className="text-center">
            <FileCheck className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Secure Cloud Storage</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Powered by trusted providers with regular audits and compliance certifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}