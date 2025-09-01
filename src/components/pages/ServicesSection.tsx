"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MinimalCard, 
  MinimalCardContent, 
  MinimalCardDescription, 
  MinimalCardFooter, 
  MinimalCardImage, 
  MinimalCardTitle 
} from "@/components/ui/minimal-card";
import { toast } from "sonner";

export function ServicesSection() {
  const services = [
    {
      title: "Orthopedics - Trauma Care",
      description: "Comprehensive bone, joint care and emergency trauma treatment",
      icon: "🦴",
      category: "Specialty",
      image: "/images/services/ortho.png"
    },
    {
      title: "Neurology & Neurosurgery",
      description: "Advanced brain and nervous system care with expert neurologists",
      icon: "🧠",
      category: "Specialty",
      image: "/images/services/neuro.png"
    },
    {
      title: "General Medicine",
      description: "Comprehensive primary healthcare and medical consultations",
      icon: "⚕️",
      category: "General",
      image: "/images/services/general_med.png"
    },
    {
      title: "General & Laparoscopy Surgery",
      description: "Minimally invasive surgical procedures with advanced techniques",
      icon: "🏥",
      category: "Surgery",
      image: "/images/services/laparoscopy.png"
    },
    {
      title: "ENT & Plastic Surgery",
      description: "Ear, nose, throat care and reconstructive plastic surgery",
      icon: "👂",
      category: "Specialty",
      image: "/images/services/ent.png"
    },
    {
      title: "Gynecology & Obstetrics",
      description: "Complete women's health and maternity care services",
      icon: "👶",
      category: "Women's Health",
      image: "/images/services/gyneco.png"
    },
    {
      title: "Urology",
      description: "Specialized care for urinary system and male reproductive health",
      icon: "🩺",
      category: "Specialty",
      image: "/images/services/uro.png"
    },
    {
      title: "Gastro Enterology",
      description: "Digestive system care and gastrointestinal treatments",
      icon: "🫁",
      category: "Specialty",
      image: "/images/services/gastro.png"
    },
    {
      title: "Physiotherapy",
      description: "Rehabilitation and physical therapy for recovery and wellness",
      icon: "🏃‍♂️",
      category: "Rehabilitation",
      image: "/images/services/physio.png"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hospital-blue">SPECIALITY</span>{" "}
            <span className="hospital-green">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive specialty healthcare services with state-of-the-art facilities 
            and experienced medical professionals dedicated to your well-being.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <MinimalCard key={index} className="hover:scale-105 transition-all duration-300">
              <MinimalCardImage 
                src={service.image} 
                alt={service.title}
              />
              <MinimalCardContent>
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-hospital-orange text-white">
                    {service.category}
                  </Badge>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <MinimalCardTitle className="hospital-green text-xl mb-2">
                  {service.title}
                </MinimalCardTitle>
                <MinimalCardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </MinimalCardDescription>
              </MinimalCardContent>
              <MinimalCardFooter>
                <Button 
                  className="w-full bg-hospital-blue hover:bg-blue-700"
                  onClick={() => toast.success(`Learn more about ${service.title}`)}
                >
                  Learn More
                </Button>
              </MinimalCardFooter>
            </MinimalCard>
          ))}
        </div>
      </div>
    </section>
  );
}
