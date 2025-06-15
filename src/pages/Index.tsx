
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Pause, Volume2, Sun, Cloud, MapPin, Plane, ShoppingBag, Leaf, Heart, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ArbonneSection from "@/components/ArbonneSection";
import TravelSection from "@/components/TravelSection";
import WeatherWidget from "@/components/WeatherWidget";
import NewsWidget from "@/components/NewsWidget";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-br from-tropical-sand via-tropical-palm to-tropical-teal">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-30"
          poster="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1200&q=80"
        >
          <source src="https://player.vimeo.com/external/368482556.sd.mp4?s=745faaf1180e4c88cd8ab31f31eaaf2fae8f524b&profile_id=164" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-tropical-ocean to-tropical-teal"></div>
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        
        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 space-y-16">
          {/* Widgets Row */}
          <div className="grid md:grid-cols-3 gap-6">
            <WeatherWidget />
            <NewsWidget />
            <MusicPlayer />
          </div>

          {/* Main Sections */}
          <Tabs defaultValue="arbonne" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-tropical-sand/80 backdrop-blur-sm">
              <TabsTrigger 
                value="arbonne" 
                className="data-[state=active]:bg-tiki-gradient data-[state=active]:text-white font-dancing text-lg"
              >
                🌺 Natural Wellness
              </TabsTrigger>
              <TabsTrigger 
                value="travel" 
                className="data-[state=active]:bg-tiki-gradient data-[state=active]:text-white font-dancing text-lg"
              >
                🏝️ Island Getaways
              </TabsTrigger>
            </TabsList>

            <TabsContent value="arbonne">
              <ArbonneSection />
            </TabsContent>

            <TabsContent value="travel">
              <TravelSection />
            </TabsContent>
          </Tabs>
        </main>

        {/* Footer */}
        <footer className="bg-tropical-ocean/90 backdrop-blur-sm text-white py-12 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="font-dancing text-3xl mb-4">🌴 Island Paradise 🌴</h3>
            <p className="text-tropical-palm mb-6">
              Where natural wellness meets tropical adventures
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <Button variant="ghost" className="text-tropical-sand hover:text-white">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="text-tropical-sand hover:text-white">
                Terms of Service
              </Button>
              <Button variant="ghost" className="text-tropical-sand hover:text-white">
                Contact Us
              </Button>
            </div>
            <p className="text-sm text-tropical-sand">
              © 2024 Island Paradise. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
