"use client";

import { motion } from "framer-motion";
import { Calendar, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
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
      className="relative overflow-hidden py-20 sm:py-24 md:py-32 lg:py-36 flex items-center min-h-[85vh] text-white"
    >
      {/* Full Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/hero_anim.mp4" type="video/mp4" />
      </video>
      {/* Premium subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl flex flex-col items-start text-left">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 animate-pulse text-hospital-green" />
            <span>Top rated healthcare</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-6 drop-shadow-md"
          >
            Your Health, <br />
            <span className="text-hospital-green">Our Priority</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-8 max-w-xl drop-shadow-sm"
          >
            At Pavan Sai Hospitals, we provide comprehensive healthcare services
            with compassion, expertise, and cutting-edge medical technology.
            Your well-being is our commitment.
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
                <Button className="bg-hospital-blue hover:bg-hospital-blue/90 text-white px-12 py-6 text-base sm:text-lg rounded-full shadow-lg shadow-hospital-blue/20 hover:shadow-xl hover:shadow-hospital-blue/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-semibold inline-flex items-center gap-2 justify-center w-full sm:w-auto">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-sm sm:max-w-md p-0 gap-0 rounded-2xl overflow-hidden border-0 shadow-2xl">
                {/* Branded header */}
                <AlertDialogHeader className="p-0">
                  <div className="bg-[#2c6b7a] px-6 py-5 text-white">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 bg-white/20 rounded-xl flex-shrink-0">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <AlertDialogTitle className="text-xl font-extrabold text-white leading-tight">
                          Book an Appointment
                        </AlertDialogTitle>
                        <p className="text-white/70 text-xs font-medium mt-0.5">
                          Pavan Sai Hospitals
                        </p>
                      </div>
                    </div>
                  </div>
                </AlertDialogHeader>

                {/* Contact numbers */}
                <div className="px-6 py-5 bg-white space-y-4">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Call our reception to schedule your appointment. We&apos;re
                    available 24/7 for your care.
                  </p>

                  <div className="space-y-2.5">
                    <a
                      href="tel:04024220599"
                      className="flex items-center gap-3.5 p-3.5 bg-slate-50 hover:bg-hospital-blue/5 border border-slate-100 hover:border-hospital-blue/20 rounded-xl transition-all duration-200 group"
                    >
                      <div className="p-2 bg-hospital-blue/10 group-hover:bg-hospital-blue/15 rounded-lg transition-colors flex-shrink-0">
                        <PhoneCall className="h-4 w-4 text-hospital-blue" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                          Landline 1
                        </p>
                        <p className="font-bold text-gray-800 group-hover:text-hospital-blue transition-colors text-base tracking-wide">
                          040-24220599
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:04024221599"
                      className="flex items-center gap-3.5 p-3.5 bg-slate-50 hover:bg-hospital-blue/5 border border-slate-100 hover:border-hospital-blue/20 rounded-xl transition-all duration-200 group"
                    >
                      <div className="p-2 bg-hospital-blue/10 group-hover:bg-hospital-blue/15 rounded-lg transition-colors flex-shrink-0">
                        <PhoneCall className="h-4 w-4 text-hospital-blue" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                          Landline 2
                        </p>
                        <p className="font-bold text-gray-800 group-hover:text-hospital-blue transition-colors text-base tracking-wide">
                          040-24221599
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:8801719855"
                      className="flex items-center gap-3.5 p-3.5 bg-hospital-green/5 hover:bg-hospital-green/10 border border-hospital-green/15 hover:border-hospital-green/30 rounded-xl transition-all duration-200 group"
                    >
                      <div className="p-2 bg-hospital-green/10 group-hover:bg-hospital-green/20 rounded-lg transition-colors flex-shrink-0">
                        <PhoneCall className="h-4 w-4 text-hospital-green" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                          Mobile / Cell
                        </p>
                        <p className="font-bold text-gray-800 group-hover:text-hospital-green transition-colors text-base tracking-wide">
                          8801719855
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-2 pt-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    <p className="text-xs text-gray-400 font-medium">
                      24 × 7 Emergency &amp; ICU Services
                    </p>
                  </div>
                </div>

                <AlertDialogFooter className="px-6 pb-6 pt-0 bg-white">
                  <AlertDialogCancel className="bg-hospital-blue hover:bg-hospital-blue/90 text-white hover:text-white border-0 w-full rounded-xl py-3 font-semibold cursor-pointer text-sm">
                    Close
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Link href="/insurance" passHref className="w-full sm:w-auto">
              <Button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-xs px-8 py-6 text-base sm:text-lg rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-semibold inline-flex items-center gap-2 justify-center w-full">
                <ShieldCheck className="h-5 w-5 text-hospital-green" />
                View Accepted Insurances
              </Button>
            </Link>
          </motion.div>

          {/* Trust highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/20 mt-2 w-full"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none drop-shadow-sm">
                18+
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-white mt-2 uppercase tracking-wider drop-shadow-xs">
                Years Excellence
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-hospital-green leading-none drop-shadow-sm">
                24/7
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-white mt-2 uppercase tracking-wider drop-shadow-xs">
                Emergency Care
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-hospital-orange leading-none drop-shadow-sm">
                7000+
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-white mt-2 uppercase tracking-wider drop-shadow-xs">
                Patients Treated
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
