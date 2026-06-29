"use client";

import {
  FaBone,
  FaBrain,
  FaEye,
  FaRunning,
  FaStethoscope,
  FaSyringe,
  FaUserMd,
} from "react-icons/fa";
import { GiLungs } from "react-icons/gi";
import { Badge } from "@/components/ui/badge";
import {
  FlipCard,
  FlipCardBack,
  FlipCardFront,
} from "@/components/ui/flip-card";

export function ServicesSection() {
  const services = [
    {
      title: "Orthopedics - Trauma Care",
      description:
        "Comprehensive bone, joint care and emergency trauma treatment",
      longDescription:
        "Our orthopedic department provides comprehensive care for bone fractures, joint replacements, sports injuries, and emergency trauma cases. We use the latest surgical techniques and rehabilitation protocols.",
      icon: FaBone,
      category: "Specialty",
      image: "/images/services/ortho.png",
      features: [
        "24/7 Emergency Care",
        "Joint Replacement",
        "Sports Medicine",
        "Rehabilitation",
      ],
    },
    {
      title: "Neurology & Neurosurgery",
      description:
        "Advanced brain and nervous system care with expert neurologists",
      longDescription:
        "State-of-the-art neurological care including brain surgery, stroke treatment, epilepsy management, and comprehensive neurological diagnostics with advanced imaging.",
      icon: FaBrain,
      category: "Specialty",
      image: "/images/services/neuro.png",
      features: [
        "Brain Surgery",
        "Stroke Care",
        "Epilepsy Treatment",
        "Neuroimaging",
      ],
    },
    {
      title: "General Medicine",
      description: "Comprehensive primary healthcare and medical consultations",
      longDescription:
        "Complete primary healthcare services including routine check-ups, chronic disease management, preventive care, and coordination with specialist services.",
      icon: FaStethoscope,
      category: "General",
      image: "/images/services/general_med.png",
      features: [
        "Health Check-ups",
        "Chronic Disease Care",
        "Preventive Medicine",
        "Health Screening",
      ],
    },
    {
      title: "General & Laparoscopy Surgery",
      description:
        "Minimally invasive surgical procedures with advanced techniques",
      longDescription:
        "Advanced surgical services using minimally invasive laparoscopic techniques for faster recovery, reduced pain, and better cosmetic outcomes.",
      icon: FaSyringe,
      category: "Surgery",
      image: "/images/services/laparoscopy.png",
      features: [
        "Minimally Invasive",
        "Faster Recovery",
        "Advanced Equipment",
        "Expert Surgeons",
      ],
    },
    {
      title: "ENT & Plastic Surgery",
      description: "Ear, nose, throat care and reconstructive plastic surgery",
      longDescription:
        "Comprehensive ENT services and plastic surgery including reconstructive procedures, cosmetic enhancements, and specialized ear, nose, and throat treatments.",
      icon: FaEye,
      category: "Specialty",
      image: "/images/services/ent.png",
      features: [
        "Reconstructive Surgery",
        "Cosmetic Procedures",
        "ENT Disorders",
        "Hearing Care",
      ],
    },
    {
      title: "Urology",
      description:
        "Specialized care for urinary system and male reproductive health",
      longDescription:
        "Expert urological care including kidney stone treatment, prostate care, urinary tract disorders, and male reproductive health services with modern equipment.",
      icon: FaUserMd,
      category: "Specialty",
      image: "/images/services/uro.png",
      features: [
        "Kidney Stone Care",
        "Prostate Treatment",
        "Urinary Disorders",
        "Men's Health",
      ],
    },
    {
      title: "Gastro Enterology",
      description: "Digestive system care and gastrointestinal treatments",
      longDescription:
        "Complete digestive health services including endoscopy, liver care, digestive disorder treatment, and nutritional counseling for optimal gut health.",
      icon: GiLungs,
      category: "Specialty",
      image: "/images/services/gastro.png",
      features: [
        "Endoscopy Services",
        "Liver Care",
        "Digestive Health",
        "Nutrition Counseling",
      ],
    },
    {
      title: "Physiotherapy",
      description:
        "Rehabilitation and physical therapy for recovery and wellness",
      longDescription:
        "Comprehensive rehabilitation services including post-surgical recovery, sports injury rehabilitation, pain management, and mobility improvement programs.",
      icon: FaRunning,
      category: "Rehabilitation",
      image: "/images/services/physio.png",
      features: [
        "Post-Surgery Rehab",
        "Sports Recovery",
        "Pain Management",
        "Mobility Training",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-12 md:py-20 px-4 sm:px-6 bg-gray-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="hospital-blue">Our Speciality</span>{" "}
            <span className="hospital-green">SERVICES</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive specialty healthcare services with
            state-of-the-art facilities and experienced medical professionals
            dedicated to your well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FlipCard key={index} className="h-80">
              <FlipCardFront className="bg-white border border-gray-200 ">
                <div className="relative h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-hospital-orange text-white">
                      {service.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="text-2xl bg-white rounded-full p-2 shadow-md text-hospital-blue">
                      <service.icon />
                    </div>
                  </div>
                  <div className="p-6 h-48 flex flex-col justify-between">
                    <div>
                      <h3 className="hospital-green text-xl font-semibold mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FlipCardFront>

              {/* Back of card */}
              <FlipCardBack className="bg-hospital-blue text-white">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl text-blue-200">
                        <service.icon />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                      {service.longDescription}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-blue-200">
                        Key Services:
                      </h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-blue-100 flex items-center gap-2"
                          >
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FlipCardBack>
            </FlipCard>
          ))}
        </div>
      </div>
    </section>
  );
}
