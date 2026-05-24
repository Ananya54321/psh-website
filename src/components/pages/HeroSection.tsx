"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  HeartPulse,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50/50 py-12 sm:py-16 md:py-24 lg:py-32"
    >
      {/* Background patterns and glowing mesh blobs */}
      <div className="absolute inset-0 hero-pattern -z-10" />
      <div className="absolute top-[-10%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-hospital-blue/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-hospital-green/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-hospital-blue/10 border border-hospital-blue/20 rounded-full px-4 py-1.5 text-hospital-blue text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 animate-pulse text-hospital-blue" />
              <span>Top rated healthcare</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6"
            >
              Your Health, <br />
              <span className="text-hospital-blue">Our Priority</span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              At Pavan Sai Hospitals, we provide comprehensive healthcare
              services with compassion, expertise, and cutting-edge medical
              technology. Your well-being is our commitment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-hospital-blue hover:bg-hospital-blue/90 text-white px-8 py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-hospital-blue/20 hover:shadow-xl hover:shadow-hospital-blue/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-semibold inline-flex items-center gap-2 justify-center w-full sm:w-auto">
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-gray-100">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-extrabold hospital-blue flex items-center gap-2">
                      <PhoneCall className="h-6 w-6 text-hospital-blue animate-pulse" />
                      Contact Us to Book
                    </AlertDialogTitle>
                    <div className="text-base text-gray-600 mt-4 space-y-4">
                      <p>
                        Please call our reception desk or cell line to schedule
                        your appointment:
                      </p>

                      <div className="p-4 bg-slate-50/80 backdrop-blur-xs rounded-xl border border-gray-100 space-y-3 shadow-inner">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-500 text-sm">
                            Landline 1:
                          </span>
                          <a
                            href="tel:040-24220599"
                            className="font-bold text-lg hospital-blue hover:underline tracking-wide"
                          >
                            040-24220599
                          </a>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-500 text-sm">
                            Landline 2:
                          </span>
                          <a
                            href="tel:040-24221599"
                            className="font-bold text-lg hospital-blue hover:underline tracking-wide"
                          >
                            040-24221599
                          </a>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                          <span className="font-semibold text-gray-500 text-sm">
                            Mobile / Cell:
                          </span>
                          <a
                            href="tel:8801719855"
                            className="font-bold text-lg hospital-green hover:underline tracking-wide"
                          >
                            8801719855
                          </a>
                        </div>
                      </div>

                      <p className="text-xs text-gray-400 text-center italic">
                        Our team is available to assist you.
                      </p>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="mt-6">
                    <AlertDialogCancel className="bg-hospital-blue hover:bg-hospital-blue/90 text-white hover:text-white border-0 w-full rounded-xl py-3 font-semibold cursor-pointer">
                      Close
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Link href="/insurance" passHref className="w-full sm:w-auto">
                <Button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 px-8 py-6 text-base sm:text-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-semibold inline-flex items-center gap-2 justify-center w-full">
                  <ShieldCheck className="h-5 w-5 text-hospital-blue" />
                  View Accepted Insurances
                </Button>
              </Link>
            </motion.div>

            {/* Trust highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-gray-200/60 mt-2 w-full"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-hospital-blue leading-none">
                  15+
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-gray-500 mt-2 uppercase tracking-wider">
                  Years Excellence
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-hospital-green leading-none">
                  24/7
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-gray-500 mt-2 uppercase tracking-wider">
                  Emergency Care
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-hospital-orange leading-none">
                  15+
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-gray-500 mt-2 uppercase tracking-wider">
                  Specialists
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Styled Image & Floating elements */}
          <div className="lg:col-span-6 relative flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-xl lg:max-w-none lg:scale-105 origin-center lg:origin-right"
            >
              {/* Decorative background ring/shadow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-hospital-blue/20 to-hospital-green/20 rounded-3xl transform rotate-3 scale-[1.02] blur-xs -z-10" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white bg-slate-100 aspect-[4/3] md:aspect-video lg:aspect-[4/3] w-full">
                <Image
                  src="/images/psh_hero_section.png"
                  alt="Pavan Sai Hospitals"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card 1: 24/7 Hotline support */}
              {/* <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 max-w-[240px] hidden sm:flex select-none"
              >
                <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                  <PhoneCall className="h-6 w-6 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    24/7 Emergency
                  </div>
                  <a
                    href="tel:8801719855"
                    className="text-base font-extrabold text-gray-900 hover:text-hospital-blue transition-colors"
                  >
                    8801719855
                  </a>
                </div>
              </motion.div> */}

              {/* Floating Card 2: Interactive Stats */}
              {/* <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 max-w-[220px] hidden sm:flex select-none"
              >
                <div className="p-3 bg-hospital-green/10 text-hospital-green rounded-xl">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    Emergency Care
                  </div>
                  <div className="text-base font-extrabold text-gray-900">
                    Immediate Support
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
