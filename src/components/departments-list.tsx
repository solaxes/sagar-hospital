"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Baby,
  Brain,
  Bone,
  Activity,
  Microscope,
  Shield,
  Zap,
  Phone,
  Clock,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

const departments = [
  {
    icon: Heart,
    title: "Urology",
    description:
      "Expert urological care with advanced treatment options for kidney, bladder, and prostate conditions.",
    specialist: "Dr. Varinder Sagar",
    services: [
      "Kidney Stone Treatment",
      "Prostate Care",
      "Bladder Surgery",
      "Minimally Invasive Procedures",
    ],
    timing: "Mon-Sat: 9:00 AM - 6:00 PM",
    emergency: false,
    color: "text-hospital-primary",
    bgColor: "bg-hospital-primary/10",
  },
  {
    icon: Baby,
    title: "Gynaecology & Obstetrics",
    description:
      "Comprehensive women's health services including maternity care, fertility, and gynecological treatments.",
    specialist: "Dr. Malti Sagar",
    services: [
      "Pregnancy Care",
      "Delivery Services",
      "Gynecological Surgery",
      "Fertility Treatment",
    ],
    timing: "Mon-Sat: 10:00 AM - 7:00 PM",
    emergency: false,
    color: "text-hospital-secondary",
    bgColor: "bg-hospital-secondary/10",
  },
  {
    icon: Shield,
    title: "Emergency Care",
    description:
      "24/7 emergency services with rapid response team for critical medical situations and trauma care.",
    specialist: "Emergency Team",
    services: [
      "Trauma Care",
      "Critical Care",
      "Emergency Surgery",
      "Life Support",
    ],
    timing: "24/7 Available",
    emergency: true,
    color: "text-hospital-primary",
    bgColor: "bg-hospital-primary/10",
  },
  {
    icon: Brain,
    title: "General Medicine",
    description:
      "Primary healthcare services for adults with comprehensive diagnosis and treatment of various conditions.",
    specialist: "Expert Physicians",
    services: [
      "Health Checkups",
      "Chronic Disease Management",
      "Preventive Care",
      "Internal Medicine",
    ],
    timing: "Mon-Sat: 8:00 AM - 8:00 PM",
    emergency: false,
    color: "text-hospital-secondary",
    bgColor: "bg-hospital-secondary/10",
  },
  {
    icon: Baby,
    title: "Maternity Services",
    description:
      "Complete maternity care from prenatal to postnatal services with modern delivery facilities.",
    specialist: "Dr. Malti Sagar",
    services: [
      "Antenatal Care",
      "Delivery Services",
      "Postnatal Care",
      "Newborn Care",
    ],
    timing: "24/7 Delivery Services",
    emergency: true,
    color: "text-hospital-primary",
    bgColor: "bg-hospital-primary/10",
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description:
      "Advanced diagnostic laboratory with modern equipment for accurate and timely test results.",
    specialist: "Lab Technicians",
    services: ["Blood Tests", "Pathology", "Microbiology", "Biochemistry"],
    timing: "Mon-Sat: 6:00 AM - 10:00 PM",
    emergency: false,
    color: "text-hospital-secondary",
    bgColor: "bg-hospital-secondary/10",
  },
  {
    icon: Activity,
    title: "Physiotherapy",
    description:
      "Rehabilitation services with specialized therapy programs for recovery and wellness.",
    specialist: "Physiotherapists",
    services: [
      "Physical Therapy",
      "Rehabilitation",
      "Pain Management",
      "Sports Medicine",
    ],
    timing: "Mon-Sat: 8:00 AM - 6:00 PM",
    emergency: false,
    color: "text-hospital-primary",
    bgColor: "bg-hospital-primary/10",
  },
  {
    icon: Zap,
    title: "Radiology & Imaging",
    description:
      "Advanced imaging services including X-ray, ultrasound, and other diagnostic imaging procedures.",
    specialist: "Radiologists",
    services: ["X-Ray", "Ultrasound", "CT Scan", "MRI"],
    timing: "Mon-Sat: 7:00 AM - 9:00 PM",
    emergency: false,
    color: "text-hospital-secondary",
    bgColor: "bg-hospital-secondary/10",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Heart care services with advanced diagnostic and treatment options for cardiovascular conditions.",
    specialist: "Cardiologists",
    services: ["Heart Checkups", "ECG", "Echocardiography", "Cardiac Care"],
    timing: "Mon-Sat: 9:00 AM - 5:00 PM",
    emergency: false,
    color: "text-hospital-primary",
    bgColor: "bg-hospital-primary/10",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description:
      "Bone and joint care services including treatment for fractures, arthritis, and sports injuries.",
    specialist: "Orthopedic Surgeons",
    services: [
      "Fracture Treatment",
      "Joint Replacement",
      "Sports Injuries",
      "Spine Care",
    ],
    timing: "Mon-Sat: 9:00 AM - 6:00 PM",
    emergency: false,
    color: "text-hospital-secondary",
    bgColor: "bg-hospital-secondary/10",
  },
];

export function DepartmentsList() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our{" "}
            <span className="text-hospital-primary">Medical Departments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services across multiple specialties with
            expert doctors and modern facilities to meet all your medical needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${department.bgColor} ${department.color}`}
                    >
                      <department.icon className="h-6 w-6" />
                    </div>
                    {department.emergency && (
                      <Badge variant="destructive" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        24/7
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {department.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {department.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Specialist:
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {department.specialist}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-2">
                        Services:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {department.services.slice(0, 2).map((service, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {service}
                          </Badge>
                        ))}
                        {department.services.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{department.services.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                      <span>Timing:</span>
                      <span className="font-medium">{department.timing}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-hospital-primary hover:bg-hospital-primary/90 text-white"
                      asChild
                    >
                      <Link href="/contact">
                        <Phone className="h-3 w-3 mr-1" />
                        Contact Us
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-hospital-secondary text-hospital-secondary hover:bg-hospital-secondary hover:text-white"
                    >
                      <Stethoscope className="h-3 w-3 mr-1" />
                      Learn More
                    </Button>
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
                Need Help Choosing a Department?
              </h3>
              <p className="text-white/80 mb-6">
                Our patient care coordinators are here to help you find the
                right specialist for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Phone className="h-4 w-4 mr-2" />
                  Call +91 98881 06555
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-hospital-primary"
                >
                  <Stethoscope className="h-4 w-4 mr-2" />
                  Get Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
