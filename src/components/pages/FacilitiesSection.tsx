"use client";

import { Button } from "@/components/ui/button";
import HoverExpand from "@/components/ui/hover-expand";

export function FacilitiesSection() {
  // Hospital facility images for HoverExpand component
  const facilityImages = [
    "/images/facilities1.png",
    "/images/facilities2.png",
    "/images/facilities3.png",
    "/images/facilities4.png",
    "/images/facilities5.png",
    "/images/facilities6.png",
    "/images/facilities7.png"
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="w-[100%] mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hospital-blue">Our Modern</span>{" "}
            <span className="hospital-green">FACILITIES</span>
          </h2>
        </div>
        
        <div className="flex justify-center">
          <HoverExpand 
            images={facilityImages}
            initialSelectedIndex={0}
            thumbnailHeight={800}
            modalImageSize={900}
            maxThumbnails={7}
          />
        </div>
        
      </div>
    </section>
  );
}
