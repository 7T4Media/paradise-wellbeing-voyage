
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, SkipBack, SkipForward, Shuffle, Repeat } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState([0]);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);

  const tracks = [
    {
      id: 1,
      title: "Island Breeze",
      artist: "Tropical Sounds",
      duration: "3:24",
      cover: "🏖️"
    },
    {
      id: 2,
      title: "Tiki Bar Sunset",
      artist: "Paradise Rhythms",
      duration: "4:12",
      cover: "🌅"
    },
    {
      id: 3,
      title: "Ocean Waves",
      artist: "Nature's Call",
      duration: "5:08",
      cover: "🌊"
    },
    {
      id: 4,
      title: "Coconut Grove",
      artist: "Island Vibes",
      duration: "3:56",
      cover: "🥥"
    },
    {
      id: 5,
      title: "Bamboo Serenade",
      artist: "Tiki Lounge",
      duration: "4:33",
      cover: "🎋"
    }
  ];

  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const previousTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const toggleRepeat = () => {
    setIsRepeating(!isRepeating);
  };

  // Simulate progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev[0] + 1;
          return newProgress >= 100 ? [0] : [newProgress];
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <Card className="bamboo-border">
      <CardHeader>
        <CardTitle className="font-dancing text-2xl text-tropical-ocean flex items-center">
          🎵 Island Vibes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Track Display */}
        <div className="bg-gradient-to-br from-tropical-sunset/20 to-tropical-coral/20 rounded-lg p-4 text-center">
          <div className="text-4xl mb-2">{tracks[currentTrack].cover}</div>
          <h3 className="font-semibold text-tropical-ocean">{tracks[currentTrack].title}</h3>
          <p className="text-sm text-tropical-teal">{tracks[currentTrack].artist}</p>
          <p className="text-xs text-tropical-teal mt-1">{tracks[currentTrack].duration}</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-tropical-teal">
            <span>{Math.floor(progress[0] * 0.05)}:{String(Math.floor((progress[0] * 0.05 % 1) * 60)).padStart(2, '0')}</span>
            <span>{tracks[currentTrack].duration}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleShuffle}
            className={`${isShuffled ? 'text-tropical-sunset' : 'text-tropical-teal'} hover:text-tropical-coral`}
          >
            <Shuffle className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={previousTrack}
            className="text-tropical-teal hover:text-tropical-coral"
          >
            <SkipBack className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={togglePlayPause}
            className="tiki-button w-12 h-12 rounded-full p-0"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextTrack}
            className="text-tropical-teal hover:text-tropical-coral"
          >
            <SkipForward className="w-5 h-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleRepeat}
            className={`${isRepeating ? 'text-tropical-sunset' : 'text-tropical-teal'} hover:text-tropical-coral`}
          >
            <Repeat className="w-4 h-4" />
          </Button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-3">
          <Volume2 className="w-4 h-4 text-tropical-teal" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-xs text-tropical-teal w-8">{volume[0]}%</span>
        </div>

        {/* Playlist */}
        <div className="space-y-2">
          <h4 className="font-semibold text-tropical-ocean text-sm">Playlist</h4>
          <div className="bg-tropical-sand/10 rounded-lg p-2 max-h-32 overflow-y-auto">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                  index === currentTrack 
                    ? 'bg-tropical-sunset/20 text-tropical-sunset' 
                    : 'hover:bg-tropical-sand/20 text-tropical-teal'
                }`}
                onClick={() => setCurrentTrack(index)}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{track.cover}</span>
                  <div>
                    <p className="text-xs font-medium">{track.title}</p>
                    <p className="text-xs opacity-75">{track.artist}</p>
                  </div>
                </div>
                <span className="text-xs">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Now Playing Status */}
        <div className="bg-tropical-ocean/10 border border-tropical-ocean/20 rounded-lg p-3 text-center">
          <p className="text-xs text-tropical-teal">
            {isPlaying ? '🎶 Now playing tropical island music' : '🎵 Paused - Ready for island vibes'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MusicPlayer;
