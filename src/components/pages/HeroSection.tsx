"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAppointmentClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Appointment request submitted! We'll call you shortly.");
    }, 2000);
  };

  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/psh_hero_section.png')"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center py-40 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <h2 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="text-white">Your Health,</span>{" "}
              <span className="text-white">Our Priority</span>
            </h2>
            <p className="text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              At Pavan Sai Hospitals, we provide comprehensive healthcare services with 
              compassion, expertise, and cutting-edge medical technology. Your well-being 
              is our commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-hospital-blue hover:bg-blue-700 text-white px-8 py-4 text-xl shadow-lg">
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      "Book Appointment"
                    )}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Book Your Appointment</AlertDialogTitle>
                    <AlertDialogDescription>
                      We'll connect you with our medical team to schedule your appointment. 
                      Our staff will call you within 24 hours to confirm your preferred time and date.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={handleAppointmentClick}
                      className="bg-hospital-green hover:bg-green-700"
                    >
                      Confirm Request
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
