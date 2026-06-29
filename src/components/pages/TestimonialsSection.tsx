"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

function getInitials(name: string) {
  const cleanName = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Dr)\s+/i, "");
  const parts = cleanName.trim().split(/\s+/);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

function getInitialsColor(name: string) {
  const colors = [
    {
      bg: "bg-slate-50",
      text: "text-slate-500",
      border: "border-slate-200/50",
    },
    {
      bg: "bg-sky-50/70",
      text: "text-sky-600/80",
      border: "border-sky-100/50",
    },
    {
      bg: "bg-emerald-50/70",
      text: "text-emerald-600/80",
      border: "border-emerald-100/50",
    },
    {
      bg: "bg-stone-50",
      text: "text-stone-500",
      border: "border-stone-200/50",
    },
    {
      bg: "bg-indigo-50/70",
      text: "text-indigo-600/80",
      border: "border-indigo-100/50",
    },
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  designation: string;
  src?: string;
}

function TestimonialCard({ quote, name, designation }: TestimonialCardProps) {
  const colorScheme = getInitialsColor(name);
  return (
    <div className="group mx-1 sm:mx-2 w-64 sm:w-72 shrink-0 self-start bg-slate-50/50 hover:bg-white border border-transparent hover:border-hospital-blue/20 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-default">
      <div className="mb-3">
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic">
          "{quote}"
        </p>
      </div>

      <div className="flex items-center gap-2.5">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm border-2 shadow-inner select-none shrink-0 transition-all duration-300",
            colorScheme.bg,
            colorScheme.text,
            colorScheme.border,
            "group-hover:bg-hospital-blue/10 group-hover:text-hospital-blue group-hover:border-hospital-blue/20 group-hover:shadow-none",
          )}
        >
          {getInitials(name)}
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-gray-800 text-xs sm:text-sm group-hover:text-hospital-blue transition-colors duration-300 truncate">
            {name}
          </h4>
          <p className="text-[10px] sm:text-xs text-gray-500 font-semibold group-hover:text-hospital-green transition-colors duration-300 truncate">
            {designation}
          </p>
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
            <span className="hospital-blue">Our Patient</span>{" "}
            <span className="hospital-green">TESTIMONIALS</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from our satisfied patients who have experienced our
            compassionate care and medical excellence
          </p>
        </div>

        <div className="relative">
          {/* First row - left to right */}
          <Marquee pauseOnHover className="[--duration:60s] mb-3">
            {testimonials.slice(0, 4).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>

          {/* Second row - right to left */}
          <Marquee reverse pauseOnHover className="[--duration:80s]">
            {testimonials.slice(4, 8).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
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
