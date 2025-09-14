"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
  Users,
  Shield,
  Heart,
  Stethoscope,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Emergency Hotline",
    description: "24/7 emergency services for critical medical situations",
    contact: "+91 98881 06555",
    type: "emergency",
    available: "24/7",
    color: "text-hospital-primary",
  },
  {
    icon: Phone,
    title: "General Inquiry",
    description: "For appointments and general information",
    contact: "+91 98881 06555",
    type: "general",
    available: "Mon-Sat: 8:00 AM - 8:00 PM",
    color: "text-hospital-secondary",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your queries and we'll respond promptly",
    contact: "info@sagarhospital.com",
    type: "email",
    available: "24/7",
    color: "text-hospital-primary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Quick support through WhatsApp messaging",
    contact: "+91 98881 06555",
    type: "whatsapp",
    available: "Mon-Sat: 9:00 AM - 6:00 PM",
    color: "text-hospital-secondary",
  },
];

const departments = [
  {
    name: "Urology",
    doctor: "Dr. Varinder Sagar",
    phone: "+91 98881 06555",
    timing: "Mon-Sat: 9:00 AM - 6:00 PM",
    icon: Stethoscope,
  },
  {
    name: "Gynaecology",
    doctor: "Dr. Malti Sagar",
    phone: "+91 98881 06555",
    timing: "Mon-Sat: 10:00 AM - 7:00 PM",
    icon: Heart,
  },
  {
    name: "Emergency",
    doctor: "Emergency Team",
    phone: "+91 98881 06555",
    timing: "24/7 Available",
    icon: Shield,
  },
];

const services = [
  "Ambulance Service",
  "Appointment Booking",
  "Emergency Care",
  "Medical Consultation",
  "Lab Reports",
  "Insurance Support",
  "Patient Care Coordination",
  "Second Opinion",
];

export function ContactInfo() {
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
            How to <span className="text-hospital-primary">Contact Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to reach us for your healthcare needs. Choose the
            method that works best for you.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 ${method.color}`}
                  >
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium text-foreground text-sm">
                      {method.contact}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {method.available}
                    </Badge>
                  </div>
                  <Button
                    size="sm"
                    className={`w-full mt-4 ${
                      method.type === "emergency"
                        ? "bg-hospital-primary hover:bg-hospital-primary/90"
                        : "bg-hospital-secondary hover:bg-hospital-secondary/90"
                    } text-white`}
                  >
                    {method.type === "email"
                      ? "Send Email"
                      : method.type === "whatsapp"
                      ? "WhatsApp"
                      : method.type === "emergency"
                      ? "Call Now"
                      : "Contact"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Department Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Department <span className="text-hospital-primary">Contacts</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Card
                key={dept.name}
                className="border-0 bg-card hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-10 w-10 bg-hospital-primary/10 rounded-full flex items-center justify-center">
                      <dept.icon className="h-5 w-5 text-hospital-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {dept.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {dept.doctor}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-hospital-secondary" />
                      <span className="text-muted-foreground">
                        {dept.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-hospital-secondary" />
                      <span className="text-muted-foreground">
                        {dept.timing}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Services & Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Services */}
          <Card className="border-0 bg-gradient-to-br from-hospital-primary/5 to-hospital-primary/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Users className="h-5 w-5 mr-2 text-hospital-primary" />
                Available Services
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-hospital-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hospital Information */}
          <Card className="border-0 bg-gradient-to-br from-hospital-secondary/5 to-hospital-secondary/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-hospital-secondary" />
                Hospital Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-hospital-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Address
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Jalandhar, Punjab, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-hospital-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Emergency Services
                    </p>
                    <p className="text-sm text-muted-foreground">
                      24/7 Available
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-hospital-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Regular Hours
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Sat: 8:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-hospital-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Insurance
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Cashless treatment available
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
