"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/psh_hero_section.png')",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center py-20 md:py-40 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
              <span className="text-white">Your Health,</span>{" "}
              <span className="text-white">Our Priority</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              At Pavan Sai Hospitals, we provide comprehensive healthcare
              services with compassion, expertise, and cutting-edge medical
              technology. Your well-being is our commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-hospital-blue hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl shadow-lg cursor-pointer">
                    Book Appointment
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-md rounded-lg bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-bold hospital-blue">
                      Contact Us to Book
                    </AlertDialogTitle>
                    <div className="text-base text-gray-700 mt-4 space-y-4">
                      <p>
                        Please call our reception desk or cell line to schedule
                        your appointment:
                      </p>

                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-600">
                            Landline 1:
                          </span>
                          <a
                            href="tel:040-24220599"
                            className="font-bold text-lg hospital-blue hover:underline"
                          >
                            040-24220599
                          </a>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-600">
                            Landline 2:
                          </span>
                          <a
                            href="tel:040-24221599"
                            className="font-bold text-lg hospital-blue hover:underline"
                          >
                            040-24221599
                          </a>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                          <span className="font-semibold text-gray-600">
                            Mobile / Cell:
                          </span>
                          <a
                            href="tel:8801719855"
                            className="font-bold text-lg hospital-green hover:underline"
                          >
                            8801719855
                          </a>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 text-center">
                        Our team is available to assist you.
                      </p>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="mt-4">
                    <AlertDialogCancel className="bg-hospital-blue hover:bg-blue-700 text-white hover:text-white border-0 w-full sm:w-auto cursor-pointer">
                      Close
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Link href="/insurance" passHref>
                <Button className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl shadow-lg transition-colors cursor-pointer">
                  View Accepted Insurances
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
