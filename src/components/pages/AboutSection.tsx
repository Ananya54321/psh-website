export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 md:py-20 px-4 sm:px-6 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="hospital-blue">About Pawan Sai</span>{" "}
              <span className="hospital-green">HOSPITALS</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of dedicated service to the community, Pawan
              Sai Hospitals has established itself as a trusted healthcare
              provider. We combine medical excellence with compassionate care to
              ensure the best outcomes for our patients.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-hospital-green rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Expert medical professionals
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-hospital-green rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Advanced medical technology
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-hospital-green rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">24/7 emergency services</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-hospital-green rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Patient-centered care approach
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-hospital-blue to-hospital-green rounded-3xl p-8 text-white">
            <div className="text-center">
              <div className="text-6xl mb-6">👨‍⚕️</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To provide exceptional healthcare services that improve the
                quality of life for our patients and community through
                innovative medical practices, compassionate care, and continuous
                improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
