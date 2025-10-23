import { BlogPost } from "@/types/blog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface FeaturedCarouselProps {
  posts: BlogPost[];
}

const FeaturedCarousel = ({ posts }: FeaturedCarouselProps) => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-6">Posts em Destaque</h2>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem key={post.id}>
              <Card className="border-primary/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-l-lg"
                  />
                  <div className="flex flex-col justify-center p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="default">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                      </div>
                      <button className="text-primary hover:underline font-medium text-lg">
                        Ler mais →
                      </button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
