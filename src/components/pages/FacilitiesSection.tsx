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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hospital-blue">Our Modern</span>{" "}
            <span className="hospital-green">FACILITIES</span>
          </h2>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto">
            <p className="mb-4">Experience state-of-the-art medical facilities designed for your comfort and care:</p>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <p className="font-semibold">• Modern Laminar Operation Theaters</p>
                <p className="font-semibold">• CT Scan</p>
              </div>
              <div>
                <p className="font-semibold">• Rehabilitation</p>
                <p className="font-semibold">• Diagnostic</p>
              </div>
            </div>
          </div>
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
        
        <div className="text-center mt-12">
          <Button className="bg-hospital-blue hover:bg-blue-700 text-white px-8 py-3">
            Take Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
}
