export default function PainPoints() {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Tired of These Daily Challenges?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="bg-red-100 dark:bg-red-900/30 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">📅</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Manual Scheduling Chaos</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Double bookings, phone tag, and endless back-and-forth with patients.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 dark:bg-red-900/30 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">📄</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Paper-Based Records</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Lost files, illegible handwriting, and hours wasted searching for patient history.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 dark:bg-red-900/30 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Poor Staff Coordination</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Doctors and receptionists working from different information, leading to mistakes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}