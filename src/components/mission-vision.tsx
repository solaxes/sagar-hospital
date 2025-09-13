"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

export function MissionVision() {
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
            Our <span className="text-hospital-primary">Mission & Vision</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guiding principles that drive our commitment to excellence in
            healthcare
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-hospital-primary/5 to-hospital-primary/10">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hospital-primary/10 mb-6">
                  <Target className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To provide comprehensive, high-quality healthcare services
                  with compassion, using advanced technology and evidence-based
                  medicine to improve the health and well-being of our
                  community.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-hospital-secondary/5 to-hospital-secondary/10">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hospital-secondary/10 mb-6">
                  <Eye className="h-8 w-8 text-hospital-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  To be the leading multispeciality hospital in the region,
                  recognized for excellence in patient care, medical innovation,
                  and community service, setting new standards in healthcare
                  delivery.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-hospital-primary/5 to-hospital-primary/10">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hospital-primary/10 mb-6">
                  <Heart className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Our Values
                </h3>
                <p className="text-muted-foreground">
                  Compassion, Integrity, Excellence, Respect, and Innovation
                  guide everything we do. We treat every patient with dignity
                  and provide care that meets the highest standards of medical
                  practice.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-hospital-secondary/5 to-hospital-secondary/10">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hospital-secondary/10 mb-6">
                  <Users className="h-8 w-8 text-hospital-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Our Commitment
                </h3>
                <p className="text-muted-foreground">
                  We are committed to continuous improvement, patient safety,
                  and delivering personalized care that exceeds expectations
                  while maintaining the highest ethical standards in healthcare.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
