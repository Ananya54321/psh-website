"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export function Header() {
  const navItems = [
    {
      name: "Services",
      link: "/#services",
    },
    {
      name: "Doctors",
      link: "/#doctors",
    },
    {
      name: "Insurances",
      link: "/insurance",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  return (
    <Navbar className="fixed top-0 z-50">
      {/* Desktop Navigation */}
      <NavBody className={cn(
        "transition-all duration-300",
        isScrolled 
          ? "border border-slate-200/50 bg-white/90 text-neutral-800 shadow-md backdrop-blur-md" 
          : "bg-transparent text-white"
      )}>
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center space-x-3 cursor-pointer hover:opacity-90 transition-opacity z-50"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
            <Image
              src="/images/psh_logo.jpeg"
              alt="Pavan Sai Hospitals"
              width={36}
              height={36}
              className="rounded-full p-0.5"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className={cn(
              "text-base font-bold leading-tight transition-colors duration-300",
              isScrolled ? "text-[#3e8aa1]" : "text-white"
            )}>
              Pavan Sai Hospitals
            </span>
            <span className={cn(
              "text-[10px] tracking-wide transition-colors duration-300",
              isScrolled ? "text-neutral-500" : "text-white/80"
            )}>
              Changing lives since 2008
            </span>
          </div>
        </Link>

        {/* Navigation Items (Desktop) */}
        <div
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative hidden lg:flex items-center justify-center space-x-2 text-sm font-semibold"
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              onMouseEnter={() => setHoveredIndex(idx)}
              className={cn(
                "relative px-4 py-2 rounded-full transition-colors duration-300 z-10",
                isScrolled
                  ? "text-neutral-600 hover:text-[#3e8aa1]"
                  : "text-white/90 hover:text-white"
              )}
            >
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="desktopNavHover"
                  className={cn(
                    "absolute inset-0 -z-10 rounded-full shadow-sm",
                    isScrolled ? "bg-slate-100" : "bg-white/10"
                  )}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="hidden lg:block z-50">
          <a
            href="tel:8801719855"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-full px-4 text-xs font-bold text-white transition-all duration-300 shadow-md gap-1.5 hover:scale-105 cursor-pointer",
              isScrolled 
                ? "bg-hospital-blue hover:bg-[#2c6b7a] shadow-hospital-blue/10" 
                : "bg-hospital-orange hover:bg-orange-600 shadow-black/10"
            )}
          >
            <span>📞</span>
            <span>8801719855</span>
          </a>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className={cn(
        "transition-all duration-300 px-4",
        isScrolled 
          ? "border border-slate-200/50 bg-white/90 shadow-md backdrop-blur-md" 
          : "bg-transparent"
      )}>
        <MobileNavHeader className="h-14">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center space-x-3 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
              <Image
                src="/images/psh_logo.jpeg"
                alt="Pavan Sai Hospitals"
                width={32}
                height={32}
                className="rounded-full p-0.5"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className={cn(
                "text-sm font-bold leading-tight transition-colors duration-300",
                isScrolled ? "text-[#3e8aa1]" : "text-white"
              )}>
                Pavan Sai Hospitals
              </span>
              <span className={cn(
                "text-[9px] tracking-wide transition-colors duration-300",
                isScrolled ? "text-neutral-500" : "text-white/80"
              )}>
                Changing lives since 2008
              </span>
            </div>
          </Link>

          {/* Toggle Menu Button */}
          <div className="flex items-center">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "transition-colors duration-300 cursor-pointer p-1 rounded-md",
                isScrolled ? "text-neutral-800" : "text-white"
              )}
            />
          </div>
        </MobileNavHeader>

        {/* Mobile Dropdown Menu */}
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-white/95 border border-slate-200/60 shadow-lg backdrop-blur-md rounded-2xl p-5 mt-3 flex flex-col space-y-4"
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-item-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold text-neutral-700 hover:text-hospital-blue transition-colors py-2.5 border-b border-slate-100 last:border-b-0 w-full block"
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex flex-col gap-2.5 pt-3 w-full">
            <a
              href="tel:8801719855"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center h-10 w-full rounded-full bg-hospital-orange hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-md gap-1.5"
            >
              <span>📞</span>
              <span>8801719855</span>
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

