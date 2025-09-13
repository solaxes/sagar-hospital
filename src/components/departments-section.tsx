"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Baby,
  Brain,
  Bone,
  Activity,
  Microscope,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

const departments = [
  {
    icon: Heart,
    title: "Urology",
    description:
      "Expert urological care with advanced treatment options for kidney, bladder, and prostate conditions.",
    specialist: "Dr. Varinder Sagar",
    color: "text-hospital-primary",
    bgColor: "bg-hospital-primary/10",
  },
  {
    icon: Baby,
    title: "Gynaecology",
    description:
      "Comprehensive women's health services including maternity care, fertility, and gynecological treatments.",
    specialist: "Dr. Malti Sagar",
    color: "text-hospital-secondary",
    bgColor: "bg-hospital-secondary/10",
  },
  {
    icon: Brain,
    title: "General Medicine",
    description:
      "Primary healthcare services for adults with comprehensive diagnosis and treatment of various conditions.",
    specialist: "Expert Physicians",
    color: "text-hospital-primary",
    bgColor: "bg-hospital-primary/10",
  },
  {
    icon: Shield,
    title: "Emergency Care",
    description:
      "24/7 emergency services with rapid response team for critical medical situations and trauma care.",
    specialist: "Emergency Team",
    color: "text-hospital-secondary",
    bgColor: "bg-hospital-secondary/10",
  },
  {
    icon: Baby,
    title: "Maternity Services",
    description:
      "Complete maternity care from prenatal to postnatal services with modern delivery facilities.",
    specialist: "Dr. Malti Sagar",
    color: "text-hospital-primary",
    bgColor: "bg-hospital-primary/10",
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description:
      "Advanced diagnostic laboratory with modern equipment for accurate and timely test results.",
    specialist: "Lab Technicians",
    color: "text-hospital-secondary",
    bgColor: "bg-hospital-secondary/10",
  },
  {
    icon: Activity,
    title: "Physiotherapy",
    description:
      "Rehabilitation services with specialized therapy programs for recovery and wellness.",
    specialist: "Physiotherapists",
    color: "text-hospital-primary",
    bgColor: "bg-hospital-primary/10",
  },
  {
    icon: Zap,
    title: "Radiology",
    description:
      "Advanced imaging services including X-ray, ultrasound, and other diagnostic imaging procedures.",
    specialist: "Radiologists",
    color: "text-hospital-secondary",
    bgColor: "bg-hospital-secondary/10",
  },
];

export function DepartmentsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-hospital-primary">Departments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services across multiple specialties with
            expert doctors and modern facilities to meet all your medical needs.
          </p>
        </motion.div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {departments.map((department, index) => (
            <motion.div
              key={department.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                <CardContent className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${department.bgColor} mb-4 ${department.color}`}
                  >
                    <department.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {department.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {department.description}
                  </p>

                  <div className="border-t pt-3">
                    <p className="text-xs text-muted-foreground mb-1">
                      Specialist:
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {department.specialist}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-hospital-primary to-hospital-secondary border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need a Specific Treatment?
              </h3>
              <p className="text-white/80 mb-6">
                Our expert doctors are here to provide personalized care for
                your specific medical needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/departments">View All Departments</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-hospital-primary"
                  asChild
                >
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
