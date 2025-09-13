"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Award, Zap, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We treat every patient with empathy, understanding, and genuine care, ensuring they feel valued and supported throughout their healthcare journey.",
    color: "text-hospital-primary",
  },
  {
    icon: Shield,
    title: "Excellence",
    description:
      "We maintain the highest standards of medical care, continuously improving our services and staying updated with the latest medical advancements.",
    color: "text-hospital-secondary",
  },
  {
    icon: Users,
    title: "Respect",
    description:
      "We honor the dignity of every individual, treating patients, families, and staff with respect and maintaining confidentiality at all times.",
    color: "text-hospital-primary",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "We conduct ourselves with honesty, transparency, and ethical behavior in all our interactions and medical practices.",
    color: "text-hospital-secondary",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We embrace new technologies and innovative treatment methods to provide the best possible care and improve patient outcomes.",
    color: "text-hospital-primary",
  },
  {
    icon: Target,
    title: "Commitment",
    description:
      "We are dedicated to serving our community with unwavering commitment to patient care, safety, and satisfaction.",
    color: "text-hospital-secondary",
  },
];

export function ValuesSection() {
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
            Our <span className="text-hospital-primary">Core Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The fundamental principles that guide our actions and define our
            commitment to excellence in healthcare
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6 ${value.color}`}
                  >
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-hospital-primary to-hospital-secondary rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-white mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Our Commitment to You
            </h3>
          </div>
          <blockquote className="text-white/90 text-lg md:text-xl italic mb-6 max-w-4xl mx-auto">
            "We pledge to provide exceptional healthcare services with
            compassion, integrity, and excellence. Your health and well-being
            are our top priorities, and we are committed to delivering the
            highest quality care in a safe, comfortable, and respectful
            environment."
          </blockquote>
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Patient Safety First</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Family-Centered Care</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Quality Excellence</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
