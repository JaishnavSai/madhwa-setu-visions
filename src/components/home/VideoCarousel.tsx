
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

const VideoCarousel = () => {
  // Mock data - would come from API in production
  const videos: VideoItem[] = [
    {
      id: "1",
      title: "The Ritual of Sakura",
      description: "THE ORIGINAL BESTSELLER",
      videoUrl: "https://player.vimeo.com/video/517958396?background=1",
      thumbnailUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
    },
    {
      id: "2",
      title: "Madhwa Philosophy",
      description: "ANCIENT WISDOM FOR MODERN LIVES",
      videoUrl: "https://player.vimeo.com/video/499210532?background=1",
      thumbnailUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    {
      id: "3",
      title: "Daily Spiritual Practice",
      description: "DEVOTION TO THE DIVINE",
      videoUrl: "https://player.vimeo.com/video/494571180?background=1",
      thumbnailUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    }
  ];

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {videos.map((video) => (
            <CarouselItem key={video.id} className="h-full">
              <div className="relative w-full h-full overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full">
                  <iframe
                    src={video.videoUrl}
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={video.title}
                    loading="lazy"
                  ></iframe>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                  <span className="text-sm uppercase tracking-widest mb-2">{video.description}</span>
                  <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">{video.title}</h2>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    DISCOVER NOW
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-black/30 hover:bg-black/50 text-white border-none" />
        <CarouselNext className="right-4 bg-black/30 hover:bg-black/50 text-white border-none" />
        
        {/* Indicator Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/50'}`} 
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default VideoCarousel;
