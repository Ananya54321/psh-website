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

function TestimonialCard({ quote, name, designation, src }: TestimonialCardProps) {
  return (
    <div className="mx-4 w-80 rounded-lg bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
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
      quote: "Excellent care and treatment. The doctors are very professional and caring. The staff went above and beyond to ensure my comfort during my cardiac surgery. I'm truly grateful for their expertise and compassion.",
      name: "Sunita Devi",
      designation: "Cardiac Surgery Patient",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Quick emergency response and outstanding medical facilities. Highly recommended! The emergency team saved my life with their swift action and professional expertise. The facilities are world-class.",
      name: "Rahul Gupta", 
      designation: "Emergency Care Patient",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The maternity ward staff was amazing during my delivery. Thank you team! From prenatal care to delivery and post-natal support, every step was handled with care and professionalism. I felt safe and supported throughout.",
      name: "Meera Singh",
      designation: "Maternity Care Patient", 
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Outstanding orthopedic treatment and rehabilitation services. The physiotherapy team helped me recover completely from my injury. Dr. Pavan and his team are truly exceptional in their field.",
      name: "Amit Kumar",
      designation: "Orthopedic Patient",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The neurology department provided excellent care for my father. The doctors explained everything clearly and the treatment was successful. We are forever grateful to Pavan Sai Hospitals.",
      name: "Priya Sharma",
      designation: "Neurology Patient Family",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-hospital-blue/5 to-hospital-green/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hospital-blue">PATIENT</span>{" "}
            <span className="hospital-green">TESTIMONIALS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from our satisfied patients who have experienced our compassionate care and medical excellence
          </p>
        </div>

        <div className="relative">
          {/* First row - left to right */}
          <Marquee pauseOnHover className="[--duration:60s] mb-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          
          {/* Second row - right to left */}
          <Marquee reverse pauseOnHover className="[--duration:80s]">
            {testimonials.slice(2, 5).map((testimonial, index) => (
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
