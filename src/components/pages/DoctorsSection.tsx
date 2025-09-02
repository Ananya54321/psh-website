"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export function DoctorsSection() {
  const [isLoading, setIsLoading] = useState(false);

  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Senior Cardiologist | 15+ Years Experience",
      quote: "Specializing in interventional cardiology and heart surgeries. I am committed to providing comprehensive cardiac care with cutting-edge treatment options. My focus is on preventive cardiology and helping patients maintain optimal heart health through personalized treatment plans.",
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop&crop=face&q=80"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Pediatric Specialist | 12+ Years Experience",
      quote: "Dedicated to providing exceptional pediatric care from newborns to adolescents. I believe in creating a comfortable and friendly environment for children while ensuring the highest quality medical care. My expertise includes child development, vaccination programs, and pediatric emergency care.",
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face&q=80"
    },
    {
      name: "Dr. Amit Patel",
      designation: "Orthopedic Surgeon | 18+ Years Experience", 
      quote: "Expert in joint replacement, sports injuries, and trauma surgery. I utilize the latest minimally invasive techniques to ensure faster recovery and better outcomes for my patients. My approach combines advanced surgical skills with comprehensive rehabilitation programs.",
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=500&fit=crop&crop=face&q=80"
    },
    {
      name: "Dr. Sunita Reddy",
      designation: "Neurologist | 14+ Years Experience",
      quote: "Specializing in stroke treatment, epilepsy management, and neurological disorders. I am passionate about using advanced neuroimaging and innovative treatment approaches to help patients with complex neurological conditions achieve the best possible outcomes.",
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face&q=80"
    },
    {
      name: "Dr. Vikram Singh",
      designation: "General Surgeon | 16+ Years Experience",
      quote: "Expert in laparoscopic and minimally invasive surgeries. I focus on providing personalized surgical care with emphasis on faster recovery and minimal scarring. My expertise includes general surgery, emergency procedures, and advanced laparoscopic techniques.",
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop&crop=face&q=80"
    }
  ];

  return (
    <section id="doctors" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hospital-blue">Meet Our</span>{" "}
            <span className="hospital-green">Expert Doctors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced medical professionals is dedicated to providing you with the best care. 
            Each doctor brings years of expertise and a commitment to patient-centered healthcare.
          </p>
        </div>

        <AnimatedTestimonials testimonials={doctors} autoplay={true} />
        
      </div>
    </section>
  );
}
