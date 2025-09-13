"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Users,
  Clock,
  Stethoscope,
  Zap,
  Star,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We provide patient-centered care with empathy and understanding for every individual.",
    color: "text-hospital-primary",
  },
  {
    icon: Shield,
    title: "Advanced Technology",
    description:
      "State-of-the-art medical equipment and cutting-edge technology for accurate diagnosis.",
    color: "text-hospital-secondary",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Highly qualified doctors and medical professionals with years of experience.",
    color: "text-hospital-primary",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description:
      "Round-the-clock emergency services to handle critical medical situations.",
    color: "text-hospital-secondary",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Care",
    description:
      "Wide range of medical specialties under one roof for complete healthcare.",
    color: "text-hospital-primary",
  },
  {
    icon: Zap,
    title: "Quick Service",
    description:
      "Minimal waiting times and efficient treatment processes for better experience.",
    color: "text-hospital-secondary",
  },
];

const stats = [
  { number: "5000+", label: "Patients Treated", icon: Users },
  { number: "15+", label: "Medical Specialties", icon: Stethoscope },
  { number: "24/7", label: "Emergency Services", icon: Clock },
  { number: "98%", label: "Patient Satisfaction", icon: Star },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/30">
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
            Why Choose{" "}
            <span className="text-hospital-primary">Sagar Hospital</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing exceptional healthcare services with
            modern facilities, expert medical professionals, and compassionate
            care for our patients.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 ${feature.color}`}
                  >
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-hospital-primary to-hospital-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Achievements
            </h3>
            <p className="text-white/80">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-4">
            <Award className="h-5 w-5" />
            <span className="text-sm font-medium">Accredited & Recognized</span>
          </div>
          <p className="text-muted-foreground">
            Recognized for excellence in healthcare delivery and patient
            satisfaction
          </p>
        </motion.div>
      </div>
    </section>
  );
}
