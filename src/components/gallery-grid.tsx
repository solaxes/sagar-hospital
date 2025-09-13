"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  MapPin,
  Users,
  Shield,
  Heart,
  Stethoscope,
} from "lucide-react";

const galleryCategories = [
  {
    id: "all",
    name: "All Photos",
    icon: Camera,
    count: 50,
  },
  {
    id: "patient-rooms",
    name: "Patient Rooms",
    icon: Heart,
    count: 12,
  },
  {
    id: "medical-equipment",
    name: "Medical Equipment",
    icon: Shield,
    count: 15,
  },
  {
    id: "common-areas",
    name: "Common Areas",
    icon: Users,
    count: 10,
  },
  {
    id: "departments",
    name: "Departments",
    icon: Stethoscope,
    count: 13,
  },
];

const galleryImages = [
  {
    id: 1,
    src: "/api/placeholder/400/300",
    title: "Modern Patient Room",
    category: "patient-rooms",
    description:
      "Comfortable and well-equipped patient room with modern amenities",
  },
  {
    id: 2,
    src: "/api/placeholder/400/300",
    title: "Advanced CT Scanner",
    category: "medical-equipment",
    description: "State-of-the-art diagnostic imaging equipment",
  },
  {
    id: 3,
    src: "/api/placeholder/400/300",
    title: "Hospital Reception",
    category: "common-areas",
    description: "Welcoming reception area for patients and visitors",
  },
  {
    id: 4,
    src: "/api/placeholder/400/300",
    title: "Urology Department",
    category: "departments",
    description: "Specialized urology department with modern facilities",
  },
  {
    id: 5,
    src: "/api/placeholder/400/300",
    title: "Maternity Ward",
    category: "patient-rooms",
    description: "Comfortable maternity ward with modern delivery facilities",
  },
  {
    id: 6,
    src: "/api/placeholder/400/300",
    title: "Ultrasound Machine",
    category: "medical-equipment",
    description: "Advanced ultrasound equipment for diagnostic imaging",
  },
  {
    id: 7,
    src: "/api/placeholder/400/300",
    title: "Waiting Area",
    category: "common-areas",
    description: "Comfortable waiting area for patients and families",
  },
  {
    id: 8,
    src: "/api/placeholder/400/300",
    title: "Gynaecology Department",
    category: "departments",
    description: "Specialized women's health department",
  },
  {
    id: 9,
    src: "/api/placeholder/400/300",
    title: "ICU Room",
    category: "patient-rooms",
    description: "Intensive Care Unit with advanced monitoring equipment",
  },
  {
    id: 10,
    src: "/api/placeholder/400/300",
    title: "X-Ray Machine",
    category: "medical-equipment",
    description: "Digital X-ray machine for diagnostic imaging",
  },
  {
    id: 11,
    src: "/api/placeholder/400/300",
    title: "Cafeteria",
    category: "common-areas",
    description: "Clean and hygienic cafeteria for patients and visitors",
  },
  {
    id: 12,
    src: "/api/placeholder/400/300",
    title: "Emergency Department",
    category: "departments",
    description: "24/7 emergency services with rapid response team",
  },
];

export function GalleryGrid() {
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
            Hospital <span className="text-hospital-primary">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our modern facilities, state-of-the-art equipment, and
            comfortable patient areas through our photo gallery
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {galleryCategories.map((category) => (
            <Badge
              key={category.id}
              variant="outline"
              className="cursor-pointer hover:bg-hospital-primary hover:text-white transition-colors px-4 py-2"
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
              <span className="ml-2 text-xs bg-muted px-2 py-1 rounded">
                {category.count}
              </span>
            </Badge>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Camera className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Camera className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">View Full Size</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-hospital-primary transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {image.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {
                      galleryCategories.find((cat) => cat.id === image.category)
                        ?.name
                    }
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-hospital-primary hover:bg-hospital-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Load More Photos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
