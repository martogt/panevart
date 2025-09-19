import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Grid, List } from 'lucide-react';
import ArtworkCard from './ArtworkCard';
import AuthorCard from './AuthorCard';

// Import images
import AuthorImage1 from '@assets/generated_images/Contemporary_artist_portrait_3cd1e1cc.png';
import AuthorImage2 from '@assets/generated_images/Classical_painter_portrait_3839224d.png';
import ArtworkImage1 from '@assets/generated_images/Abstract_modern_painting_0be10114.png';
import ArtworkImage2 from '@assets/generated_images/Classical_landscape_painting_f72d970e.png';
import ArtworkImage3 from '@assets/generated_images/Modern_digital_artwork_d47d91c7.png';

type ViewMode = 'grid' | 'list';
type FilterBy = 'all' | 'artworks' | 'authors';

export default function ArtGallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [filterBy, setFilterBy] = useState<FilterBy>('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // todo: remove mock functionality
  const authors = [
    {
      id: '1',
      name: 'Мария Петрова',
      bio: 'Съвременна художничка, специализираща в абстрактно изкуство и модерни техники на рисуване.',
      avatar: AuthorImage1,
      artworksCount: 24,
      followersCount: 1205,
      categories: ['Абстрактно', 'Модерно', 'Портрети'],
      isFollowing: false
    },
    {
      id: '2',
      name: 'Георги Димитров',
      bio: 'Класически художник с фокус върху пейзажи и традиционни техники на рисуване.',
      avatar: AuthorImage2,
      artworksCount: 18,
      followersCount: 892,
      categories: ['Пейзажи', 'Класическо', 'Реализъм'],
      isFollowing: true
    }
  ];

  // todo: remove mock functionality
  const artworks = [
    {
      id: '1',
      title: 'Абстрактни форми',
      artist: 'Мария Петрова',
      image: ArtworkImage1,
      category: 'Абстрактно',
      price: 1200,
      rating: 5,
      reviewsCount: 24,
      isLiked: false,
      dimensions: '80x60 см',
      year: 2024
    },
    {
      id: '2',
      title: 'Планински пейзаж',
      artist: 'Георги Димитров',
      image: ArtworkImage2,
      category: 'Пейзажи',
      price: 850,
      rating: 4,
      reviewsCount: 16,
      isLiked: true,
      dimensions: '100x70 см',
      year: 2023
    },
    {
      id: '3',
      title: 'Дигитално изкуство',
      artist: 'Мария Петрова',
      image: ArtworkImage3,
      category: 'Модерно',
      price: 950,
      rating: 5,
      reviewsCount: 31,
      isLiked: false,
      dimensions: '60x60 см',
      year: 2024
    }
  ];

  const categories = ['all', 'Абстрактно', 'Пейзажи', 'Модерно', 'Класическо', 'Портрети', 'Реализъм'];

  const filteredAuthors = authors.filter(author => 
    author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    author.bio.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArtworks = artworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || artwork.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-7xl mx-auto p-6" data-testid="art-gallery">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          Художествена галерия
        </h1>
        <p className="text-lg text-muted-foreground">
          Открийте невероятни произведения на изкуството от талантливи автори
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Търсене на произведения или автори..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2">
              <Select value={filterBy} onValueChange={(value: FilterBy) => setFilterBy(value)}>
                <SelectTrigger className="w-40" data-testid="select-filter-by">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Филтър" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Всички</SelectItem>
                  <SelectItem value="artworks">Произведения</SelectItem>
                  <SelectItem value="authors">Автори</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40" data-testid="select-category">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'Всички категории' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex space-x-1 border border-border rounded-md p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className="h-8 w-8"
                  data-testid="button-view-grid"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className="h-8 w-8"
                  data-testid="button-view-list"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-8">
        {/* Authors Section */}
        {(filterBy === 'all' || filterBy === 'authors') && filteredAuthors.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Автори</h2>
              <Badge variant="secondary" data-testid="badge-authors-count">
                {filteredAuthors.length} {filteredAuthors.length === 1 ? 'автор' : 'автора'}
              </Badge>
            </div>
            
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredAuthors.map(author => (
                <AuthorCard key={author.id} author={author} />
              ))}
            </div>
          </section>
        )}

        {/* Artworks Section */}
        {(filterBy === 'all' || filterBy === 'artworks') && filteredArtworks.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Произведения</h2>
              <Badge variant="secondary" data-testid="badge-artworks-count">
                {filteredArtworks.length} {filteredArtworks.length === 1 ? 'произведение' : 'произведения'}
              </Badge>
            </div>
            
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 lg:grid-cols-2'
            }`}>
              {filteredArtworks.map(artwork => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {((filterBy === 'all' && filteredAuthors.length === 0 && filteredArtworks.length === 0) ||
          (filterBy === 'authors' && filteredAuthors.length === 0) ||
          (filterBy === 'artworks' && filteredArtworks.length === 0)) && (
          <Card>
            <CardContent className="p-12 text-center">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Няма намерени резултати
              </h3>
              <p className="text-muted-foreground">
                Опитайте с различни ключови думи или филтри
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}