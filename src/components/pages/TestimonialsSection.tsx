"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

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

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
