import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-hospital-blue text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Hospital Building Image Column */}
          <div className="flex justify-center lg:justify-start items-center">
            <div className="relative w-full max-w-[200px] sm:max-w-[220px] aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white/20 group">
              <Image
                src="/images/psh-building.jpeg"
                alt="Pavan Sai Hospitals Building"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Brand Column */}
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-bold tracking-tight">
              Pavan Sai Hospitals
            </span>
            <p className="opacity-90 leading-relaxed text-sm sm:text-base">
              With a mission, through our vision...changing lives since 2008. We
              are committed to your well-being.
            </p>
          </div>

          {/* Location Column */}
          <div className="flex flex-col justify-center">
            <h4 className="text-lg font-bold mb-5 tracking-wide uppercase text-white/90">
              Location
            </h4>
            <div className="space-y-1 opacity-90 text-sm sm:text-base">
              <p>R. No: 3, Rocktown Colony,</p>
              <p>Nagole - LB Nagar Main Road,</p>
              <p>Hyderabad - 500 068</p>
            </div>
          </div>

          {/* Emergency Contact Column */}
          <div className="flex flex-col justify-center">
            <h4 className="text-lg font-bold mb-5 tracking-wide uppercase text-white/90">
              Emergency Contact
            </h4>
            <p className="opacity-90 mb-3 text-sm font-medium tracking-wide">
              24 X 7 EMERGENCY, I.C.U, TRAUMA CARE
            </p>
            <div className="space-y-2">
              <p className="text-xl font-bold hospital-orange drop-shadow-sm">
                040-24220599, 24221599
              </p>
              <p className="text-xl font-bold hospital-orange drop-shadow-sm">
                Cell: 8801719855
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="opacity-80 text-sm">
            © {new Date().getFullYear()} Pavan Sai Hospitals. All rights
            reserved.
          </p>
          <p className="opacity-80 text-sm font-medium tracking-wide">
            Changing lives since 2008
          </p>
        </div>
      </div>
    </footer>
  );
}
