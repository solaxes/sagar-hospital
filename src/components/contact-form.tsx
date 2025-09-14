"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Clock, Phone, Mail } from "lucide-react";

const formFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What is this about?",
    required: true,
  },
  {
    name: "department",
    label: "Department",
    type: "select",
    options: [
      "General Inquiry",
      "Urology - Dr. Varinder Sagar",
      "Gynaecology - Dr. Malti Sagar",
      "Emergency Services",
      "Department Information",
      "Insurance & Billing",
      "Other",
    ],
    required: true,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Please describe your inquiry or concern...",
    required: true,
    rows: 4,
  },
];

const responseTimes = [
  {
    method: "Emergency",
    time: "Immediate",
    icon: Phone,
    color: "text-red-500",
  },
  {
    method: "Phone Call",
    time: "Within 1 hour",
    icon: Phone,
    color: "text-hospital-primary",
  },
  {
    method: "Email",
    time: "Within 24 hours",
    icon: Mail,
    color: "text-hospital-secondary",
  },
  {
    method: "WhatsApp",
    time: "Within 2 hours",
    icon: MessageCircle,
    color: "text-green-500",
  },
];

export function ContactForm() {
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
            Send Us a <span className="text-hospital-primary">Message</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or need to schedule an appointment? Fill out the
            form below and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-10 w-10 bg-hospital-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-hospital-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Contact Form
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <form className="space-y-6">
                  {formFields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {field.label}
                        {field.required && (
                          <span className="text-hospital-primary ml-1">*</span>
                        )}
                      </label>
                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          required={field.required}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-hospital-primary focus:border-transparent"
                        >
                          <option value="">Select {field.label}</option>
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          rows={field.rows || 3}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-hospital-primary focus:border-transparent resize-none"
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-hospital-primary focus:border-transparent"
                        />
                      )}
                    </div>
                  ))}

                  <Button
                    type="submit"
                    className="w-full bg-hospital-primary hover:bg-hospital-primary/90 text-white"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Response Times & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Response Times */}
            <Card className="border-0 bg-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-10 w-10 bg-hospital-secondary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-hospital-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Response Times
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      How quickly we respond
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {responseTimes.map((item) => (
                    <div
                      key={item.method}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                        <span className="font-medium text-foreground">
                          {item.method}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {item.time}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="border-0 bg-gradient-to-r from-red-500 to-red-600 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center text-white">
                  <Phone className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Medical Emergency?</h3>
                  <p className="text-white/90 mb-4">
                    Don&apos;t wait for a response. Call our emergency number
                    immediately.
                  </p>
                  <div className="text-2xl font-bold mb-4">+91 98881 06555</div>
                  <Badge variant="secondary" className="bg-white text-red-600">
                    <Clock className="h-3 w-3 mr-1" />
                    24/7 Available
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="border-0 bg-gradient-to-br from-hospital-primary/5 to-hospital-secondary/5 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Additional Information
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• All fields marked with * are required</p>
                  <p>
                    • We respect your privacy and keep all information
                    confidential
                  </p>
                  <p>
                    • For urgent medical concerns, please call our emergency
                    number
                  </p>
                  <p>
                    • We&apos;ll confirm your appointment via phone or email
                  </p>
                  <p>
                    • Insurance and payment information can be discussed during
                    your visit
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
