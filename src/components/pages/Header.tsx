"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-hospital-blue text-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl hospital-blue font-bold">PS</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Pavan Sai Hospitals</h1>
            <p className="text-sm opacity-90">Changing lives since 2008</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-black">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-[60]">
                  <div className="grid gap-3 p-4 w-[280px] sm:w-[320px] md:w-[380px] max-w-[80vw] md:grid-cols-2">
                   
                    <NavigationMenuLink href="#orthopedics" className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Orthopedics & Trauma Care</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Specialized bone and joint treatment
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#neurology" className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Neurology & Neurosurgery</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Advanced brain and spine care
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#general-medicine" className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">General Medicine</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Comprehensive medical care
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#surgery" className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">General Surgery</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Expert surgical procedures
                      </p>
                    </NavigationMenuLink>
                    
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-black focus:text-black">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#doctors" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-black focus:text-black">
                  Doctors
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-black focus:text-black">
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
  );
}
