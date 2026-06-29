"use client";

import { useState } from "react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
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
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [showAll, setShowAll] = useState(false);

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
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="hospital-blue">Our Speciality</span>{" "}
            <span className="hospital-green">SERVICES</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive specialty healthcare services with
            state-of-the-art facilities and experienced medical professionals
            dedicated to your well-being.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StaggerItem
              key={index}
              className={cn(
                index >= 3 && !showAll ? "hidden md:block" : ""
              )}
            >
            <FlipCard className="h-[355px]">
              <FlipCardFront className="bg-white border border-gray-100 shadow-sm">
                <div className="flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-hospital-orange/90 text-white text-xs shadow-sm">
                        {service.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 px-5 pt-4 pb-4">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="flex-shrink-0 bg-blue-50 text-hospital-blue rounded-xl p-2.5 shadow-sm">
                        <service.icon className="text-lg" />
                      </div>
                      <h3 className="hospital-green text-[15px] font-semibold leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-2.5 border-t border-gray-100 flex items-center justify-end">
                      <span className="text-xs text-hospital-blue font-medium tracking-wide">
                        See details →
                      </span>
                    </div>
                  </div>
                </div>
              </FlipCardFront>

              {/* Back of card */}
              <FlipCardBack
                className="text-white overflow-hidden"
                style={{
                  background: "#2c6b7a",
                }}
              >
                <div className="p-5 h-full flex flex-col relative">
                  {/* Decorative background icon */}
                  <div className="absolute -right-4 -bottom-4 opacity-[0.08] pointer-events-none select-none">
                    <service.icon style={{ fontSize: "7rem" }} />
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 bg-white/20 rounded-xl p-2.5 backdrop-blur-sm border border-white/20">
                      <service.icon className="text-xl text-white" />
                    </div>
                    <div className="min-w-0">
                      <Badge className="bg-hospital-orange/80 text-white text-[10px] px-2 py-0.5 mb-1">
                        {service.category}
                      </Badge>
                      <h3 className="text-sm font-bold leading-tight text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/20 mb-3" />

                  {/* Long description */}
                  <p className="text-white/85 text-[13px] leading-relaxed flex-1">
                    {service.longDescription}
                  </p>

                  {/* Feature pills */}
                  <div className="mt-3">
                    <p className="text-[10px] uppercase tracking-widest text-white/55 font-semibold mb-2">
                      Key Services
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-white/15 border border-white/25 text-white/90 rounded-full px-2.5 py-0.5"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FlipCardBack>
            </FlipCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile-only show more / show less button */}
        <div className="mt-8 flex justify-center md:hidden">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className={cn(
              "flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all active:scale-95",
              showAll
                ? "border border-gray-300 text-gray-600 bg-white shadow-sm"
                : "bg-hospital-blue text-white shadow-md hover:shadow-lg"
            )}
          >
            {showAll ? (
              "Show Less ↑"
            ) : (
              <>
                View All Services
                <span className="bg-white/25 rounded-full px-2 py-0.5 text-xs font-normal">
                  +{services.length - 3} more
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
