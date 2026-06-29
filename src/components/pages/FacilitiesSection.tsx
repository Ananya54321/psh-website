"use client";

import { FaMicroscope } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

export function FacilitiesSection() {
  const facilities = [
    {
      title: "Advanced CT Scanner",
      image: "/images/facilities/ct-scanner.png",
      description:
        "State-of-the-art high-resolution CT imaging for precise diagnostics and critical care support.",
      badge: "Diagnostic Imaging",
    },
    {
      title: "Digital X-Ray Machine",
      image: "/images/facilities/xray-machine.png",
      description:
        "Low-radiation, high-definition digital radiography ensuring rapid and accurate imaging results.",
      badge: "Radiology",
    },
  ];

  const additionalFacilities = [
    "24/7 Pathology Lab",
    "Biochemistry Analysis",
    "Ultrasound / Sonography",
    "ECG & Cardiac Monitoring",
    "Microbiology & Serology",
    "Emergency Blood Storage",
    "Haematology Laboratory",
    "Clinical Pathology",
  ];

  return (
    <section
      id="facilities"
      className="py-12 md:py-20 px-4 sm:px-6 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="hospital-blue">Our Modern</span>{" "}
            <span className="hospital-green">FACILITIES</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Equipped with advanced diagnostic technology to provide prompt,
            accurate, and comprehensive healthcare services.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, index) => (
            <StaggerItem key={index}>
              <Card className="group overflow-hidden border border-transparent hover:border-hospital-blue/20 rounded-2xl flex flex-col h-full bg-slate-50/50 hover:bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-default">
                <div className="relative h-64 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-hospital-blue text-white hover:bg-hospital-blue">
                    {fac.badge}
                  </Badge>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-hospital-blue transition-colors duration-300 mb-3">
                      {fac.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}

          {/* Third Card for Many More Laboratory Facilities */}
          <StaggerItem className="sm:col-span-2 lg:col-span-1">
          <Card className="group overflow-hidden border border-transparent hover:border-hospital-blue/20 rounded-2xl flex flex-col h-full bg-slate-50/50 hover:bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-default">
            <CardContent className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-hospital-green/10 group-hover:bg-hospital-blue/10 rounded-lg text-hospital-green group-hover:text-hospital-blue text-2xl transition-all duration-300">
                    <FaMicroscope />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-hospital-blue transition-colors duration-300 mt-0">
                    Laboratory Facilities
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Beyond our advanced imaging services, our hospital is equipped
                  with comprehensive testing and diagnostic labs operating 24/7.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {additionalFacilities.map((facility, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-gray-700 bg-white group-hover:bg-slate-50/50 p-2.5 rounded-xl border border-gray-100/50 group-hover:border-hospital-blue/10 shadow-sm transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-hospital-orange rounded-full flex-shrink-0"></div>
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
