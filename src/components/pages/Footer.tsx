import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";

export function Footer() {
  return (
    <footer className="bg-hospital-blue text-white">
      <div className="py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
            {/* Hospital Building Image */}
            <div className="flex justify-center lg:justify-start items-start">
              <div className="relative w-full max-w-[200px] aspect-square rounded-2xl overflow-hidden shadow-sm border-2 border-white/40 group">
                <Image
                  src="/images/psh-building.jpeg"
                  alt="Pavan Sai Hospitals Building"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-xs font-semibold tracking-widest uppercase opacity-90">
                    Est. 2008
                  </span>
                </div>
              </div>
            </div>

            {/* Brand Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <MdLocalHospital className="text-white/75 text-lg" />
                <span className="text-xs uppercase tracking-widest text-white/75 font-semibold">
                  About Us
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">
                Pavan Sai Hospitals
              </h3>
              <p className="text-white/90 leading-relaxed text-sm">
                With a mission, through our vision — changing lives since 2008.
                We are committed to compassionate, expert care for every
                patient.
              </p>
              <div className="mt-6 pt-5 border-t border-white/25">
                <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-xs text-white font-medium tracking-wide uppercase">
                    24 × 7 Emergency Services
                  </p>
                </div>
              </div>
            </div>

            {/* Location Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <FaMapMarkerAlt className="text-white/75 text-base" />
                <span className="text-xs uppercase tracking-widest text-white/75 font-semibold">
                  Find Us
                </span>
              </div>
              <h4 className="text-lg font-bold mb-4 tracking-wide">
                Location
              </h4>
              <div className="space-y-1 text-white/90 text-sm leading-relaxed pl-1 border-l-2 border-white/35">
                <p className="pl-3">R. No: 3, Rocktown Colony,</p>
                <p className="pl-3">Nagole - LB Nagar Main Road,</p>
                <p className="pl-3">Hyderabad - 500 068</p>
              </div>
            </div>

            {/* Emergency Contact Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <FaPhoneAlt className="text-white/75 text-sm" />
                <span className="text-xs uppercase tracking-widest text-white/75 font-semibold">
                  Emergency
                </span>
              </div>
              <h4 className="text-lg font-bold mb-4 tracking-wide">
                Contact
              </h4>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/75 mb-4">
                ICU · Trauma · Critical Care
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/15 rounded-xl px-3 py-2.5">
                  <FaPhoneAlt className="text-white/80 flex-shrink-0 text-xs" />
                  <p className="text-sm font-bold hospital-orange">
                    040-24220599 / 24221599
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white/15 rounded-xl px-3 py-2.5">
                  <FaPhoneAlt className="text-white/80 flex-shrink-0 text-xs" />
                  <p className="text-sm font-bold hospital-orange">
                    Cell: 8801719855
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/25 py-5 px-4 sm:px-6 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} Pavan Sai Hospitals. All rights
            reserved.
          </p>
          <p className="text-white/80 text-sm font-medium tracking-widest uppercase text-xs">
            Changing lives since 2008
          </p>
        </div>
      </div>
    </footer>
  );
}
