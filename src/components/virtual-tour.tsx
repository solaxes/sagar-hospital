"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Eye,
  Navigation,
  Clock,
  Users,
  Shield,
  Heart,
  Stethoscope,
  Camera,
  Play,
} from "lucide-react";

const tourStops = [
  {
    id: "reception",
    title: "Main Reception",
    description: "Welcome area with patient registration and information desk",
    icon: Users,
    duration: "2 min",
    features: ["Registration Desk", "Information Center", "Waiting Area"],
  },
  {
    id: "emergency",
    title: "Emergency Department",
    description: "24/7 emergency services with rapid response team",
    icon: Shield,
    duration: "3 min",
    features: ["Trauma Center", "Life Support", "Emergency Surgery"],
  },
  {
    id: "urology",
    title: "Urology Department",
    description: "Specialized urological care with Dr. Varinder Sagar",
    icon: Stethoscope,
    duration: "2 min",
    features: ["Consultation Rooms", "Procedure Room", "Recovery Area"],
  },
  {
    id: "gynecology",
    title: "Gynaecology Department",
    description: "Women's health services with Dr. Malti Sagar",
    icon: Heart,
    duration: "3 min",
    features: ["Prenatal Care", "Delivery Room", "Postnatal Ward"],
  },
  {
    id: "lab",
    title: "Laboratory",
    description: "Advanced diagnostic laboratory with modern equipment",
    icon: Camera,
    duration: "2 min",
    features: ["Blood Tests", "Pathology", "Microbiology"],
  },
];

export function VirtualTour() {
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
            Virtual <span className="text-hospital-primary">Hospital Tour</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a virtual walkthrough of our hospital facilities and get
            familiar with our modern infrastructure before your visit
          </p>
        </motion.div>

        {/* Virtual Tour Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-hospital-primary to-hospital-secondary border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Tour Preview */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        360° Virtual Tour
                      </h3>
                      <p className="text-white/80">
                        Explore our hospital from anywhere
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-6">
                    Experience our hospital facilities through an immersive
                    virtual tour. Navigate through different departments and see
                    our modern equipment and comfortable patient areas.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-hospital-primary hover:bg-white/90"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Start Virtual Tour
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-hospital-primary"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Interactive Map
                    </Button>
                  </div>
                </div>

                {/* Tour Preview Image */}
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Virtual Tour Preview</p>
                    <p className="text-sm opacity-75">
                      360° Interactive Experience
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tour Stops */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tourStops.map((stop, index) => (
            <motion.div
              key={stop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-hospital-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <stop.icon className="h-6 w-6 text-hospital-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">
                          {stop.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {stop.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {stop.description}
                      </p>
                      <div className="space-y-1">
                        {stop.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <div className="h-1.5 w-1.5 bg-hospital-secondary rounded-full"></div>
                            <span className="text-xs text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tour Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-hospital-secondary to-hospital-primary rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tour Features
            </h3>
            <p className="text-white/80">
              Experience our hospital with these interactive features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <Navigation className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">
                Interactive Navigation
              </h4>
              <p className="text-white/80 text-sm">
                Navigate through different areas with ease
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">
                Location Mapping
              </h4>
              <p className="text-white/80 text-sm">
                Find departments and facilities easily
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">360° Views</h4>
              <p className="text-white/80 text-sm">
                Immersive panoramic views of our facilities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
