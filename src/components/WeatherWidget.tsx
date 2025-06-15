
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Cloud, CloudRain, Wind, Thermometer, Eye } from "lucide-react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    location: "Maldives",
    temperature: 28,
    condition: "Sunny",
    humidity: 75,
    windSpeed: 12,
    visibility: 10,
    forecast: [
      { day: "Today", temp: 28, condition: "sunny", icon: Sun },
      { day: "Tomorrow", temp: 26, condition: "cloudy", icon: Cloud },
      { day: "Wed", temp: 24, condition: "rainy", icon: CloudRain },
      { day: "Thu", temp: 27, condition: "sunny", icon: Sun },
      { day: "Fri", temp: 29, condition: "sunny", icon: Sun }
    ]
  });

  const [selectedLocation, setSelectedLocation] = useState("Maldives");
  
  const destinations = [
    { name: "Maldives", temp: 28, condition: "Sunny" },
    { name: "Bora Bora", temp: 26, condition: "Partly Cloudy" },
    { name: "Maui", temp: 24, condition: "Light Rain" },
    { name: "Seychelles", temp: 27, condition: "Sunny" },
    { name: "Fiji", temp: 25, condition: "Cloudy" }
  ];

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    const dest = destinations.find(d => d.name === location);
    if (dest) {
      setWeather(prev => ({
        ...prev,
        location: dest.name,
        temperature: dest.temp,
        condition: dest.condition
      }));
    }
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'partly cloudy':
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'light rain':
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  return (
    <Card className="bamboo-border">
      <CardHeader>
        <CardTitle className="font-dancing text-2xl text-tropical-ocean flex items-center">
          🌤️ Weather Forecast
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Location Selector */}
        <div className="flex flex-wrap gap-2">
          {destinations.map((dest) => (
            <Button
              key={dest.name}
              variant={selectedLocation === dest.name ? "default" : "outline"}
              size="sm"
              className={selectedLocation === dest.name ? "tiki-button" : "border-tropical-teal text-tropical-teal hover:bg-tropical-sand"}
              onClick={() => handleLocationChange(dest.name)}
            >
              {dest.name}
            </Button>
          ))}
        </div>

        {/* Current Weather */}
        <div className="bg-gradient-to-br from-tropical-palm/20 to-tropical-teal/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-tropical-ocean">{weather.location}</h3>
              <p className="text-3xl font-bold text-tropical-sunset">{weather.temperature}°C</p>
              <p className="text-tropical-teal">{weather.condition}</p>
            </div>
            {getWeatherIcon(weather.condition)}
          </div>

          {/* Weather Details */}
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <Wind className="w-4 h-4 mr-1 text-tropical-teal" />
              <span>{weather.windSpeed} km/h</span>
            </div>
            <div className="flex items-center">
              <Thermometer className="w-4 h-4 mr-1 text-tropical-teal" />
              <span>{weather.humidity}% humid</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1 text-tropical-teal" />
              <span>{weather.visibility} km</span>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="space-y-2">
          <h4 className="font-semibold text-tropical-ocean">5-Day Forecast</h4>
          <div className="space-y-2">
            {weather.forecast.map((day, index) => {
              const IconComponent = day.icon;
              return (
                <div key={index} className="flex items-center justify-between p-2 bg-tropical-sand/20 rounded">
                  <span className="text-sm font-medium">{day.day}</span>
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-4 h-4 text-tropical-teal" />
                    <span className="text-sm font-semibold text-tropical-sunset">{day.temp}°C</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flight Weather Alert */}
        <div className="bg-tropical-coral/10 border border-tropical-coral/20 rounded-lg p-3">
          <h4 className="font-semibold text-tropical-coral text-sm mb-1">Flight Weather Alert</h4>
          <p className="text-xs text-tropical-teal">
            Perfect flying conditions to {weather.location}. Clear skies expected for the next 48 hours.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
