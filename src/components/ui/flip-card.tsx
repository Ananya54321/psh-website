"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  children: React.ReactNode;
  className?: string;
}

interface FlipCardFrontProps {
  children: React.ReactNode;
  className?: string;
}

interface FlipCardBackProps {
  children: React.ReactNode;
  className?: string;
}

export function FlipCard({ children, className }: FlipCardProps) {
  return (
    <div className={cn("group perspective-1000 w-full h-80", className)}>
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {children}
      </div>
    </div>
  );
}

export function FlipCardFront({ children, className }: FlipCardFrontProps) {
  return (
    <div className={cn(
      "absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden",
      className
    )}>
      {children}
    </div>
  );
}

export function FlipCardBack({ children, className }: FlipCardBackProps) {
  return (
    <div className={cn(
      "absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden rotate-y-180",
      className
    )}>
      {children}
    </div>
  );
}
