"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Clock,
  Shield,
  Heart,
  Stethoscope,
  Activity,
  Cross,
  Pill,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { damping: 20 });

  // Generate stable dot positions - Increased density
  const dotPositions = Array.from({ length: 60 }, (_, index) => ({
    id: index,
    left: (index * 23 + 7) % 100, // More dense distribution
    top: (index * 17 + 11) % 100,
    size: 0.6 + (index % 5) * 0.3, // Sizes: 0.6rem to 1.8rem
    speed: 0.015 + (index % 8) * 0.012, // Speeds: 0.015 to 0.111
    opacity: 0.7 + (index % 4) * 0.15, // Higher opacity: 0.7 to 1.0
    color:
      index % 6 === 0
        ? "red-500"
        : index % 6 === 1
        ? "red-600"
        : index % 6 === 2
        ? "red-700"
        : index % 6 === 3
        ? "red-400"
        : index % 6 === 4
        ? "red-800"
        : "red-300",
  }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const floatingElements = [
    {
      Icon: Heart,
      delay: 0,
      duration: 3,
      position: { left: "10%", top: "20%" },
    },
    {
      Icon: Stethoscope,
      delay: 0.5,
      duration: 4,
      position: { left: "80%", top: "30%" },
    },
    {
      Icon: Shield,
      delay: 1,
      duration: 3.5,
      position: { left: "15%", top: "70%" },
    },
    {
      Icon: Activity,
      delay: 1.5,
      duration: 4.5,
      position: { left: "85%", top: "60%" },
    },
    {
      Icon: Cross,
      delay: 2,
      duration: 3.8,
      position: { left: "5%", top: "50%" },
    },
    {
      Icon: Pill,
      delay: 2.5,
      duration: 4.2,
      position: { left: "90%", top: "15%" },
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-red-100 min-h-screen flex items-center overflow-hidden">
      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-600/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-red-50/30"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23dc2626%22%20fill-opacity%3D%220.08%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>

      {/* Floating Medical Icons */}
      {floatingElements.map(({ Icon, delay, duration, position }, index) => (
        <motion.div
          key={index}
          className="absolute text-red-400/40 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0],
            y: [0, -30, 0],
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
          <Icon className="h-8 w-8" />
        </motion.div>
      ))}

      {/* Animated Dots */}
      {dotPositions.map((dot) => (
        <motion.div
          key={dot.id}
          className={`absolute bg-${dot.color} rounded-full shadow-lg`}
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}rem`,
            height: `${dot.size}rem`,
            opacity: dot.opacity,
          }}
          animate={{
            x: useTransform(springX, (value) => (value - 960) * dot.speed),
            y: useTransform(springY, (value) => (value - 540) * dot.speed),
            scale: [1, 1.5, 1, 0.8, 1],
            rotate: [0, 180, 360],
            opacity: [
              dot.opacity * 0.7,
              dot.opacity,
              dot.opacity * 0.5,
              dot.opacity,
            ],
          }}
          transition={{
            scale: {
              duration: 3 + (dot.id % 4),
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 8 + (dot.id % 6),
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 2 + (dot.id % 3),
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Additional Animated Shapes */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute bg-red-500/40 rounded-full"
          style={{
            left: `${(index * 45 + 20) % 100}%`,
            top: `${(index * 67 + 30) % 100}%`,
            width: `${2 + (index % 3) * 1.5}rem`,
            height: `${2 + (index % 3) * 1.5}rem`,
          }}
          animate={{
            x: useTransform(
              springX,
              (value) => (value - 960) * (0.005 + index * 0.003)
            ),
            y: useTransform(
              springY,
              (value) => (value - 540) * (0.005 + index * 0.003)
            ),
            scale: [0.5, 1.2, 0.8, 1],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.2, 0.6, 0.3, 0.5],
          }}
          transition={{
            scale: {
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Pulsing Rings */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`ring-${index}`}
          className="absolute border-2 border-red-500/60 rounded-full"
          style={{
            left: `${(index * 60 + 10) % 100}%`,
            top: `${(index * 40 + 20) % 100}%`,
            width: `${3 + index * 2}rem`,
            height: `${3 + index * 2}rem`,
          }}
          animate={{
            x: useTransform(
              springX,
              (value) => (value - 960) * (0.01 + index * 0.005)
            ),
            y: useTransform(
              springY,
              (value) => (value - 540) * (0.01 + index * 0.005)
            ),
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Particles */}
      {Array.from({ length: 25 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute bg-red-600/50 rounded-full"
          style={{
            left: `${(index * 19 + 5) % 100}%`,
            top: `${(index * 31 + 8) % 100}%`,
            width: `${0.4 + (index % 3) * 0.2}rem`,
            height: `${0.4 + (index % 3) * 0.2}rem`,
          }}
          animate={{
            x: useTransform(
              springX,
              (value) => (value - 960) * (0.008 + index * 0.002)
            ),
            y: useTransform(
              springY,
              (value) => (value - 540) * (0.008 + index * 0.002)
            ),
            scale: [0.5, 1.5, 0.8, 1.2, 0.5],
            opacity: [0.3, 0.9, 0.4, 0.7, 0.3],
          }}
          transition={{
            scale: {
              duration: 2 + (index % 4),
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: 1.5 + (index % 3),
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Wavy Lines */}
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={`wave-${index}`}
          className="absolute border-t border-red-400/40"
          style={{
            left: `${(index * 35 + 15) % 100}%`,
            top: `${(index * 25 + 20) % 100}%`,
            width: `${20 + (index % 4) * 10}px`,
            height: "1px",
          }}
          animate={{
            x: useTransform(
              springX,
              (value) => (value - 960) * (0.003 + index * 0.001)
            ),
            y: useTransform(
              springY,
              (value) => (value - 540) * (0.003 + index * 0.001)
            ),
            scaleX: [0.5, 1.5, 0.8, 1.2, 0.5],
            opacity: [0.2, 0.8, 0.3, 0.6, 0.2],
          }}
          transition={{
            scaleX: {
              duration: 3 + (index % 3),
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: 2 + (index % 2),
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-2 text-hospital-primary"
              >
                <Heart className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Comprehensive Healthcare
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Your Health, Our
                <span className="text-hospital-primary"> Priority</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-muted-foreground max-w-lg"
              >
                Sagar Multispeciality Hospital provides world-class healthcare
                services with modern facilities, expert doctors, and
                compassionate care for you and your family.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-hospital-primary hover:bg-hospital-primary/90 text-white"
                asChild
              >
                <Link href="/departments">Our Services</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-hospital-secondary text-hospital-secondary hover:bg-hospital-secondary hover:text-white"
                asChild
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: +91 98881 06555
                </Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-hospital-primary">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Emergency Care
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-hospital-secondary">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">Specialties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-hospital-primary">
                  1000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Patients
                </div>
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
            {/* Emergency Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="border-hospital-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-hospital-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-hospital-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        24/7 Emergency
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Round-the-clock emergency services
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quality Care Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Card className="border-hospital-secondary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-hospital-secondary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-hospital-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Quality Care
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Advanced medical technology & expertise
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timely Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Card className="border-hospital-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-hospital-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-hospital-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Quick Service
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Minimal waiting times & efficient care
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-red-400/30 to-red-600/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-red-300/25 to-red-500/15 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-white/40 to-red-100/30 rounded-full blur-lg"
      />
    </section>
  );
}
