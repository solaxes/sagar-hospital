"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Jalandhar",
    rating: 5,
    text: "Dr. Varinder Sagar's expertise in urology is exceptional. His treatment approach is patient-friendly and the results were amazing. Highly recommended!",
    treatment: "Kidney Stone Surgery",
    doctor: "Dr. Varinder Sagar",
    date: "2 months ago",
  },
  {
    name: "Priya Sharma",
    location: "Ludhiana",
    rating: 5,
    text: "Dr. Malti Sagar provided excellent maternity care throughout my pregnancy. Her guidance and support made my delivery experience smooth and comfortable.",
    treatment: "Maternity Care & Delivery",
    doctor: "Dr. Malti Sagar",
    date: "1 month ago",
  },
  {
    name: "Amar Singh",
    location: "Phagwara",
    rating: 5,
    text: "Dr. Varinder Sagar's laparoscopic surgery technique is outstanding. Minimal pain, quick recovery, and excellent care. Thank you doctor!",
    treatment: "Laparoscopic Surgery",
    doctor: "Dr. Varinder Sagar",
    date: "3 weeks ago",
  },
  {
    name: "Sunita Devi",
    location: "Kapurthala",
    rating: 5,
    text: "Dr. Malti Sagar is a wonderful gynecologist. Her approach to women's health is comprehensive and she explains everything clearly.",
    treatment: "Gynecological Treatment",
    doctor: "Dr. Malti Sagar",
    date: "1 week ago",
  },
  {
    name: "Vikram Mehta",
    location: "Nawanshahr",
    rating: 5,
    text: "Both doctors are very professional and caring. The hospital maintains high standards and the medical care is top-notch.",
    treatment: "General Consultation",
    doctor: "Both Doctors",
    date: "2 weeks ago",
  },
  {
    name: "Kamal Kaur",
    location: "Hoshiarpur",
    rating: 5,
    text: "Dr. Malti Sagar's expertise in high-risk pregnancy care is remarkable. She guided me through a complicated pregnancy with great care.",
    treatment: "High-Risk Pregnancy Care",
    doctor: "Dr. Malti Sagar",
    date: "1 month ago",
  },
];

export function DoctorTestimonials() {
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
            What Our <span className="text-hospital-primary">Patients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read the experiences of our patients and discover why they trust our
            doctors for their healthcare needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-card">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="h-8 w-8 text-hospital-primary/30" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Patient Info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-hospital-primary/10 text-hospital-primary font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Treatment Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Doctor:</span>
                      <span className="font-medium text-foreground">
                        {testimonial.doctor}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Treatment:</span>
                      <span className="font-medium text-foreground">
                        {testimonial.treatment}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium text-foreground">
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Doctor Ratings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-hospital-primary to-hospital-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Doctor Ratings & Feedback
            </h3>
            <p className="text-white/80">
              Patient satisfaction ratings for our doctors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-4">
                Dr. Varinder Sagar
              </h4>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-white/80 text-sm mb-2">4.9/5 Rating</div>
              <div className="text-white/80 text-sm">Urology Specialist</div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-4">
                Dr. Malti Sagar
              </h4>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-white/80 text-sm mb-2">4.9/5 Rating</div>
              <div className="text-white/80 text-sm">
                Gynaecology & Obstetrics
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="text-white/80 mb-4">
              Overall Patient Satisfaction
            </div>
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-white/80 text-sm">
              Would recommend our doctors
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
