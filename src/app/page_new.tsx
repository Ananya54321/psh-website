import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const services = [
    {
      title: "Emergency Care",
      description: "24/7 emergency medical services with state-of-the-art facilities and rapid response team",
      icon: "🚨",
      category: "Critical Care",
      color: "hospital-blue"
    },
    {
      title: "Cardiology",
      description: "Advanced heart care with experienced cardiologists, cardiac surgery, and modern equipment",
      icon: "❤️",
      category: "Specialty",
      color: "hospital-green"
    },
    {
      title: "Neurology",
      description: "Comprehensive brain and nervous system care with cutting-edge neurological treatments",
      icon: "🧠",
      category: "Specialty",
      color: "hospital-orange"
    },
    {
      title: "Orthopedics",
      description: "Complete bone and joint care with minimally invasive procedures and rehabilitation",
      icon: "🦴",
      category: "Specialty",
      color: "hospital-blue"
    },
    {
      title: "Maternity Care",
      description: "Comprehensive prenatal and postnatal care for mothers and babies in a safe environment",
      icon: "👶",
      category: "Family Care",
      color: "hospital-green"
    },
    {
      title: "Oncology",
      description: "Advanced cancer care with latest treatment modalities and comprehensive support",
      icon: "🎗️",
      category: "Specialty",
      color: "hospital-orange"
    },
    {
      title: "General Surgery",
      description: "Advanced surgical procedures with skilled surgeons and modern technology",
      icon: "🏥",
      category: "Surgery",
      color: "hospital-blue"
    },
    {
      title: "Diagnostics",
      description: "Complete diagnostic services including lab tests, imaging, and advanced screening",
      icon: "🔬",
      category: "Diagnostics",
      color: "hospital-green"
    }
  ];

  const stats = [
    { number: "50+", label: "Expert Doctors", icon: "👨‍⚕️" },
    { number: "10K+", label: "Happy Patients", icon: "😊" },
    { number: "25+", label: "Years Experience", icon: "📅" },
    { number: "24/7", label: "Emergency Care", icon: "🚑" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent care and professional staff. The doctors are very knowledgeable and caring.",
      treatment: "Cardiac Surgery"
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Best hospital in the city. Clean facilities and prompt service. Highly recommended!",
      treatment: "Maternity Care"
    },
    {
      name: "Amit Patel",
      rating: 5,
      comment: "Outstanding emergency care. The staff acted quickly and saved my father's life.",
      treatment: "Emergency Care"
    }
  ];

  const awards = [
    "Best Hospital Award 2023",
    "Excellence in Patient Care",
    "Top Medical Facility",
    "Healthcare Innovation Award"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <header className="gradient-hospital-blue text-white py-4 px-6 shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 animate-slideInLeft">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl hospital-blue font-bold">PS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Pawan Sai Hospitals</h1>
              <p className="text-sm opacity-90">Excellence in Healthcare Since 1985</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-hospital-orange transition-all duration-300 font-medium">Home</a>
            <a href="#services" className="hover:text-hospital-orange transition-all duration-300 font-medium">Services</a>
            <a href="#about" className="hover:text-hospital-orange transition-all duration-300 font-medium">About</a>
            <a href="#testimonials" className="hover:text-hospital-orange transition-all duration-300 font-medium">Reviews</a>
            <a href="#contact" className="hover:text-hospital-orange transition-all duration-300 font-medium">Contact</a>
            <Button className="bg-hospital-orange hover:bg-orange-600 text-white btn-hospital-primary">
              Book Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section id="home" className="hero-pattern py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <Badge className="mb-6 bg-hospital-green text-white px-4 py-2 text-sm font-medium">
                🏆 Award-Winning Healthcare Provider
              </Badge>
              <h2 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="hospital-blue block">Your Health,</span>
                <span className="hospital-green block">Our Mission</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                At Pawan Sai Hospitals, we provide world-class healthcare services with 
                compassion, expertise, and cutting-edge medical technology. Your well-being 
                is our unwavering commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button className="btn-hospital-primary bg-hospital-blue hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold shadow-lg animate-pulse-glow">
                  📅 Book Appointment
                </Button>
                <Button variant="outline" className="border-2 border-hospital-green text-hospital-green hover:bg-hospital-green hover:text-white px-10 py-4 text-lg font-semibold">
                  🚨 Emergency: +91 9999-XXXX-XX
                </Button>
              </div>
              
              {/* Quick Access Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md card-hover">
                  <div className="text-2xl mb-2">🕒</div>
                  <p className="font-semibold text-sm">24/7 Services</p>
                  <p className="text-xs text-gray-600">Always available</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md card-hover">
                  <div className="text-2xl mb-2">💊</div>
                  <p className="font-semibold text-sm">Expert Care</p>
                  <p className="text-xs text-gray-600">Certified doctors</p>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="relative">
                <div className="gradient-hospital-blue rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-2xl p-8 text-center transform -rotate-3">
                    <div className="text-8xl mb-6">🏥</div>
                    <h3 className="text-2xl font-bold hospital-green mb-4">Excellence in Healthcare</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Modern facilities, experienced doctors, personalized care, and innovative treatments
                    </p>
                    <div className="mt-6 flex justify-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold hospital-blue">98%</div>
                        <p className="text-xs text-gray-500">Satisfaction</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold hospital-green">500+</div>
                        <p className="text-xs text-gray-500">Beds</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold hospital-orange">15</div>
                        <p className="text-xs text-gray-500">Departments</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-hospital-orange/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-hospital-green/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="gradient-hospital-green text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Healthcare Excellence by Numbers</h3>
            <p className="text-xl opacity-90">Trusted by thousands, serving with pride</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scaleIn card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2 stat-number">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fadeInUp">
            <Badge className="mb-4 bg-hospital-orange text-white px-4 py-2">🏥 Our Specialties</Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="hospital-blue">Comprehensive Medical</span>{" "}
              <span className="hospital-green">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer world-class healthcare services across multiple specialties with state-of-the-art facilities 
              and experienced medical professionals dedicated to your well-being and recovery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card card-hover animate-fadeInUp border-0 shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`service-icon text-5xl mb-4 ${service.color}`}>{service.icon}</div>
                  <Badge className={`bg-${service.color} text-white mb-3 w-fit mx-auto px-3 py-1`}>
                    {service.category}
                  </Badge>
                  <CardTitle className="hospital-green text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-center leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className={`mt-4 w-full text-${service.color} hover:bg-${service.color} hover:text-white transition-all duration-300`}>
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slideInLeft">
              <Badge className="mb-6 bg-hospital-blue text-white px-4 py-2">🏆 About Us</Badge>
              <h2 className="text-5xl font-bold mb-8">
                <span className="hospital-blue">25+ Years of</span>{" "}
                <span className="hospital-green">Healthcare Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since 1985, Pawan Sai Hospitals has been a beacon of hope and healing in our community. 
                We combine cutting-edge medical technology with compassionate care to deliver exceptional 
                healthcare outcomes that exceed expectations.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  { icon: "👨‍⚕️", text: "Board-certified medical professionals" },
                  { icon: "🔬", text: "State-of-the-art medical technology" },
                  { icon: "🚑", text: "24/7 emergency and critical care services" },
                  { icon: "🤝", text: "Patient-centered care approach" },
                  { icon: "🏆", text: "Award-winning healthcare facility" },
                  { icon: "💊", text: "Comprehensive treatment modalities" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Awards Section */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-lg hospital-blue mb-4">🏆 Awards & Recognition</h4>
                <div className="grid grid-cols-2 gap-3">
                  {awards.map((award, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-hospital-orange rounded-full"></div>
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="relative">
                <div className="gradient-hospital-blue rounded-3xl p-10 text-white shadow-2xl">
                  <div className="text-center">
                    <div className="text-8xl mb-8">👨‍⚕️</div>
                    <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                    <p className="text-lg leading-relaxed opacity-95 mb-8">
                      To provide exceptional healthcare services that improve the quality of life 
                      for our patients and community through innovative medical practices, 
                      compassionate care, and continuous improvement.
                    </p>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold hospital-orange">98%</div>
                        <p className="text-sm opacity-90">Patient Satisfaction</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold hospital-orange">50+</div>
                        <p className="text-sm opacity-90">Medical Experts</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-hospital-orange rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-hospital-green rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <Badge className="mb-4 bg-hospital-green text-white px-4 py-2">⭐ Patient Stories</Badge>
            <h2 className="text-4xl font-bold mb-6">
              <span className="hospital-blue">What Our</span>{" "}
              <span className="hospital-green">Patients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from real patients who trust us with their health and well-being
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover animate-fadeInUp shadow-lg border-0" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold hospital-blue">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fadeInUp">
            <Badge className="mb-4 bg-hospital-orange text-white px-4 py-2">📞 Contact Us</Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="hospital-blue">Get In</span>{" "}
              <span className="hospital-green">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to prioritize your health? Contact us today for appointments, emergencies, or any healthcare inquiries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-8 card-hover shadow-lg border-l-4 border-l-hospital-blue animate-fadeInUp">
              <div className="text-5xl mb-6">📞</div>
              <h3 className="text-xl font-bold hospital-blue mb-4">Emergency Hotline</h3>
              <p className="text-3xl font-bold hospital-green mb-2">+91 9999-XXXX-XX</p>
              <p className="text-gray-600">24/7 Emergency Services</p>
              <p className="text-sm text-gray-500 mt-2">Ambulance available</p>
            </Card>
            
            <Card className="text-center p-8 card-hover shadow-lg border-l-4 border-l-hospital-green animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl mb-6">📍</div>
              <h3 className="text-xl font-bold hospital-green mb-4">Our Location</h3>
              <p className="text-gray-700 font-semibold">123 Healthcare Street</p>
              <p className="text-gray-700">Medical District</p>
              <p className="text-gray-700">City - 123456</p>
              <Button variant="ghost" className="mt-3 text-hospital-green hover:bg-hospital-green hover:text-white">
                Get Directions
              </Button>
            </Card>
            
            <Card className="text-center p-8 card-hover shadow-lg border-l-4 border-l-hospital-orange animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl mb-6">🕒</div>
              <h3 className="text-xl font-bold hospital-orange mb-4">Visiting Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Mon - Fri:</strong> 8:00 AM - 8:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
                <p className="text-sm text-gray-500 mt-3">Emergency: 24/7</p>
              </div>
            </Card>
            
            <Card className="text-center p-8 card-hover shadow-lg border-l-4 border-l-hospital-blue animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl mb-6">📧</div>
              <h3 className="text-xl font-bold hospital-blue mb-4">Email Us</h3>
              <p className="text-gray-700 mb-2">info@pawansaihospitals.com</p>
              <p className="text-gray-700 mb-2">appointments@pawansaihospitals.com</p>
              <Button variant="ghost" className="mt-3 text-hospital-blue hover:bg-hospital-blue hover:text-white">
                Send Email
              </Button>
            </Card>
          </div>
          
          <div className="text-center bg-gradient-to-r from-hospital-blue to-hospital-green rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Schedule Your Appointment?</h3>
            <p className="text-xl mb-8 opacity-90">Take the first step towards better health today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hospital-secondary bg-hospital-orange hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-lg">
                📅 Book Appointment Online
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-hospital-blue px-10 py-4 text-lg font-semibold">
                📞 Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="gradient-hospital-blue text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl hospital-blue font-bold">PS</span>
                </div>
                <div>
                  <span className="text-2xl font-bold">Pawan Sai Hospitals</span>
                  <p className="text-sm opacity-90">Excellence in Healthcare Since 1985</p>
                </div>
              </div>
              <p className="opacity-90 leading-relaxed mb-6 max-w-md">
                Committed to providing exceptional healthcare services with compassion, innovation, 
                and medical excellence. Your health and well-being are our top priorities.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" className="text-white hover:bg-white/20">Facebook</Button>
                <Button variant="ghost" className="text-white hover:bg-white/20">Twitter</Button>
                <Button variant="ghost" className="text-white hover:bg-white/20">LinkedIn</Button>
                <Button variant="ghost" className="text-white hover:bg-white/20">Instagram</Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 opacity-90">
                <li><a href="#home" className="hover:text-hospital-orange transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-hospital-orange transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-hospital-orange transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-hospital-orange transition-colors">Patient Reviews</a></li>
                <li><a href="#contact" className="hover:text-hospital-orange transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-hospital-orange transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Emergency Contact</h4>
              <div className="space-y-4">
                <div>
                  <p className="opacity-90 mb-1">24/7 Emergency Hotline</p>
                  <p className="text-2xl font-bold hospital-orange">+91 9999-XXXX-XX</p>
                </div>
                <div>
                  <p className="opacity-90 mb-1">Appointment Booking</p>
                  <p className="text-lg font-semibold">+91 8888-XXXX-XX</p>
                </div>
                <div>
                  <p className="opacity-90">Email: info@pawansaihospitals.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="bg-white/20 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-90 mb-4 md:mb-0">
              © 2024 Pawan Sai Hospitals. All rights reserved. | Caring for Your Health
            </p>
            <div className="flex space-x-6 opacity-90">
              <a href="#" className="hover:text-hospital-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-hospital-orange transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-hospital-orange transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
