"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-hospital-blue text-white py-3 px-4 sm:px-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between md:grid md:grid-cols-3 items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 sm:space-x-4 cursor-pointer hover:opacity-90 transition-opacity justify-self-start"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <Image
              src="/images/psh_logo.jpeg"
              alt="Pavan Sai Hospitals"
              width={48}
              height={48}
              className="rounded-full p-1.5 sm:p-2"
            />
          </div>
          <div>
            <h1 className="text-lg sm:text-2xl font-bold leading-tight">
              Pavan Sai Hospitals
            </h1>
            <p className="text-[10px] sm:text-sm opacity-90">
              Changing lives since 2008
            </p>
          </div>
        </Link>

        {/* Desktop Navigation - 2nd Part (Middle links) */}
        <div className="hidden md:block justify-self-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              <NavigationMenuItem>
                <Link href="/#services" passHref legacyBehavior>
                  <NavigationMenuLink className="relative group/navlink inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-semibold tracking-wide transition-colors cursor-pointer text-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white">
                    Services
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover/navlink:w-full"></span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#doctors" passHref legacyBehavior>
                  <NavigationMenuLink className="relative group/navlink inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-semibold tracking-wide transition-colors cursor-pointer text-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white">
                    Doctors
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover/navlink:w-full"></span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/insurance" passHref legacyBehavior>
                  <NavigationMenuLink className="relative group/navlink inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-semibold tracking-wide transition-colors cursor-pointer text-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white">
                    Insurances
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover/navlink:w-full"></span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Contact - 3rd Part */}
        <div className="hidden md:block justify-self-end">
          <a
            href="tel:8801719855"
            className="inline-flex h-10 items-center justify-center rounded-md bg-hospital-orange hover:bg-orange-600 px-4 text-sm font-bold text-white transition-colors cursor-pointer shadow-md gap-1.5"
          >
            <span>📞</span>
            <span>8801719855</span>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white p-6">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-hospital-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/#services"
                  className="text-lg font-medium hover:text-hospital-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/#doctors"
                  className="text-lg font-medium hover:text-hospital-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Doctors
                </Link>
                <Link
                  href="/insurance"
                  className="text-lg font-medium hover:text-hospital-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Insurances
                </Link>
                <a
                  href="tel:8801719855"
                  className="text-lg font-semibold text-hospital-orange hover:text-hospital-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  📞 8801719855
                </a>
                <a
                  href="tel:8801719855"
                  className="mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="bg-hospital-green hover:bg-green-700 w-full cursor-pointer">
                    Book Appointment
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
