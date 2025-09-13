"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DoctorImagePlaceholder } from "@/components/doctor-image-placeholder";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Stethoscope,
  Users,
  BookOpen,
  Star,
  ArrowLeft,
  Baby,
} from "lucide-react";
import Link from "next/link";

const achievements = [
  "High-Risk Pregnancy Care Specialist",
  "Minimally Invasive Surgery Expert",
  "Fertility Treatment Specialist",
  "Women's Health Specialist",
  "Laparoscopic Surgery Expert",
  "Prenatal Care Specialist",
];

const specializations = [
  "Pregnancy Care",
  "Delivery Services",
  "Gynecological Surgery",
  "Fertility Treatment",
  "High-Risk Pregnancy",
  "Menopause Management",
  "Family Planning",
  "Laparoscopic Surgery",
];

const education = [
  "MBBS - Government Medical College",
  "MS Obstetrics & Gynaecology - AIIMS Delhi",
  "DNB Obstetrics & Gynaecology - National Board",
  "Fellowship in High-Risk Pregnancy Care",
  "Training in Minimally Invasive Surgery",
];

const languages = ["English", "Hindi", "Punjabi"];

export function DrMaltiSagarProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-hospital-primary/5 via-background to-hospital-secondary/5">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button variant="outline" asChild>
          <Link href="/doctors" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Doctors
          </Link>
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-8 shadow-lg border-0">
              <CardContent className="p-8 text-center">
                <DoctorImagePlaceholder
                  name="Dr. Malti Sagar"
                  specialty="Gynaecologist & Obstetrician"
                  size="lg"
                  className="mx-auto mb-6"
                  showPlaceholder={true}
                />

                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Dr. Malti Sagar
                </h1>
                <Badge
                  variant="secondary"
                  className="bg-hospital-primary/10 text-hospital-primary mb-4"
                >
                  Gynaecologist & Obstetrician
                </Badge>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="h-4 w-4 text-hospital-primary" />
                    <span>12+ Years Experience</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-hospital-primary" />
                    <span>Jalandhar, Punjab</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-hospital-secondary text-hospital-secondary hover:bg-hospital-secondary hover:text-white"
                    asChild
                  >
                    <Link href="/contact">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Information
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Consultation Hours
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Monday - Saturday</p>
                    <p className="font-medium">10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Detailed Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* About Section */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-hospital-primary mr-3" />
                  About Dr. Malti Sagar
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Malti Sagar is a dedicated gynecologist specializing in
                  women's health, high-risk pregnancy care, and advanced
                  gynecological procedures. She has been providing exceptional
                  care to women in the community with compassion and expertise.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  With over 12 years of experience in obstetrics and gynecology,
                  Dr. Sagar has successfully managed thousands of pregnancies
                  and gynecological cases, earning the trust and respect of her
                  patients and peers.
                </p>
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 text-hospital-primary mr-3" />
                  Education & Training
                </h2>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-hospital-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{edu}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specializations Section */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Baby className="h-6 w-6 text-hospital-primary mr-3" />
                  Specializations
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {specializations.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-hospital-secondary rounded-full"></div>
                      <span className="text-muted-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements Section */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="h-6 w-6 text-hospital-primary mr-3" />
                  Achievements & Expertise
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs p-3"
                    >
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages Section */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Users className="h-6 w-6 text-hospital-primary mr-3" />
                  Languages
                </h2>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-hospital-primary/10 text-hospital-primary"
                    >
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
