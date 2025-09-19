import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, Share2 } from 'lucide-react';

interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  artworksCount: number;
  followersCount: number;
  categories: string[];
  isFollowing?: boolean;
}

interface AuthorCardProps {
  author: Author;
  onFollow?: (authorId: string) => void;
  onView?: (authorId: string) => void;
  onShare?: (authorId: string) => void;
}

export default function AuthorCard({ author, onFollow, onView, onShare }: AuthorCardProps) {
  const [isFollowing, setIsFollowing] = useState(author.isFollowing || false);
  const [isLiked, setIsLiked] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    onFollow?.(author.id);
    console.log(`${isFollowing ? 'Unfollow' : 'Follow'} author: ${author.name}`);
  };

  const handleView = () => {
    onView?.(author.id);
    console.log(`View author profile: ${author.name}`);
  };

  const handleShare = () => {
    onShare?.(author.id);
    console.log(`Share author: ${author.name}`);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    console.log(`${isLiked ? 'Unlike' : 'Like'} author: ${author.name}`);
  };

  return (
    <Card className="w-full max-w-sm hover-elevate cursor-pointer" data-testid={`card-author-${author.id}`}>
      <CardHeader className="text-center pb-4">
        <div className="relative mx-auto">
          <img
            src={author.avatar}
            alt={author.name}
            className="h-20 w-20 rounded-full object-cover mx-auto border-2 border-border"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-background border border-border"
            onClick={handleLike}
            data-testid={`button-like-author-${author.id}`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
          </Button>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-foreground" data-testid={`text-author-name-${author.id}`}>
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {author.bio}
          </p>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Stats */}
        <div className="flex justify-center space-x-6 mb-4">
          <div className="text-center">
            <div className="font-semibold text-foreground">{author.artworksCount}</div>
            <div className="text-xs text-muted-foreground">Произведения</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-foreground">{author.followersCount}</div>
            <div className="text-xs text-muted-foreground">Последователи</div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 justify-center">
          {author.categories.map((category, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs"
              data-testid={`badge-category-${index}`}
            >
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4 flex justify-between gap-2">
        <Button
          variant={isFollowing ? "secondary" : "default"}
          size="sm"
          onClick={handleFollow}
          className="flex-1"
          data-testid={`button-follow-${author.id}`}
        >
          {isFollowing ? 'Следван' : 'Следвай'}
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleView}
          data-testid={`button-view-${author.id}`}
        >
          <Eye className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleShare}
          data-testid={`button-share-${author.id}`}
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}