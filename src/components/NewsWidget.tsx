
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Clock, ExternalLink } from "lucide-react";

const NewsWidget = () => {
  const [news] = useState([
    {
      id: 1,
      title: "Maldives Opens New Sustainable Resort with Zero-Waste Policy",
      source: "Travel Weekly",
      time: "2 hours ago",
      category: "Travel",
      summary: "The latest eco-friendly resort features solar power and coral restoration programs.",
      region: "Asia Pacific"
    },
    {
      id: 2,
      title: "Bora Bora Implements New Marine Protection Measures",
      source: "Reuters",
      time: "4 hours ago",
      category: "Environment",
      summary: "French Polynesia announces expanded protected marine areas around popular tourist destinations.",
      region: "Pacific"
    },
    {
      id: 3,
      title: "Hawaii Reports Record Tourism Recovery Post-Pandemic",
      source: "AP News",
      time: "6 hours ago",
      category: "Tourism",
      summary: "Visitor arrivals reach 95% of pre-2020 levels with sustainable tourism initiatives.",
      region: "North America"
    },
    {
      id: 4,
      title: "Seychelles Launches Digital Nomad Visa Program",
      source: "Bloomberg",
      time: "8 hours ago",
      category: "Travel",
      summary: "New 12-month visa allows remote workers to live and work in paradise.",
      region: "Africa"
    },
    {
      id: 5,
      title: "Fiji's Coral Restoration Project Shows Promising Results",
      source: "National Geographic",
      time: "12 hours ago",
      category: "Environment",
      summary: "Marine biologists report 40% increase in coral coverage across restoration sites.",
      region: "Pacific"
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Travel", "Environment", "Tourism"];

  const filteredNews = selectedCategory === "All" 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Travel":
        return "bg-tropical-sunset text-white";
      case "Environment":
        return "bg-green-500 text-white";
      case "Tourism":
        return "bg-tropical-teal text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <Card className="bamboo-border">
      <CardHeader>
        <CardTitle className="font-dancing text-2xl text-tropical-ocean flex items-center">
          🌍 International News
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={selectedCategory === category ? "tiki-button" : "border-tropical-teal text-tropical-teal hover:bg-tropical-sand"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* News Feed */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredNews.map((article) => (
            <div key={article.id} className="border border-tropical-sand rounded-lg p-3 hover:bg-tropical-sand/10 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <Badge className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
                <div className="flex items-center text-xs text-tropical-teal">
                  <Clock className="w-3 h-3 mr-1" />
                  {article.time}
                </div>
              </div>
              
              <h4 className="font-semibold text-sm text-tropical-ocean mb-2 line-clamp-2">
                {article.title}
              </h4>
              
              <p className="text-xs text-tropical-teal mb-2 line-clamp-2">
                {article.summary}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-tropical-teal">
                  <Globe className="w-3 h-3 mr-1" />
                  <span>{article.source} • {article.region}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-tropical-sunset hover:text-tropical-coral">
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* News Summary */}
        <div className="bg-tropical-ocean/10 border border-tropical-ocean/20 rounded-lg p-3">
          <h4 className="font-semibold text-tropical-ocean text-sm mb-1">Today's Highlights</h4>
          <p className="text-xs text-tropical-teal">
            5 travel updates • 3 environmental stories • 2 tourism reports from your favorite destinations.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsWidget;
