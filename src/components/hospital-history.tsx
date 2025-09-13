"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Users, Heart } from "lucide-react";

const milestones = [
  {
    year: "2008",
    title: "Foundation",
    description:
      "Sagar Multispeciality Hospital was established with a vision to provide comprehensive healthcare services to the community.",
    icon: Calendar,
  },
  {
    year: "2010",
    title: "Expansion",
    description:
      "Added advanced medical equipment and expanded our team of specialized doctors to serve more patients.",
    icon: Users,
  },
  {
    year: "2015",
    title: "Recognition",
    description:
      "Received recognition for excellence in patient care and became a trusted healthcare provider in the region.",
    icon: Award,
  },
  {
    year: "2020",
    title: "Modernization",
    description:
      "Upgraded facilities with state-of-the-art technology and implemented modern healthcare practices.",
    icon: Heart,
  },
  {
    year: "2024",
    title: "Present",
    description:
      "Continuing to serve the community with dedication, providing world-class healthcare with compassion and expertise.",
    icon: Heart,
  },
];

export function HospitalHistory() {
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
            Our <span className="text-hospital-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of our growth and commitment to serving the community
            with excellence in healthcare
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-hospital-primary to-hospital-secondary hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:space-x-8 space-y-4`}
              >
                {/* Content Card */}
                <div className="flex-1 md:max-w-md">
                  <Card className="hover:shadow-lg transition-shadow border-0 bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-hospital-primary to-hospital-secondary flex items-center justify-center">
                          <milestone.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {milestone.title}
                          </h3>
                          <p className="text-sm font-semibold text-hospital-primary">
                            {milestone.year}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-6 h-6 bg-white border-4 border-hospital-primary rounded-full relative z-10">
                  <div className="w-2 h-2 bg-hospital-primary rounded-full"></div>
                </div>

                {/* Year Badge */}
                <div className="hidden md:flex items-center justify-center w-20 h-20 bg-gradient-to-r from-hospital-primary to-hospital-secondary rounded-full text-white font-bold text-lg relative z-10">
                  {milestone.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-hospital-primary to-hospital-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Achievements
            </h3>
            <p className="text-white/80">
              Milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                15+
              </div>
              <div className="text-white/80 text-sm">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                5000+
              </div>
              <div className="text-white/80 text-sm">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                15+
              </div>
              <div className="text-white/80 text-sm">Medical Specialties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                98%
              </div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
