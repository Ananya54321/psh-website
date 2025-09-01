"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import HoverExpand from "@/components/ui/hover-expand";
import { 
  MinimalCard, 
  MinimalCardContent, 
  MinimalCardDescription, 
  MinimalCardFooter, 
  MinimalCardImage, 
  MinimalCardTitle 
} from "@/components/ui/minimal-card";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hospital facility images for HoverExpand component
  const facilityImages = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1551601651-05a05bb10b26?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&h=600&fit=crop&crop=center"
  ];

  const services = [
    {
      title: "Emergency Care",
      description: "24/7 emergency medical services with state-of-the-art facilities",
      icon: "🚨",
      category: "Critical Care",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Cardiology",
      description: "Advanced heart care with experienced cardiologists and modern equipment",
      icon: "❤️",
      category: "Specialty",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Orthopedics",
      description: "Complete bone and joint care with minimally invasive procedures",
      icon: "🦴",
      category: "Specialty",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Maternity Care",
      description: "Comprehensive prenatal and postnatal care for mothers and babies",
      icon: "👶",
      category: "Family Care",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "General Surgery",
      description: "Advanced surgical procedures with skilled surgeons and modern technology",
      icon: "🏥",
      category: "Surgery",
      image: "https://images.unsplash.com/photo-1551601651-05a05bb10b26?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Diagnostics",
      description: "Complete diagnostic services including lab tests, imaging, and screening",
      icon: "🔬",
      category: "Diagnostics",
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop&crop=center"
    }
  ];

  // Sample data for SkiperCard - patient journey steps
  // Create image objects that match StaticImageData interface expectations
  const createImageData = (src: string) => ({
    src,
    height: 200,
    width: 300,
    blurDataURL: "",
    blurWidth: 0,
    blurHeight: 0,
  });

  const patientJourneyImages = {
    step1dark1: createImageData("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center"),
    step1dark2: createImageData("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center"),
    step1light1: createImageData("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center"),
    step1light2: createImageData("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center"),
    step2dark1: createImageData("https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&h=200&fit=crop&crop=center"),
    step2dark2: createImageData("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=200&fit=crop&crop=center"),
    step2light1: createImageData("https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&h=200&fit=crop&crop=center"),
    step2light2: createImageData("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=200&fit=crop&crop=center"),
    step3dark: createImageData("https://images.unsplash.com/photo-1551601651-05a05bb10b26?w=300&h=200&fit=crop&crop=center"),
    step3light: createImageData("https://images.unsplash.com/photo-1551601651-05a05bb10b26?w=300&h=200&fit=crop&crop=center"),
    step4light: createImageData("https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&h=400&fit=crop&crop=center"),
    alt: "Patient care journey"
  };

  const stats = [
    { number: "50+", label: "Expert Doctors" },
    { number: "1000+", label: "Happy Patients" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Care" }
  ];

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

  const testimonials = [
    {
      name: "Sunita Devi",
      review: "Excellent care and treatment. The doctors are very professional and caring.",
      rating: 5,
      treatment: "Cardiac Surgery"
    },
    {
      name: "Rahul Gupta",
      review: "Quick emergency response and outstanding medical facilities. Highly recommended!",
      rating: 5,
      treatment: "Emergency Care"
    },
    {
      name: "Meera Singh",
      review: "The maternity ward staff was amazing during my delivery. Thank you team!",
      rating: 5,
      treatment: "Maternity Care"
    }
  ];

  const faqs = [
    {
      question: "What are your visiting hours?",
      answer: "Our general visiting hours are from 10:00 AM to 8:00 PM. ICU visiting hours are from 11:00 AM to 1:00 PM and 5:00 PM to 7:00 PM."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans. Please contact our billing department for specific insurance verification."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling our helpline, using our online portal, or visiting the hospital reception."
    },
    {
      question: "What emergency services do you provide?",
      answer: "We provide 24/7 emergency services including trauma care, cardiac emergencies, stroke care, and critical care."
    },
    {
      question: "Do you have parking facilities?",
      answer: "Yes, we have ample parking space available for patients and visitors free of charge."
    }
  ];

  const handleAppointmentClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Appointment request submitted! We'll call you shortly.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header with Navigation Menu */}
      <header className="bg-hospital-blue text-white py-4 px-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl hospital-blue font-bold">PS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Pawan Sai Hospitals</h1>
              <p className="text-sm opacity-90">Caring for Your Health</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-hospital-orange">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="row-span-3">
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-hospital-blue to-hospital-green p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Medical Services
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Comprehensive healthcare solutions for all your medical needs.
                          </p>
                        </div>
                      </div>
                      <NavigationMenuLink href="#emergency" className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Emergency Care</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          24/7 emergency medical services
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#cardiology" className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Cardiology</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Advanced heart care services
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#orthopedics" className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Orthopedics</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Bone and joint care
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-hospital-orange focus:text-hospital-orange">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#doctors" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-hospital-orange focus:text-hospital-orange">
                    Doctors
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-hospital-orange focus:text-hospital-orange">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#home" className="text-lg font-medium hover:text-hospital-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                  <a href="#services" className="text-lg font-medium hover:text-hospital-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                  <a href="#about" className="text-lg font-medium hover:text-hospital-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                  <a href="#doctors" className="text-lg font-medium hover:text-hospital-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Doctors</a>
                  <a href="#contact" className="text-lg font-medium hover:text-hospital-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                  <Button className="bg-hospital-green hover:bg-green-700 mt-4">
                    Book Appointment
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Important Alert */}
      <Alert className="border-hospital-orange bg-orange-50 border-l-4 border-l-hospital-orange rounded-none">
        <svg className="h-4 w-4 text-hospital-orange" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5zM11 14v2h2v-2h-2zm0-6v4h2V8h-2z"/>
        </svg>
        <AlertTitle className="text-hospital-orange font-semibold">Important Notice</AlertTitle>
        <AlertDescription>
          COVID-19 safety protocols are in place. Please wear masks and maintain social distancing. 
          <Button variant="link" className="text-hospital-blue p-0 ml-2 h-auto">Learn more</Button>
        </AlertDescription>
      </Alert>

      {/* Enhanced Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-green-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="hospital-blue">Your Health,</span>{" "}
                <span className="hospital-green">Our Priority</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Pawan Sai Hospitals, we provide comprehensive healthcare services with 
                compassion, expertise, and cutting-edge medical technology. Your well-being 
                is our commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="bg-hospital-blue hover:bg-blue-700 text-white px-8 py-3 text-lg">
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        "Book Appointment"
                      )}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Book Your Appointment</AlertDialogTitle>
                      <AlertDialogDescription>
                        We'll connect you with our medical team to schedule your appointment. 
                        Our staff will call you within 24 hours to confirm your preferred time and date.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={handleAppointmentClick}
                        className="bg-hospital-green hover:bg-green-700"
                      >
                        Confirm Request
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button variant="outline" className="border-hospital-green text-hospital-green hover:bg-hospital-green hover:text-white px-8 py-3 text-lg">
                  Emergency Care
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-hospital-blue rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <h3 className="text-2xl font-bold hospital-green mb-2">Excellence in Healthcare</h3>
                  <p className="text-gray-600">Modern facilities, experienced doctors, and personalized care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Facilities with HoverExpand */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="hospital-blue">Our Modern</span>{" "}
              <span className="hospital-green">Facilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience state-of-the-art medical facilities designed for your comfort and care. 
              Hover over the images to explore our hospital infrastructure.
            </p>
          </div>
          
          <div className="flex justify-center">
            <HoverExpand 
              images={facilityImages}
              initialSelectedIndex={0}
              thumbnailHeight={200}
              modalImageSize={600}
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

      {/* Enhanced Services Section with MinimalCard */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="hospital-blue">Our Medical</span>{" "}
              <span className="hospital-green">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive healthcare services with state-of-the-art facilities 
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

      {/* Patient Journey with Custom Component */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="hospital-blue">Your Patient</span>{" "}
              <span className="hospital-green">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to recovery, we guide you through every step of your healthcare journey 
              with personalized care and attention.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center p-8 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-hospital-blue/10 to-hospital-green/10 border-hospital-blue/20">
                <div className="text-5xl mb-4">📝</div>
                <CardHeader>
                  <CardTitle className="hospital-blue text-lg">Step 1: Consultation</CardTitle>
                  <CardDescription>Initial assessment and medical history review</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-gradient-to-br from-hospital-blue/20 to-hospital-green/20 rounded-lg mb-4 flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=120&fit=crop&crop=center"
                      alt="Medical consultation"
                      width={200}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Meet with our expert doctors for comprehensive health evaluation</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-8 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-hospital-green/10 to-hospital-blue/10 border-hospital-green/20">
                <div className="text-5xl mb-4">🔬</div>
                <CardHeader>
                  <CardTitle className="hospital-green text-lg">Step 2: Diagnosis</CardTitle>
                  <CardDescription>Advanced testing and accurate diagnosis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-gradient-to-br from-hospital-green/20 to-hospital-blue/20 rounded-lg mb-4 flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=120&fit=crop&crop=center"
                      alt="Medical diagnosis"
                      width={200}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600">State-of-the-art diagnostic equipment for precise results</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-8 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-hospital-orange/10 to-hospital-blue/10 border-hospital-orange/20">
                <div className="text-5xl mb-4">⚕️</div>
                <CardHeader>
                  <CardTitle className="text-hospital-orange text-lg">Step 3: Treatment</CardTitle>
                  <CardDescription>Personalized treatment plan execution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-gradient-to-br from-hospital-orange/20 to-hospital-blue/20 rounded-lg mb-4 flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=200&h=120&fit=crop&crop=center"
                      alt="Medical treatment"
                      width={200}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Expert medical care with the latest treatment methods</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-8 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-hospital-green/10 to-hospital-orange/10 border-hospital-green/20">
                <div className="text-5xl mb-4">🏥</div>
                <CardHeader>
                  <CardTitle className="hospital-green text-lg">Step 4: Recovery</CardTitle>
                  <CardDescription>Complete care and follow-up support</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-gradient-to-br from-hospital-green/20 to-hospital-orange/20 rounded-lg mb-4 flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=200&h=120&fit=crop&crop=center"
                      alt="Patient recovery"
                      width={200}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Ongoing support to ensure complete recovery and wellness</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-hospital-green text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold hospital-orange">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section with Carousel */}
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

      {/* Testimonials Carousel */}
      <section className="py-20 px-6 bg-gradient-to-r from-hospital-blue to-hospital-green text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-xl opacity-90">Real stories from our satisfied patients</p>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                      <CardContent className="p-8 text-center">
                        <div className="text-6xl mb-4">💬</div>
                        <p className="text-lg mb-6 leading-relaxed italic">
                          "{testimonial.review}"
                        </p>
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">⭐</span>
                          ))}
                        </div>
                        <h4 className="font-bold text-xl">{testimonial.name}</h4>
                        <p className="text-hospital-orange font-semibold">{testimonial.treatment}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-white hover:bg-white/20" />
            <CarouselNext className="text-white border-white hover:bg-white/20" />
          </Carousel>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="hospital-blue">About</span>{" "}
                <span className="hospital-green">Pawan Sai Hospitals</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 15 years of dedicated service to the community, Pawan Sai Hospitals 
                has established itself as a trusted healthcare provider. We combine medical 
                excellence with compassionate care to ensure the best outcomes for our patients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-hospital-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Expert medical professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-hospital-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Advanced medical technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-hospital-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">24/7 emergency services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-hospital-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Patient-centered care approach</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-hospital-blue to-hospital-green rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl mb-6">👨‍⚕️</div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To provide exceptional healthcare services that improve the quality of life 
                  for our patients and community through innovative medical practices, 
                  compassionate care, and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="hospital-blue">Frequently Asked</span>{" "}
              <span className="hospital-green">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and facilities.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-hospital-blue hover:text-hospital-green transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="hospital-blue">Get In</span>{" "}
              <span className="hospital-green">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help. Contact us for appointments, emergencies, or any inquiries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold hospital-green mb-2">Emergency</h3>
              <p className="text-2xl font-bold hospital-blue">+91 9999 XXXX XX</p>
              <p className="text-gray-600 mt-2">24/7 Emergency Services</p>
              <Button 
                className="mt-4 bg-red-600 hover:bg-red-700"
                onClick={() => toast.error("Emergency services contacted! Help is on the way.")}
              >
                Call Emergency
              </Button>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold hospital-green mb-2">Location</h3>
              <p className="text-gray-700">123 Healthcare Street</p>
              <p className="text-gray-700">Medical District</p>
              <p className="text-gray-700">City - 123456</p>
              <Button 
                variant="outline" 
                className="mt-4 border-hospital-blue text-hospital-blue hover:bg-hospital-blue hover:text-white"
                onClick={() => toast.info("Opening maps location...")}
              >
                Get Directions
              </Button>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-bold hospital-green mb-2">Hours</h3>
              <p className="text-gray-700">Mon - Fri: 8:00 AM - 8:00 PM</p>
              <p className="text-gray-700">Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Sunday: 10:00 AM - 4:00 PM</p>
              <Button 
                variant="outline" 
                className="mt-4 border-hospital-green text-hospital-green hover:bg-hospital-green hover:text-white"
                onClick={() => toast.success("Current status: We are OPEN!")}
              >
                Check Status
              </Button>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-hospital-green hover:bg-green-800 text-white px-8 py-3 text-lg">
                  Schedule Appointment
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Schedule Your Appointment</AlertDialogTitle>
                  <AlertDialogDescription>
                    Choose your preferred way to schedule an appointment with our medical team.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="space-y-4 py-4">
                  <Button 
                    className="w-full bg-hospital-blue hover:bg-blue-700"
                    onClick={() => {
                      toast.success("Online booking form will open shortly!");
                    }}
                  >
                    📱 Book Online
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-hospital-green text-hospital-green hover:bg-hospital-green hover:text-white"
                    onClick={() => {
                      toast.info("Please call +91 9999 XXXX XX to book your appointment");
                    }}
                  >
                    📞 Call to Book
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      toast.info("Visit us at 123 Healthcare Street for walk-in appointments");
                    }}
                  >
                    🏥 Walk-in
                  </Button>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hospital-blue text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-lg hospital-blue font-bold">PS</span>
                </div>
                <span className="text-xl font-bold">Pawan Sai Hospitals</span>
              </div>
              <p className="opacity-90 leading-relaxed">
                Committed to providing exceptional healthcare services with compassion and excellence.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#home" className="hover:text-hospital-orange transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-hospital-orange transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-hospital-orange transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-hospital-orange transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Emergency Contact</h4>
              <p className="opacity-90 mb-2">24/7 Emergency Services</p>
              <p className="text-xl font-bold hospital-orange">+91 9999 XXXX XX</p>
              <p className="opacity-90 mt-4">Email: info@pawansaihospitals.com</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="opacity-90">
              © 2024 Pawan Sai Hospitals. All rights reserved. | Caring for Your Health
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
