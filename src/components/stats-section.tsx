"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Stethoscope, Clock, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5000+",
    label: "Happy Patients",
    description: "Patients who have received excellent care",
    color: "text-hospital-primary",
  },
  {
    icon: Stethoscope,
    number: "15+",
    label: "Medical Specialties",
    description: "Comprehensive range of medical services",
    color: "text-hospital-secondary",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Emergency Care",
    description: "Round-the-clock emergency services",
    color: "text-hospital-primary",
  },
  {
    icon: Heart,
    number: "98%",
    label: "Success Rate",
    description: "High success rate in treatments",
    color: "text-hospital-secondary",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-card">
                <CardContent className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 ${stat.color}`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
