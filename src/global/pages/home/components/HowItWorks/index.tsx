const steps = [
  { step: "1", title: "Sign Up & Set Up Clinic", desc: "Create your account and add doctors' schedules in minutes." },
  { step: "2", title: "Invite Staff & Patients", desc: "Add receptionists, doctors, and let patients register online." },
  { step: "3", title: "Start Booking Appointments", desc: "Patients book online, staff manage walk-ins seamlessly." },
  { step: "4", title: "Manage Records & Billing", desc: "Digital prescriptions, notes, payments — all in one place." },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get Started in 4 Simple Steps
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}