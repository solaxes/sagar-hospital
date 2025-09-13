"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, Shield, Zap, Heart, AlertTriangle } from "lucide-react";

const emergencyFeatures = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency services with immediate response",
    color: "text-hospital-primary",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Quick assessment and treatment for critical conditions",
    color: "text-hospital-secondary",
  },
  {
    icon: Shield,
    title: "Advanced Life Support",
    description:
      "Modern equipment and trained staff for life-threatening emergencies",
    color: "text-hospital-primary",
  },
  {
    icon: Heart,
    title: "Trauma Care",
    description: "Specialized trauma team for accident and injury cases",
    color: "text-hospital-secondary",
  },
];

const emergencyServices = [
  "Cardiac Emergencies",
  "Stroke Management",
  "Trauma & Accident Care",
  "Respiratory Emergencies",
  "Severe Bleeding",
  "Poisoning Cases",
  "Burn Injuries",
  "Neurological Emergencies",
];

export function EmergencyServices() {
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
            <span className="text-hospital-primary">Emergency</span> Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When every second counts, our emergency team is ready to provide
            immediate, life-saving care with advanced medical technology and
            experienced professionals
          </p>
        </motion.div>

        {/* Emergency Alert */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-red-500 to-red-600 border-0 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Medical Emergency?
                    </h3>
                    <p className="text-white/90">
                      Don't wait - call our emergency number immediately
                    </p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    +91 98881 06555
                  </div>
                  <Badge variant="secondary" className="bg-white text-red-600">
                    <Clock className="h-3 w-3 mr-1" />
                    24/7 Available
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Emergency Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {emergencyFeatures.map((feature, index) => (
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
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Emergency Services List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-0 bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Emergency Conditions We Handle
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {emergencyServices.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50"
                  >
                    <div className="h-2 w-2 bg-hospital-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* What to Do in Emergency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <Card className="border-0 bg-gradient-to-br from-hospital-primary/5 to-hospital-primary/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-hospital-primary" />
                What to Do in Emergency
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-hospital-primary rounded-full mt-2"></div>
                  <span className="text-sm text-muted-foreground">
                    <strong>Call immediately:</strong> +91 98881 06555
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-hospital-primary rounded-full mt-2"></div>
                  <span className="text-sm text-muted-foreground">
                    <strong>Stay calm</strong> and provide clear information
                    about the situation
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-hospital-primary rounded-full mt-2"></div>
                  <span className="text-sm text-muted-foreground">
                    <strong>Follow instructions</strong> from our emergency team
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-hospital-primary rounded-full mt-2"></div>
                  <span className="text-sm text-muted-foreground">
                    <strong>Bring important documents</strong> like ID and
                    insurance cards
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-hospital-secondary/5 to-hospital-secondary/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-hospital-secondary" />
                Emergency Preparedness
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-hospital-secondary rounded-full mt-2"></div>
                  <span className="text-sm text-muted-foreground">
                    <strong>Keep emergency numbers</strong> handy at all times
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-hospital-secondary rounded-full mt-2"></div>
                  <span className="text-sm text-muted-foreground">
                    <strong>Know your medical history</strong> and current
                    medications
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-hospital-secondary rounded-full mt-2"></div>
                  <span className="text-sm text-muted-foreground">
                    <strong>Have a family member</strong> who can provide
                    medical information
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-hospital-secondary rounded-full mt-2"></div>
                  <span className="text-sm text-muted-foreground">
                    <strong>Regular health checkups</strong> to prevent
                    emergencies
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
