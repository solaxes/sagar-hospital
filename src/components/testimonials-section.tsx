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
    text: "Excellent service and care. Dr. Varinder Sagar's expertise in urology helped me recover quickly. The hospital has modern facilities and compassionate staff.",
    treatment: "Urological Surgery",
    date: "2 months ago",
  },
  {
    name: "Priya Sharma",
    location: "Ludhiana",
    rating: 5,
    text: "Dr. Malti Sagar provided exceptional maternity care. The delivery was smooth and the postnatal care was outstanding. Highly recommended for women's health.",
    treatment: "Maternity Care",
    date: "1 month ago",
  },
  {
    name: "Amar Singh",
    location: "Phagwara",
    rating: 5,
    text: "The emergency services saved my life. Quick response time and professional care. The entire team is dedicated and skilled.",
    treatment: "Emergency Care",
    date: "3 weeks ago",
  },
  {
    name: "Sunita Devi",
    location: "Kapurthala",
    rating: 5,
    text: "Clean facilities, modern equipment, and caring staff. The gynecology department provided excellent care throughout my treatment.",
    treatment: "Gynecological Treatment",
    date: "1 week ago",
  },
  {
    name: "Vikram Mehta",
    location: "Nawanshahr",
    rating: 5,
    text: "Professional and compassionate care. The doctors took time to explain everything clearly. The hospital maintains high standards of hygiene and care.",
    treatment: "General Medicine",
    date: "2 weeks ago",
  },
  {
    name: "Kamal Kaur",
    location: "Hoshiarpur",
    rating: 5,
    text: "Best hospital in the region. The maternity ward is well-equipped and the staff is very supportive. Thank you for the excellent care.",
    treatment: "Delivery & Postnatal Care",
    date: "1 month ago",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
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
            What Our <span className="text-hospital-primary">Patients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read the experiences of our patients and discover why they trust
            Sagar Multispeciality Hospital for their healthcare needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
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
                  <div className="flex items-center space-x-4">
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
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Treatment:</span>
                      <span className="font-medium text-foreground">
                        {testimonial.treatment}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-1">
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

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-hospital-primary to-hospital-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Patient Satisfaction
            </h3>
            <p className="text-white/80 mb-8">
              Our commitment to excellence is reflected in our patient feedback
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  98%
                </div>
                <div className="text-white/80 text-sm">
                  Patient Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  4.9/5
                </div>
                <div className="text-white/80 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  95%
                </div>
                <div className="text-white/80 text-sm">Would Recommend</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  100%
                </div>
                <div className="text-white/80 text-sm">Care Quality</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
