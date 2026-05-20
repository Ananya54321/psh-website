export function StatsSection() {
  const stats = [
    // { number: "50+", label: "Expert Doctors" },
    { number: "6000+", label: "Happy Patients" },
    { number: "18+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Care" },
  ];

  return (
    <section className="bg-hospital-blue text-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl font-bold hospital-orange">
                {stat.number}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
