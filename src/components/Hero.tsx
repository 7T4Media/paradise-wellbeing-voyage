
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="mb-8 animate-fade-in">
          <span className="text-6xl md:text-8xl mb-4 block animate-wave">🌺</span>
          <h1 className="font-dancing text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            Welcome to Paradise
          </h1>
          <p className="text-xl md:text-2xl text-tropical-sand font-medium mb-8 drop-shadow-lg">
            Discover natural wellness & unforgettable island adventures
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button 
            size="lg" 
            className="tiki-button text-lg px-8 py-4 animate-float"
            onClick={() => document.getElementById('wellness')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🌿 Explore Wellness
          </Button>
          <Button 
            size="lg" 
            className="tiki-button text-lg px-8 py-4 animate-float"
            style={{ animationDelay: '0.5s' }}
            onClick={() => document.getElementById('travel')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🏖️ Plan Your Escape
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="text-white mx-auto" size={32} />
          <p className="text-tropical-sand text-sm mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
