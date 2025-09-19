import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { ArrowRight, Star, Users, Image as ImageIcon, Palette } from 'lucide-react';
import ArtworkCard from '@/components/ArtworkCard';
import AuthorCard from '@/components/AuthorCard';

// Import images
import AuthorImage1 from '@assets/generated_images/Contemporary_artist_portrait_3cd1e1cc.png';
import AuthorImage2 from '@assets/generated_images/Classical_painter_portrait_3839224d.png';
import ArtworkImage1 from '@assets/generated_images/Abstract_modern_painting_0be10114.png';
import ArtworkImage2 from '@assets/generated_images/Classical_landscape_painting_f72d970e.png';
import ArtworkImage3 from '@assets/generated_images/Modern_digital_artwork_d47d91c7.png';

export default function Home() {
  // todo: remove mock functionality
  const featuredArtworks = [
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

  // todo: remove mock functionality
  const featuredAuthors = [
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

  const stats = [
    { icon: Users, label: 'Автори', value: '150+' },
    { icon: ImageIcon, label: 'Произведения', value: '1,200+' },
    { icon: Star, label: 'Оценки', value: '4.9/5' },
    { icon: Palette, label: 'Категории', value: '12' }
  ];

  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Открийте изкуството в неговата 
              <span className="text-primary block mt-2">най-чиста форма</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Платформа за художествени творби, която свързва таланливи автори с любители на изкуството. 
              Персонализирайте дизайна и управлявайте съдържанието лесно и интуитивно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild data-testid="button-explore-gallery">
                <Link href="/gallery">
                  Разгледайте галерията
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-view-authors">
                <Link href="/authors">
                  Вижте авторите
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Препоръчано</Badge>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Избрани произведения
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Открийте най-популярните и високо оценени произведения от нашите талантливи автори
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild data-testid="button-view-all-artworks">
              <Link href="/gallery">
                Вижте всички произведения
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Authors */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Автори</Badge>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Талантливи творци
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Запознайте се с авторите, които създават невероятни произведения на изкуството
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {featuredAuthors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild data-testid="button-view-all-authors">
              <Link href="/authors">
                Вижте всички автори
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Възможности</Badge>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Пълен контрол над дизайна
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Персонализирайте всеки аспект от визията на вашата галерия с нашия мощен контролен панел
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Персонализация на темата
                </h3>
                <p className="text-muted-foreground">
                  Променяйте цветове, шрифтове, оформление и ефекти в реално време
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Управление на автори
                </h3>
                <p className="text-muted-foreground">
                  Лесно добавяне, редактиране и организиране на профили на авторите
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Галерия с произведения
                </h3>
                <p className="text-muted-foreground">
                  Показвайте произведения с рейтинги, категории и интерактивни функции
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild data-testid="button-admin-panel">
              <Link href="/admin">
                Отидете в контролния панел
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}