"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DoctorImagePlaceholder } from "@/components/doctor-image-placeholder";
import { Badge } from "@/components/ui/badge";
import { Heart, Stethoscope, Award, Phone } from "lucide-react";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Varinder Sagar",
    specialty: "Urologist",
    experience: "15+ Years",
    qualification: "MS, DNB Urology",
    description:
      "Expert urologist with extensive experience in kidney stones, prostate conditions, and minimally invasive urological surgeries.",
    image: "/api/placeholder/200/200",
    achievements: [
      "Advanced Laparoscopic Surgery",
      "Kidney Stone Treatment",
      "Prostate Care",
    ],
    consultation: "Mon-Sat: 9:00 AM - 6:00 PM",
  },
  {
    name: "Dr. Malti Sagar",
    specialty: "Gynaecologist",
    experience: "12+ Years",
    qualification: "MS, DNB Obstetrics & Gynaecology",
    description:
      "Experienced gynecologist specializing in women's health, maternity care, and advanced gynecological procedures.",
    image: "/api/placeholder/200/200",
    achievements: [
      "High-Risk Pregnancy Care",
      "Minimally Invasive Surgery",
      "Fertility Treatment",
    ],
    consultation: "Mon-Sat: 10:00 AM - 7:00 PM",
  },
];

export function DoctorsSection() {
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
            Meet Our{" "}
            <span className="text-hospital-primary">Expert Doctors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our highly qualified and experienced doctors are dedicated to
            providing the best possible care with compassion and expertise.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    {/* Doctor Image */}
                    <div className="flex-shrink-0">
                      <DoctorImagePlaceholder
                        name={doctor.name}
                        specialty={doctor.specialty}
                        size="lg"
                        showPlaceholder={true}
                      />
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {doctor.name}
                          </h3>
                          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                            <Badge
                              variant="secondary"
                              className="bg-hospital-primary/10 text-hospital-primary"
                            >
                              {doctor.specialty}
                            </Badge>
                            <Badge variant="outline">{doctor.experience}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground font-medium">
                            {doctor.qualification}
                          </p>
                        </div>

                        <p className="text-muted-foreground">
                          {doctor.description}
                        </p>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                            <Award className="h-4 w-4 mr-2 text-hospital-primary" />
                            Specializations
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {doctor.achievements.map((achievement, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Consultation Hours */}
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="flex items-center justify-center md:justify-start text-sm">
                            <Stethoscope className="h-4 w-4 mr-2 text-hospital-secondary" />
                            <span className="text-muted-foreground">
                              Consultation:{" "}
                            </span>
                            <span className="font-medium text-foreground ml-1">
                              {doctor.consultation}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            className="bg-hospital-primary hover:bg-hospital-primary/90 text-white flex-1"
                            asChild
                          >
                            <Link href="/contact">
                              <Phone className="h-4 w-4 mr-2" />
                              Contact Information
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            className="border-hospital-secondary text-hospital-secondary hover:bg-hospital-secondary hover:text-white flex-1"
                            asChild
                          >
                            <Link
                              href={
                                doctor.name === "Dr. Varinder Sagar"
                                  ? "/doctors/dr-varinder-sagar"
                                  : "/doctors/dr-malti-sagar"
                              }
                            >
                              View Profile
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-hospital-secondary to-hospital-primary border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">
                  Ready to Schedule Your Visit?
                </h3>
              </div>
              <p className="text-white/80 mb-6">
                Book an appointment with our expert doctors for personalized
                healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/doctors">Meet All Doctors</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-hospital-primary"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
