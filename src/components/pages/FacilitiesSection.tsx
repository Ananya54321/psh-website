"use client";

import { FaMicroscope } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="hospital-blue">Our Modern</span>{" "}
            <span className="hospital-green">FACILITIES</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Equipped with advanced diagnostic technology to provide prompt,
            accurate, and comprehensive healthcare services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full bg-white"
            >
              <div className="relative h-64 w-full bg-gray-50 flex items-center justify-center">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-hospital-blue text-white hover:bg-hospital-blue">
                  {fac.badge}
                </Badge>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold hospital-green mb-3">
                    {fac.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Third Card for Many More Laboratory Facilities */}
          <Card className="overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full bg-slate-50 sm:col-span-2 lg:col-span-1">
            <CardContent className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-hospital-green/10 rounded-lg text-hospital-green text-2xl">
                    <FaMicroscope />
                  </div>
                  <h3 className="text-2xl font-semibold hospital-green mt-0">
                    Laboratory Facilities
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  Beyond our advanced imaging services, our hospital is equipped
                  with comprehensive testing and diagnostic labs operating 24/7.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {additionalFacilities.map((facility, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-gray-700 bg-white p-2.5 rounded border border-gray-100 shadow-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-hospital-orange rounded-full flex-shrink-0"></div>
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
