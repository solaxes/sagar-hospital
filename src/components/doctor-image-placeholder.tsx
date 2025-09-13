"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, User } from "lucide-react";

interface DoctorImagePlaceholderProps {
  name: string;
  specialty: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showPlaceholder?: boolean;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-40 h-40",
};

export function DoctorImagePlaceholder({
  name,
  specialty,
  size = "lg",
  className = "",
  showPlaceholder = true,
}: DoctorImagePlaceholderProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={`relative ${className}`}>
      <Avatar
        className={`${sizeClasses[size]} border-4 border-hospital-primary/20`}
      >
        <AvatarImage
          src={
            showPlaceholder
              ? undefined
              : `/images/doctors/${name.toLowerCase().replace(/\s+/g, "-")}.jpg`
          }
          alt={name}
        />
        <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-hospital-primary/10 to-hospital-secondary/10 text-hospital-primary">
          {initials}
        </AvatarFallback>
      </Avatar>

      {showPlaceholder && (
        <div className="absolute -bottom-2 -right-2 bg-hospital-accent text-white rounded-full p-2 shadow-lg">
          <Camera className="h-4 w-4" />
        </div>
      )}

      {/* Placeholder overlay for adding image */}
      {showPlaceholder && (
        <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 cursor-pointer group">
          <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-200">
            <User className="h-6 w-6 text-hospital-primary" />
          </div>
        </div>
      )}
    </div>
  );
}
