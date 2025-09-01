"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hospital-blue">Get In</span>{" "}
            <span className="hospital-green">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            We're here to help. Contact us for appointments, emergencies, or any inquiries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold hospital-green mb-2">Contact Numbers</h3>
            <p className="text-lg font-bold hospital-blue">040-24220599, 24221599</p>
            <p className="text-lg font-bold hospital-blue">Cell: 8801719855</p>
            <p className="text-red-600 font-bold mt-2">24 X 7 EMERGENCY, I.C.U, TRAUMA CARE</p>
            <Button 
              className="mt-4 bg-red-600 hover:bg-red-700"
              onClick={() => toast.error("Emergency services contacted! Help is on the way.")}
            >
              Call Emergency
            </Button>
          </Card>
          
          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold hospital-green mb-2">Location</h3>
            <p className="text-lg font-bold hospital-blue mb-2">PAVAN SAI HOSPITALS</p>
            <p className="text-sm text-gray-700">(ORTHOPAEDIC - NEURO & GENERAL)</p>
            <p className="text-gray-700 mt-3">R. No: 3, Rocktown Colony,</p>
            <p className="text-gray-700">Nagole - LB Nagar Main Road,</p>
            <p className="text-gray-700">Hyderabad - 500 068</p>
            <Button 
              variant="outline" 
              className="mt-4 border-hospital-blue text-hospital-blue hover:bg-hospital-blue hover:text-white"
              onClick={() => toast.info("Opening maps location...")}
            >
              Get Directions
            </Button>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-hospital-green hover:bg-green-800 text-white px-8 py-3 text-lg">
                Schedule Appointment
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Schedule Your Appointment</AlertDialogTitle>
                <AlertDialogDescription>
                  Choose your preferred way to schedule an appointment with our medical team.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="space-y-4 py-4">
                <Button 
                  className="w-full bg-hospital-blue hover:bg-blue-700"
                  onClick={() => {
                    toast.success("Online booking form will open shortly!");
                  }}
                >
                  📱 Book Online
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-hospital-green text-hospital-green hover:bg-hospital-green hover:text-white"
                  onClick={() => {
                    toast.info("Please call +91 9999 XXXX XX to book your appointment");
                  }}
                >
                  📞 Call to Book
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast.info("Visit us at 123 Healthcare Street for walk-in appointments");
                  }}
                >
                  🏥 Walk-in
                </Button>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
}
