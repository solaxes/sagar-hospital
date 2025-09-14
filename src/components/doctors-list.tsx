"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Stethoscope,
  Award,
  Phone,
  Clock,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Varinder Sagar",
    position: "Director & Chief Urologist",
    specialty: "Urology",
    experience: "15+ Years",
    qualification: "MS, DNB Urology",
    description:
      "Dr. Varinder Sagar is a highly experienced urologist with extensive expertise in minimally invasive urological surgeries, kidney stone treatment, and prostate care. He has been instrumental in establishing the hospital's reputation for excellence in urological care.",
    image: "/api/placeholder/200/200",
    achievements: [
      "Advanced Laparoscopic Surgery",
      "Kidney Stone Treatment Expert",
      "Prostate Care Specialist",
      "Minimally Invasive Procedures",
      "Robotic Surgery Trained",
      "Endourology Specialist",
    ],
    consultation: "Mon-Sat: 9:00 AM - 6:00 PM",
    languages: ["Hindi", "English", "Punjabi"],
    education: [
      "MBBS - Government Medical College",
      "MS Urology - PGIMER Chandigarh",
      "DNB Urology - National Board",
    ],
    specializations: [
      "Kidney Stone Treatment",
      "Prostate Surgery",
      "Bladder Cancer Treatment",
      "Male Infertility",
      "Urological Trauma",
      "Pediatric Urology",
    ],
  },
  {
    name: "Dr. Malti Sagar",
    position: "Director & Chief Gynaecologist",
    specialty: "Gynaecology & Obstetrics",
    experience: "12+ Years",
    qualification: "MS, DNB Obstetrics & Gynaecology",
    description:
      "Dr. Malti Sagar is a dedicated gynecologist specializing in women's health, high-risk pregnancy care, and advanced gynecological procedures. She has been providing exceptional care to women in the community with compassion and expertise.",
    image: "/api/placeholder/200/200",
    achievements: [
      "High-Risk Pregnancy Care",
      "Minimally Invasive Surgery",
      "Fertility Treatment",
      "Women's Health Specialist",
      "Laparoscopic Surgery Expert",
      "Prenatal Care Specialist",
    ],
    consultation: "Mon-Sat: 10:00 AM - 7:00 PM",
    languages: ["Hindi", "English", "Punjabi"],
    education: [
      "MBBS - Government Medical College",
      "MS Obstetrics & Gynaecology - AIIMS Delhi",
      "DNB Obstetrics & Gynaecology - National Board",
    ],
    specializations: [
      "Pregnancy Care",
      "Delivery Services",
      "Gynecological Surgery",
      "Fertility Treatment",
      "Menopause Management",
      "Family Planning",
    ],
  },
];

export function DoctorsList() {
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
            Our <span className="text-hospital-primary">Expert Doctors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highly qualified and experienced medical professionals dedicated to
            providing the best possible care with compassion and expertise
          </p>
        </motion.div>

        <div className="space-y-12">
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
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Doctor Image and Basic Info */}
                    <div className="lg:col-span-1">
                      <div className="text-center lg:text-left">
                        <Avatar className="w-40 h-40 border-4 border-hospital-primary/20 mx-auto lg:mx-0 mb-6">
                          <AvatarFallback className="text-3xl font-bold bg-hospital-primary/10 text-hospital-primary">
                            {doctor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {doctor.name}
                        </h3>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
                          <Badge
                            variant="secondary"
                            className="bg-hospital-primary/10 text-hospital-primary"
                          >
                            {doctor.position}
                          </Badge>
                          <Badge variant="outline">{doctor.experience}</Badge>
                        </div>

                        <p className="text-sm text-muted-foreground font-medium mb-4">
                          {doctor.qualification}
                        </p>

                        {/* Languages */}
                        <div className="mb-4">
                          <p className="text-xs text-muted-foreground mb-2">
                            Languages:
                          </p>
                          <div className="flex flex-wrap gap-1 justify-center lg:justify-start">
                            {doctor.languages.map((language, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {language}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Consultation Hours */}
                        <div className="bg-muted/50 rounded-lg p-3 mb-4">
                          <div className="flex items-center justify-center lg:justify-start text-sm">
                            <Clock className="h-4 w-4 mr-2 text-hospital-secondary" />
                            <span className="text-muted-foreground">
                              Consultation:{" "}
                            </span>
                            <span className="font-medium text-foreground ml-1">
                              {doctor.consultation}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                          <Button
                            className="w-full bg-hospital-primary hover:bg-hospital-primary/90 text-white"
                            asChild
                          >
                            <Link href="/contact">
                              <Phone className="h-4 w-4 mr-2" />
                              Contact Information
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full border-hospital-secondary text-hospital-secondary hover:bg-hospital-secondary hover:text-white"
                            asChild
                          >
                            <Link
                              href={
                                doctor.name === "Dr. Varinder Sagar"
                                  ? "/doctors/dr-varinder-sagar"
                                  : "/doctors/dr-malti-sagar"
                              }
                            >
                              <Calendar className="h-4 w-4 mr-2" />
                              View Profile
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Doctor Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Heart className="h-5 w-5 mr-2 text-hospital-primary" />
                          About Doctor
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {doctor.description}
                        </p>
                      </div>

                      {/* Education */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-hospital-primary" />
                          Education & Qualifications
                        </h4>
                        <ul className="space-y-2">
                          {doctor.education.map((edu, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <div className="h-2 w-2 bg-hospital-primary rounded-full mt-2"></div>
                              <span className="text-muted-foreground text-sm">
                                {edu}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specializations */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Stethoscope className="h-5 w-5 mr-2 text-hospital-primary" />
                          Specializations
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {doctor.specializations.map((spec, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <div className="h-2 w-2 bg-hospital-secondary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">
                                {spec}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-hospital-primary" />
                          Key Achievements
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
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-hospital-primary to-hospital-secondary border-0">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-white mr-3" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Ready to Schedule Your Visit?
                  </h3>
                </div>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Book an appointment with our expert doctors for personalized
                  healthcare. Our team is committed to providing you with the
                  best medical care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    <Phone className="h-4 w-4 mr-2" />
                    Call +91 98881 06555
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-hospital-primary"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Online
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
