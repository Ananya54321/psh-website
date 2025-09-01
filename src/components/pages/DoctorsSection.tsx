"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export function DoctorsSection() {
  const [isLoading, setIsLoading] = useState(false);

  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      experience: "15+ years",
      image: "👨‍⚕️",
      rating: "4.9"
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "Pediatrician",
      experience: "12+ years",
      image: "👩‍⚕️",
      rating: "4.8"
    },
    {
      name: "Dr. Amit Patel",
      specialty: "Orthopedic Surgeon",
      experience: "18+ years",
      image: "👨‍⚕️",
      rating: "4.9"
    }
  ];

  return (
    <section id="doctors" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hospital-blue">Meet Our</span>{" "}
            <span className="hospital-green">Expert Doctors</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our team of experienced medical professionals is dedicated to providing you with the best care.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-1">
            {doctors.map((doctor, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-hospital-blue">
                    <CardHeader className="text-center">
                      <div className="text-6xl mb-4">{doctor.image}</div>
                      <CardTitle className="hospital-green text-xl">{doctor.name}</CardTitle>
                      <CardDescription className="text-hospital-blue font-semibold">
                        {doctor.specialty}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-2">
                        <Badge className="bg-hospital-orange text-white">
                          {doctor.experience}
                        </Badge>
                        <div className="flex items-center justify-center space-x-1">
                          <span className="text-yellow-500">⭐</span>
                          <span className="font-semibold">{doctor.rating}</span>
                          <span className="text-gray-500">/5</span>
                        </div>
                        <Button className="w-full mt-4 bg-hospital-green hover:bg-green-700">
                          Book Consultation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Loading Skeleton Example */}
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 3000);
            }}
          >
            Load More Doctors
          </Button>
        </div>
        
        {isLoading && (
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="p-6">
                <div className="flex flex-col items-center space-y-3">
                  <Skeleton className="h-20 w-20 rounded-full" />
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-8 w-[120px]" />
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
