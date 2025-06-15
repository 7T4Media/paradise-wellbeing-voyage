
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plane, Sun, Calendar } from "lucide-react";

const TravelSection = () => {
  const packages = [
    {
      id: 1,
      title: "Maldives Paradise",
      location: "Maldives",
      duration: "7 Days / 6 Nights",
      price: "$3,499",
      originalPrice: "$4,299",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Overwater bungalow", "Private beach access", "Spa treatments", "Snorkeling tours"],
      itinerary: [
        "Day 1: Arrival & Welcome dinner",
        "Day 2-3: Island hopping & water sports",
        "Day 4-5: Spa & relaxation",
        "Day 6: Cultural excursion",
        "Day 7: Departure"
      ]
    },
    {
      id: 2,
      title: "Bora Bora Bliss",
      location: "French Polynesia",
      duration: "5 Days / 4 Nights",
      price: "$2,899",
      originalPrice: "$3,599",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Luxury resort", "Helicopter tour", "Lagoon excursions", "Sunset dining"],
      itinerary: [
        "Day 1: Arrival & sunset welcome",
        "Day 2: Helicopter island tour",
        "Day 3: Lagoon safari & snorkeling",
        "Day 4: Mount Otemanu hike",
        "Day 5: Departure"
      ]
    },
    {
      id: 3,
      title: "Hawaiian Dreams",
      location: "Maui, Hawaii",
      duration: "6 Days / 5 Nights",
      price: "$1,999",
      originalPrice: "$2,499",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Volcano tour", "Luau experience", "Snorkeling at Molokini", "Road to Hana"],
      itinerary: [
        "Day 1: Arrival & beach relaxation",
        "Day 2: Haleakala sunrise & Upcountry",
        "Day 3: Road to Hana adventure",
        "Day 4: Molokini snorkeling",
        "Day 5: Volcano National Park",
        "Day 6: Departure"
      ]
    }
  ];

  return (
    <div id="travel" className="space-y-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-dancing text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          🏝️ Island Paradise Getaways
        </h2>
        <p className="text-xl text-tropical-sand max-w-3xl mx-auto">
          Escape to pristine tropical destinations where crystal-clear waters meet endless blue skies. 
          Your perfect island adventure awaits.
        </p>
      </div>

      {/* Featured Packages */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="bamboo-border overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="relative">
              <img 
                src={pkg.image} 
                alt={pkg.title}
                className="w-full h-56 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-tropical-sunset text-white">
                Save ${parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}
              </Badge>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-sm font-semibold text-tropical-ocean">⭐ {pkg.rating}</span>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="font-dancing text-2xl text-tropical-ocean">
                {pkg.title}
              </CardTitle>
              <CardDescription className="flex items-center text-tropical-teal">
                <MapPin className="w-4 h-4 mr-1" />
                {pkg.location} • {pkg.duration}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-tropical-sunset">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {pkg.originalPrice}
                  </span>
                </div>
                <Badge variant="outline" className="border-tropical-teal text-tropical-teal">
                  <Calendar className="w-3 h-3 mr-1" />
                  {pkg.duration}
                </Badge>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-tropical-ocean">Package Highlights:</h4>
                <ul className="space-y-1">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-sm text-tropical-teal">
                      <Sun className="w-3 h-3 mr-2 text-yellow-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-tropical-ocean">Itinerary:</h4>
                <div className="bg-tropical-sand/20 rounded-lg p-3 max-h-32 overflow-y-auto">
                  <ul className="space-y-1">
                    {pkg.itinerary.map((day, index) => (
                      <li key={index} className="text-xs text-tropical-teal">
                        {day}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button className="tiki-button flex-1">
                  <Plane className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
                <Button variant="outline" className="border-tropical-bamboo text-tropical-ocean hover:bg-tropical-sand">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Travel Services */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { icon: "✈️", title: "Flight Booking", desc: "Best deals on international flights" },
          { icon: "🏨", title: "Luxury Resorts", desc: "Hand-picked premium accommodations" },
          { icon: "🚗", title: "Transportation", desc: "Airport transfers & local transport" },
          { icon: "🎯", title: "Custom Tours", desc: "Personalized island experiences" }
        ].map((service, index) => (
          <Card key={index} className="bamboo-border text-center p-6 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="font-dancing text-xl font-bold text-tropical-ocean mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-tropical-teal">
              {service.desc}
            </p>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-ocean-gradient p-8 rounded-2xl">
        <h3 className="font-dancing text-3xl font-bold text-white mb-4">
          Ready for Your Island Adventure?
        </h3>
        <p className="text-tropical-palm mb-6 max-w-2xl mx-auto">
          Let our travel experts create the perfect tropical getaway tailored just for you. 
          From luxury resorts to adventure excursions, we handle every detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-tropical-coral hover:bg-tropical-sunset text-white font-semibold px-8 py-3">
            Get Custom Quote
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tropical-ocean">
            View All Packages
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TravelSection;
