import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, Share2, Star } from 'lucide-react';

interface Artwork {
  id: string;
  title: string;
  artist: string;
  image: string;
  category: string;
  price?: number;
  rating: number;
  reviewsCount: number;
  isLiked?: boolean;
  dimensions: string;
  year: number;
}

interface ArtworkCardProps {
  artwork: Artwork;
  onLike?: (artworkId: string) => void;
  onView?: (artworkId: string) => void;
  onShare?: (artworkId: string) => void;
  onPurchase?: (artworkId: string) => void;
}

export default function ArtworkCard({ artwork, onLike, onView, onShare, onPurchase }: ArtworkCardProps) {
  const [isLiked, setIsLiked] = useState(artwork.isLiked || false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(artwork.id);
    console.log(`${isLiked ? 'Unlike' : 'Like'} artwork: ${artwork.title}`);
  };

  const handleView = () => {
    onView?.(artwork.id);
    console.log(`View artwork: ${artwork.title}`);
  };

  const handleShare = () => {
    onShare?.(artwork.id);
    console.log(`Share artwork: ${artwork.title}`);
  };

  const handlePurchase = () => {
    onPurchase?.(artwork.id);
    console.log(`Purchase artwork: ${artwork.title}`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <Card 
      className="w-full max-w-sm hover-elevate transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-artwork-${artwork.id}`}
    >
      <div className="relative">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        
        {/* Overlay with actions - visible on hover */}
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm rounded-t-lg transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } flex items-center justify-center space-x-2`}>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleView}
            className="bg-white/90 hover:bg-white"
            data-testid={`button-view-artwork-${artwork.id}`}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleShare}
            className="bg-white/90 hover:bg-white"
            data-testid={`button-share-artwork-${artwork.id}`}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Like button - always visible */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/90 hover:bg-white"
          onClick={handleLike}
          data-testid={`button-like-artwork-${artwork.id}`}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
        </Button>

        {/* Category badge */}
        <Badge 
          variant="secondary" 
          className="absolute top-2 left-2 bg-white/90"
          data-testid={`badge-category-${artwork.id}`}
        >
          {artwork.category}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-1" data-testid={`text-artwork-title-${artwork.id}`}>
          {artwork.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          от {artwork.artist}
        </p>
        
        {/* Rating */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-1">
            {renderStars(artwork.rating)}
          </div>
          <span className="text-xs text-muted-foreground">
            ({artwork.reviewsCount} отзива)
          </span>
        </div>

        {/* Details */}
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{artwork.dimensions}</span>
          <span>{artwork.year}г.</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0 px-4 pb-4">
        <div className="flex items-center justify-between w-full">
          {artwork.price && (
            <div className="font-semibold text-lg text-foreground">
              {artwork.price.toLocaleString('bg-BG')} лв.
            </div>
          )}
          {artwork.price && (
            <Button
              variant="default"
              size="sm"
              onClick={handlePurchase}
              data-testid={`button-purchase-${artwork.id}`}
            >
              Купи
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}