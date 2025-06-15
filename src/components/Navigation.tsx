
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tropical-ocean/90 backdrop-blur-sm border-b-4 border-tropical-bamboo">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🌴</span>
            <div>
              <h1 className="font-dancing text-2xl text-white font-bold">Island Paradise</h1>
              <p className="text-tropical-sand text-xs">Wellness & Travel</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-tropical-coral transition-colors font-medium">
              Home
            </a>
            <a href="#wellness" className="text-white hover:text-tropical-coral transition-colors font-medium">
              Wellness
            </a>
            <a href="#travel" className="text-white hover:text-tropical-coral transition-colors font-medium">
              Travel
            </a>
            <a href="#weather" className="text-white hover:text-tropical-coral transition-colors font-medium">
              Weather
            </a>
            <Button className="tiki-button">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-white hover:text-tropical-coral"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-tropical-ocean/95 backdrop-blur-sm border-b-4 border-tropical-bamboo">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#home" className="text-white hover:text-tropical-coral transition-colors font-medium">
                Home
              </a>
              <a href="#wellness" className="text-white hover:text-tropical-coral transition-colors font-medium">
                Wellness
              </a>
              <a href="#travel" className="text-white hover:text-tropical-coral transition-colors font-medium">
                Travel
              </a>
              <a href="#weather" className="text-white hover:text-tropical-coral transition-colors font-medium">
                Weather
              </a>
              <Button className="tiki-button w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
