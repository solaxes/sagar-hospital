"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, Award } from "lucide-react";

const leaders = [
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
    ],
    philosophy:
      "Every patient deserves personalized, compassionate care with the latest medical advancements.",
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
    ],
    philosophy:
      "Empowering women with quality healthcare and supporting them through every stage of life.",
  },
];

export function LeadershipTeam() {
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
            Our <span className="text-hospital-primary">Leadership Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary leaders who guide our hospital with expertise,
            compassion, and dedication to excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    {/* Leader Image */}
                    <div className="flex-shrink-0">
                      <Avatar className="w-32 h-32 border-4 border-hospital-primary/20">
                        <AvatarFallback className="text-2xl font-bold bg-hospital-primary/10 text-hospital-primary">
                          {leader.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Leader Info */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {leader.name}
                          </h3>
                          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                            <Badge
                              variant="secondary"
                              className="bg-hospital-primary/10 text-hospital-primary"
                            >
                              {leader.position}
                            </Badge>
                            <Badge variant="outline">{leader.experience}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground font-medium">
                            {leader.qualification}
                          </p>
                        </div>

                        <p className="text-muted-foreground">
                          {leader.description}
                        </p>

                        {/* Philosophy */}
                        <div className="bg-muted/50 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <Heart className="h-5 w-5 text-hospital-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-1">
                                Philosophy
                              </h4>
                              <p className="text-sm text-muted-foreground italic">
                                &ldquo;{leader.philosophy}&rdquo;
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                            <Award className="h-4 w-4 mr-2 text-hospital-primary" />
                            Specializations & Achievements
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {leader.achievements.map((achievement, idx) => (
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
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-hospital-primary to-hospital-secondary rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-white mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Message from Our Directors
            </h3>
          </div>
          <blockquote className="text-white/90 text-lg md:text-xl italic mb-6 max-w-4xl mx-auto">
            &ldquo;We are committed to providing world-class healthcare services
            with compassion and excellence. Our vision is to make quality
            healthcare accessible to everyone in our community, and we work
            tirelessly every day to achieve this goal.&rdquo;
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-white/80">
              <div className="font-semibold">Dr. Varinder Sagar</div>
              <div className="text-sm">Director & Chief Urologist</div>
            </div>
            <div className="text-white/80">
              <div className="font-semibold">Dr. Malti Sagar</div>
              <div className="text-sm">Director & Chief Gynaecologist</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
