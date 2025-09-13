"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  Heart,
  Shield,
  Users,
  Activity,
  Cross,
  Pill,
  Stethoscope,
} from "lucide-react";

export function GalleryHero() {
  const floatingElements = [
    {
      Icon: Camera,
      delay: 0,
      duration: 4,
      position: { left: "18%", top: "16%" },
    },
    {
      Icon: Heart,
      delay: 1.1,
      duration: 3.5,
      position: { left: "80%", top: "24%" },
    },
    {
      Icon: Shield,
      delay: 0.7,
      duration: 4.2,
      position: { left: "12%", top: "76%" },
    },
    {
      Icon: Activity,
      delay: 1.9,
      duration: 3.8,
      position: { left: "85%", top: "68%" },
    },
    {
      Icon: Cross,
      delay: 0.5,
      duration: 4.5,
      position: { left: "60%", top: "14%" },
    },
    {
      Icon: Pill,
      delay: 1.3,
      duration: 3.2,
      position: { left: "35%", top: "80%" },
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-hospital-primary/5 via-background to-hospital-secondary/5 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233197b6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      {/* Floating Medical Icons */}
      {floatingElements.map(({ Icon, delay, duration, position }, index) => (
        <motion.div
          key={index}
          className="absolute text-hospital-primary/20 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={position}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-2 text-hospital-primary"
              >
                <Camera className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Hospital Gallery
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
              >
                Explore Our
                <span className="text-hospital-primary">
                  {" "}
                  Modern Facilities
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-muted-foreground"
              >
                Take a visual tour of our hospital facilities, modern equipment,
                and comfortable patient areas designed to provide the best
                healthcare experience.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-hospital-primary">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Photos</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-hospital-secondary">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">Facilities</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="border-hospital-primary/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-hospital-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-hospital-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Patient Rooms
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comfortable and modern patient accommodations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Card className="border-hospital-secondary/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-hospital-secondary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-hospital-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Medical Equipment
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        State-of-the-art diagnostic and treatment equipment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Card className="border-hospital-primary/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-hospital-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-hospital-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Common Areas
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Welcoming spaces for patients and visitors
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
