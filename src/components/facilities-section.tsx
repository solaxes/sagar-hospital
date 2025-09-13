"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Clock,
  Wifi,
  Car,
  Utensils,
  Phone,
  Heart,
  Stethoscope,
  Microscope,
  Camera,
} from "lucide-react";

const facilities = [
  {
    icon: Shield,
    title: "24/7 Emergency Services",
    description:
      "Round-the-clock emergency care with rapid response team and advanced life support equipment.",
    color: "text-hospital-primary",
  },
  {
    icon: Clock,
    title: "24/7 Pharmacy",
    description:
      "Full-service pharmacy available 24 hours a day for all your medication needs.",
    color: "text-hospital-secondary",
  },
  {
    icon: Heart,
    title: "Blood Bank",
    description:
      "Well-equipped blood bank with all blood groups available for emergency transfusions.",
    color: "text-hospital-primary",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description:
      "High-speed internet connectivity throughout the hospital for patients and visitors.",
    color: "text-hospital-secondary",
  },
  {
    icon: Car,
    title: "Free Parking",
    description:
      "Ample parking space available for patients and visitors free of cost.",
    color: "text-hospital-primary",
  },
  {
    icon: Utensils,
    title: "Cafeteria & Food Court",
    description:
      "Clean and hygienic cafeteria serving nutritious meals for patients and visitors.",
    color: "text-hospital-secondary",
  },
  {
    icon: Stethoscope,
    title: "Advanced ICU",
    description:
      "State-of-the-art Intensive Care Unit with modern monitoring equipment.",
    color: "text-hospital-primary",
  },
  {
    icon: Microscope,
    title: "Modern Laboratory",
    description:
      "Fully equipped laboratory with advanced diagnostic equipment for accurate results.",
    color: "text-hospital-secondary",
  },
  {
    icon: Camera,
    title: "Imaging Services",
    description:
      "Advanced imaging services including X-ray, ultrasound, and other diagnostic procedures.",
    color: "text-hospital-primary",
  },
];

export function FacilitiesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-hospital-primary">Facilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern amenities and state-of-the-art facilities designed to provide
            comfort and convenience for our patients and their families
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                <CardContent className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 ${facility.color}`}
                  >
                    <facility.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-hospital-primary to-hospital-secondary border-0">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Additional Services
                </h3>
                <p className="text-white/80">
                  Comprehensive support services to ensure your complete comfort
                  and care
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">
                    Ambulance Service
                  </h4>
                  <p className="text-white/80 text-sm">
                    24/7 ambulance service for emergency pickups
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">
                    Patient Care
                  </h4>
                  <p className="text-white/80 text-sm">
                    Dedicated patient care coordinators for assistance
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">
                    Insurance Support
                  </h4>
                  <p className="text-white/80 text-sm">
                    Insurance claim assistance and cashless treatment
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
