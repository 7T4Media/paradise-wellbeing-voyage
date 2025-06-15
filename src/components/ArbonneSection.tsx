
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Star, ShoppingBag } from "lucide-react";

const ArbonneSection = () => {
  const products = [
    {
      id: 1,
      name: "RE9 Advanced Set",
      category: "Anti-Aging",
      price: "$449",
      description: "Complete anti-aging skincare system with botanical ingredients",
      benefits: ["Reduces fine lines", "Improves skin texture", "Natural botanicals"],
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Fizz Sticks",
      category: "Energy & Wellness",
      price: "$55",
      description: "Natural energy boost with botanicals and caffeine from guarana",
      benefits: ["Clean energy", "Mental focus", "Antioxidant support"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Protein Shake Mix",
      category: "Nutrition",
      price: "$89",
      description: "Plant-based protein with superfoods for complete nutrition",
      benefits: ["20g plant protein", "Digestive support", "Sustained energy"],
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Skincare",
      description: "Botanical beauty solutions",
      color: "bg-green-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wellness",
      description: "Health & vitality products",
      color: "bg-red-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Nutrition",
      description: "Premium supplements",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div id="wellness" className="space-y-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-dancing text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          🌿 Natural Wellness Paradise
        </h2>
        <p className="text-xl text-tropical-sand max-w-3xl mx-auto">
          Discover Arbonne's pure, safe, and beneficial products crafted with botanical ingredients 
          for a naturally beautiful lifestyle in paradise.
        </p>
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {categories.map((category, index) => (
          <Card key={index} className="bamboo-border hover:shadow-xl transition-all duration-300 animate-fade-in">
            <CardContent className="text-center p-8">
              <div className={`${category.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {category.icon}
              </div>
              <h3 className="font-dancing text-2xl font-bold text-tropical-ocean mb-2">
                {category.title}
              </h3>
              <p className="text-tropical-teal">
                {category.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Products */}
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="bamboo-border overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-tropical-coral text-white">
                {product.category}
              </Badge>
            </div>
            
            <CardHeader>
              <CardTitle className="font-dancing text-2xl text-tropical-ocean">
                {product.name}
              </CardTitle>
              <CardDescription className="text-tropical-teal">
                {product.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-tropical-sunset">
                  {product.price}
                </span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-tropical-ocean">Key Benefits:</h4>
                <ul className="space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-tropical-teal">
                      <Leaf className="w-3 h-3 mr-2 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-2">
                <Button className="tiki-button flex-1">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="border-tropical-bamboo text-tropical-ocean hover:bg-tropical-sand">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-tiki-gradient p-8 rounded-2xl">
        <h3 className="font-dancing text-3xl font-bold text-white mb-4">
          Ready to Transform Your Wellness Journey?
        </h3>
        <p className="text-tropical-sand mb-6 max-w-2xl mx-auto">
          Join thousands who have discovered the power of pure, botanical-based wellness products. 
          Start your transformation today with our starter sets.
        </p>
        <Button size="lg" className="bg-white text-tropical-ocean hover:bg-tropical-sand font-semibold px-8 py-3">
          Shop Starter Sets
        </Button>
      </div>
    </div>
  );
};

export default ArbonneSection;
