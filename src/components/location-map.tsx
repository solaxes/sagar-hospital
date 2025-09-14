"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Navigation,
  Clock,
  Car,
  Phone,
  Mail,
  ExternalLink,
  Route,
} from "lucide-react";

const locationInfo = {
  address: "Sagar Multispeciality Hospital, Jalandhar, Punjab, India",
  coordinates: {
    lat: 31.326,
    lng: 75.5762,
  },
  phone: "+91 98881 06555",
  email: "info@sagarhospital.com",
};

const directions = [
  {
    from: "Jalandhar Railway Station",
    distance: "3.2 km",
    time: "8 minutes",
    icon: Route,
  },
  {
    from: "Jalandhar Bus Stand",
    distance: "2.8 km",
    time: "6 minutes",
    icon: Route,
  },
  {
    from: "Jalandhar Airport",
    distance: "15.5 km",
    time: "25 minutes",
    icon: Route,
  },
];

const nearbyLandmarks = [
  "Government Medical College",
  "Jalandhar City Center",
  "Model Town",
  "Cantonment Area",
  "Sports Complex",
];

export function LocationMap() {
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
            Find <span className="text-hospital-primary">Our Location</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in Jalandhar with easy access from all major
            areas. Find directions and parking information here.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-card shadow-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-hospital-primary/10 to-hospital-secondary/10 flex items-center justify-center relative">
                {/* Placeholder for actual map */}
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-hospital-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Sagar Multispeciality Hospital
                    <br />
                    Jalandhar, Punjab, India
                  </p>
                  <Button
                    variant="outline"
                    className="border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </div>

                {/* Map overlay with location pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="h-8 w-8 bg-hospital-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-hospital-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        {locationInfo.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-hospital-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        {locationInfo.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-hospital-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">
                        {locationInfo.email}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Directions */}
            <Card className="border-0 bg-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-10 w-10 bg-hospital-primary/10 rounded-full flex items-center justify-center">
                    <Navigation className="h-5 w-5 text-hospital-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Directions
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Distance from major locations
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {directions.map((direction) => (
                    <div
                      key={direction.from}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <direction.icon className="h-5 w-5 text-hospital-secondary" />
                        <span className="font-medium text-foreground">
                          {direction.from}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">
                          {direction.distance}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {direction.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-hospital-primary hover:bg-hospital-primary/90 text-white">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-hospital-secondary text-hospital-secondary hover:bg-hospital-secondary hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Parking & Accessibility */}
            <Card className="border-0 bg-gradient-to-br from-hospital-primary/5 to-hospital-secondary/5 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-10 w-10 bg-hospital-secondary/10 rounded-full flex items-center justify-center">
                    <Car className="h-5 w-5 text-hospital-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Parking & Accessibility
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Convenient access for all
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Car className="h-5 w-5 text-hospital-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        Free Parking
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Ample parking space available
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-hospital-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        Wheelchair Accessible
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Full accessibility for all patients
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-hospital-primary" />
                    <div>
                      <p className="font-medium text-foreground">24/7 Access</p>
                      <p className="text-sm text-muted-foreground">
                        Emergency entrance always available
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Landmarks */}
            <Card className="border-0 bg-card shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Nearby Landmarks
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {nearbyLandmarks.map((landmark) => (
                    <div
                      key={landmark}
                      className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg"
                    >
                      <MapPin className="h-4 w-4 text-hospital-secondary" />
                      <span className="text-sm text-foreground">
                        {landmark}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
