"use client";

import { motion } from "framer-motion";
import { Calendar, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
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
      className="relative overflow-hidden py-20 sm:py-24 md:py-32 flex items-center min-h-[85vh] text-white"
    >
      {/* Full Background Image */}
      <Image
        src="/images/psh_hero_section.png"
        alt="Pavan Sai Hospitals background"
        fill
        priority
        className="object-cover z-0"
      />
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-6 drop-shadow-md"
          >
            Your Health, <br />
            <span className="text-hospital-green">Our Priority</span>
          </motion.h2>

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
                  <AlertDialogCancel className="bg-hospital-blue hover:bg-hospital-blue/90 text-white hover:text-white border-0 w-full rounded-full py-3 font-semibold cursor-pointer">
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
                15+
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-white mt-2 uppercase tracking-wider drop-shadow-xs">
                Specialists
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
