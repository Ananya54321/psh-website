"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
} from "@/components/ui/resizable-navbar";
import { cn } from "@/lib/utils";
import { Activity, ChevronRight, ShieldCheck, Stethoscope } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const mobileNavItems = [
  {
    name: "Services",
    link: "/#services",
    description: "Explore our specialized clinical care & departments",
    icon: Activity,
    color: "text-[#3e8aa1]",
    bg: "bg-[#3e8aa1]/10",
    borderColor: "hover:border-[#3e8aa1]/30",
  },
  {
    name: "Doctors",
    link: "/#doctors",
    description: "Meet our experienced medical professionals",
    icon: Stethoscope,
    color: "text-[#07501b]",
    bg: "bg-[#07501b]/10",
    borderColor: "hover:border-[#07501b]/30",
  },
  {
    name: "Insurances",
    link: "/insurance",
    description: "Check accepted cashless insurance providers",
    icon: ShieldCheck,
    color: "text-[#d89c6b]",
    bg: "bg-[#d89c6b]/10",
    borderColor: "hover:border-[#d89c6b]/30",
  },
];

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
      <NavBody
        className={cn(
          "transition-colors duration-500",
          isScrolled ? "text-neutral-800" : "text-white",
        )}
      >
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center space-x-3 cursor-pointer hover:opacity-90 transition-opacity z-50"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
            <Image
              src="/images/psh_logo.jpeg"
              alt="Pavan Sai Hospitals"
              width={48}
              height={48}
              className="rounded-full p-0.5"
            />
          </div>
          <div className="flex flex-col text-left">
            <span
              className={cn(
                "font-bold leading-tight transition-colors duration-300 text-lg",
                isScrolled ? "text-[#3e8aa1]" : "text-white",
              )}
            >
              Pavan Sai Hospitals
            </span>
            <span
              className={cn(
                "text-xs tracking-wide transition-colors duration-300",
                isScrolled ? "text-neutral-500" : "text-white/80",
              )}
            >
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
                  : "text-white/90 hover:text-white",
              )}
            >
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="desktopNavHover"
                  className={cn(
                    "absolute inset-0 -z-10 rounded-full shadow-sm",
                    isScrolled ? "bg-slate-100" : "bg-white/10",
                  )}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Call to Action and Location Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 z-50">
          <a
            href="https://maps.app.goo.gl/DURcWjeQNr9Umiwy9"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-full px-4 text-xs font-extrabold transition-all duration-300 shadow-md gap-2 hover:scale-105 cursor-pointer relative overflow-hidden",
              isScrolled
                ? "bg-gradient-to-r from-[#3e8aa1] to-[#4ea3ba] text-white shadow-[#3e8aa1]/20"
                : "bg-white text-[#3e8aa1] hover:bg-slate-50 shadow-black/20",
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span>Find Us</span>
          </a>
          <a
            href="tel:8801719855"
            className="inline-flex h-9 bg-hospital-orange hover:bg-orange-600 shadow-black/10 items-center justify-center rounded-full px-4 text-xs font-bold text-white transition-all duration-300 shadow-md gap-1.5 hover:scale-105 cursor-pointer"
          >
            <span>📞</span>
            <span>8801719855</span>
          </a>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav
        className={cn(
          "px-4 transition-all duration-300",
          isMobileMenuOpen &&
          "!bg-transparent !border-transparent !shadow-none !backdrop-blur-none",
        )}
      >
        <MobileNavHeader className="h-14 relative z-50">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center space-x-3 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
              <Image
                src="/images/psh_logo.jpeg"
                alt="Pavan Sai Hospitals"
                width={48}
                height={48}
                className="rounded-full p-0.5"
              />
            </div>
            <div className="flex flex-col text-left">
              <span
                className={cn(
                  "text-xl font-bold leading-tight transition-colors duration-300",
                  isScrolled || isMobileMenuOpen
                    ? "text-[#3e8aa1] dark:text-neutral-100"
                    : "text-white",
                )}
              >
                Pavan Sai Hospitals
              </span>
              <span
                className={cn(
                  "text-xs tracking-wide transition-colors duration-300",
                  isScrolled || isMobileMenuOpen
                    ? "text-neutral-500 dark:text-neutral-300"
                    : "text-white/80",
                )}
              >
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
                isScrolled || isMobileMenuOpen
                  ? "text-neutral-800 dark:text-neutral-200"
                  : "text-white",
              )}
            />
          </div>
        </MobileNavHeader>
      </MobileNav>

      {/* Mobile Dropdown Menu */}
      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        className="h-auto justify-start gap-8 mt-0"
      >
        {/* Main staggered container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full gap-12 pt-6"
        >
          {/* Centered/Top Navigation Links */}
          <div className="flex flex-col w-full gap-4 px-1">
            {mobileNavItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={`mobile-item-${idx}`} variants={itemVariants}>
                  <Link
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group p-3 px-4 bg-slate-50 hover:bg-white border border-transparent hover:border-hospital-blue/20 rounded-2xl flex items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer dark:bg-neutral-900/50 dark:hover:bg-neutral-800/80 w-full"
                  >
                    <div className="flex items-center gap-3 text-left min-w-0">
                      <div className="flex-shrink-0 p-2 rounded-xl bg-white dark:bg-neutral-800 group-hover:bg-hospital-blue/10 text-hospital-blue/80 group-hover:text-hospital-blue transition-colors duration-300 shadow-sm border border-gray-100/50 dark:border-neutral-700/50">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm group-hover:text-hospital-blue transition-colors duration-300 truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold group-hover:text-hospital-green transition-colors duration-300 truncate">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 flex-shrink-0 text-neutral-400 group-hover:text-[#3e8aa1] transition-all duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Action Buttons (Stacked Vertically) */}
          <div className="flex flex-col gap-3.5 w-full max-w-sm mx-auto pb-4">
            <motion.div variants={itemVariants}>
              <a
                href="https://maps.app.goo.gl/DURcWjeQNr9Umiwy9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center h-12 w-full rounded-full border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 shadow-xs hover:shadow-md transition-all gap-2 cursor-pointer active:scale-[0.98] font-bold text-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3e8aa1]/50 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3e8aa1]"></span>
                </span>
                <span>Find Us on Map</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="tel:8801719855"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center h-12 w-full rounded-full bg-gradient-to-r from-[#3e8aa1] to-[#4ea3ba] hover:from-[#2c6b7a] hover:to-[#3e8aa1] text-white text-sm font-extrabold transition-all shadow-sm hover:shadow-md gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>📞 Call: 8801719855</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </MobileNavMenu>
    </Navbar>
  );
}
