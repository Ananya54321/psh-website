"use client";

import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

function TestimonialCard({
  quote,
  name,
  designation,
  src,
}: TestimonialCardProps) {
  return (
    <div className="mx-2 sm:mx-4 w-72 sm:w-80 shrink-0 rounded-lg bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed italic">
          "{quote}"
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={src}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-hospital-blue/20"
        />
        <div>
          <h4 className="font-semibold text-hospital-green">{name}</h4>
          <p className="text-xs text-gray-500">{designation}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I was admitted for neurogenic tumor surgery and am extremely happy with the treatment and care. Dr. Srinivas Goud and Dr. Srikanth are humble and patient-friendly. 100% patient-friendly hospital.",
      name: "Sushmitha Balavani",
      designation: "Neurosurgery Patient",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face&q=80",
    },
    {
      quote:
        "Dr. Srinivas Reddy is an excellent physiotherapist. He uses advanced techniques suited for different post-operative conditions, which helped my wife recover quickly after her humerus fracture surgery.",
      name: "Dr. Suhas Sh",
      designation: "Patient Family & Medical Professional",
      src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&h=150&fit=crop&crop=face&q=80",
    },
    {
      quote:
        "Cooperative staff who understand the patient's problems very well. It's a great hospital with a service-oriented mindset, providing high-quality treatment to everyone.",
      name: "Sai Pavan",
      designation: "Outpatient Care",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80",
    },
    {
      quote:
        "The doctors, especially Dr. Srinivas, are very professional and take outstanding care of patients. The nursing staff was very attentive throughout my stay. Highly recommended.",
      name: "Lavanya Botcha",
      designation: "Inpatient Stay",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&q=80",
    },
    {
      quote:
        "Visited for my brother's critical bone fracture. Dr. Srinivas Goud studied the problem carefully and discussed solutions with us. Excellent care post-surgery, highly recommend for Orthopaedic cases.",
      name: "Raghupathi Ch",
      designation: "Orthopedic Patient Family",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&q=80",
    },
    {
      quote:
        "Excellent treatment in Pavan Sai Hospitals. Dr. Srinivas Goud is the best orthopedic surgeon in the city, supported by an experienced staff. We were also able to claim medical insurance smoothly.",
      name: "SSR",
      designation: "Orthopedic Patient",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&q=80",
    },
    {
      quote:
        "Admitted for Arthroscopic surgery. I am very happy with the service, treatment, and caring nature of the hospital staff. Dr. Srinivas Goud is humble and patient-friendly.",
      name: "Madhusudhan J",
      designation: "Arthroscopic Surgery Patient",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face&q=80",
    },
    {
      quote:
        "We came to Pavan Sai Hospital for my mother's treatment for high fever and low blood pressure. The management and staff received us politely, kept the environment clean, and cared for us very well.",
      name: "Virothi Santhosh Kumar",
      designation: "Emergency Patient Family",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&q=80",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-hospital-blue/5 to-hospital-green/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="hospital-blue">PATIENT</span>{" "}
            <span className="hospital-green">TESTIMONIALS</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from our satisfied patients who have experienced our
            compassionate care and medical excellence
          </p>
        </div>

        <div className="relative">
          {/* First row - left to right */}
          <Marquee pauseOnHover className="[--duration:60s] mb-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>

          {/* Second row - right to left */}
          <Marquee reverse pauseOnHover className="[--duration:80s]">
            {testimonials.slice(4, 8).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
