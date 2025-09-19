import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthorImage1 from '@assets/generated_images/Contemporary_artist_portrait_3cd1e1cc.png';
import AuthorImage2 from '@assets/generated_images/Classical_painter_portrait_3839224d.png';
import ArtworkImage1 from '@assets/generated_images/Abstract_modern_painting_0be10114.png';
import ArtworkImage2 from '@assets/generated_images/Classical_landscape_painting_f72d970e.png';
import ArtworkImage3 from '@assets/generated_images/Modern_digital_artwork_d47d91c7.png';
import LogoImage from '@assets/generated_images/Art_gallery_logo_34e63a7b.png';

interface SubmenuContent {
  authors: Array<{ id: string; name: string; avatar: string }>;
  categories: Array<{ id: string; name: string; count: number }>;
  featuredArtwork: { id: string; title: string; artist: string; image: string; rating: number };
}

interface MenuItem {
  title: string;
  href: string;
  submenu?: SubmenuContent;
}

const menuItems: MenuItem[] = [
  {
    title: 'Автори',
    href: '/authors',
    submenu: {
      authors: [
        { id: '1', name: 'Мария Петрова', avatar: AuthorImage1 },
        { id: '2', name: 'Георги Димитров', avatar: AuthorImage2 },
        { id: '3', name: 'Елена Стоянова', avatar: AuthorImage1 },
      ],
      categories: [
        { id: '1', name: 'Абстрактно изкуство', count: 24 },
        { id: '2', name: 'Пейзажи', count: 18 },
        { id: '3', name: 'Портрети', count: 32 },
        { id: '4', name: 'Модерно изкуство', count: 15 },
      ],
      featuredArtwork: {
        id: '1',
        title: 'Абстрактни форми',
        artist: 'Мария Петрова',
        image: ArtworkImage1,
        rating: 5
      }
    }
  },
  {
    title: 'Галерия',
    href: '/gallery',
    submenu: {
      authors: [
        { id: '1', name: 'Всички автори', avatar: AuthorImage1 },
        { id: '2', name: 'Нови автори', avatar: AuthorImage2 },
      ],
      categories: [
        { id: '1', name: 'Най-нови', count: 12 },
        { id: '2', name: 'Най-популярни', count: 28 },
        { id: '3', name: 'Най-високо оценени', count: 19 },
      ],
      featuredArtwork: {
        id: '2',
        title: 'Планински пейзаж',
        artist: 'Георги Димитров',
        image: ArtworkImage2,
        rating: 4
      }
    }
  },
  {
    title: 'Колекции',
    href: '/collections',
    submenu: {
      authors: [
        { id: '1', name: 'Куратори', avatar: AuthorImage1 },
        { id: '2', name: 'Приватни колекции', avatar: AuthorImage2 },
      ],
      categories: [
        { id: '1', name: 'Тематични колекции', count: 8 },
        { id: '2', name: 'Периоди', count: 6 },
        { id: '3', name: 'Стилове', count: 12 },
      ],
      featuredArtwork: {
        id: '3',
        title: 'Дигитално изкуство',
        artist: 'Елена Стоянова',
        image: ArtworkImage3,
        rating: 5
      }
    }
  },
  {
    title: 'За нас',
    href: '/about'
  }
];

export default function Navigation() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuItemHover = (title: string) => {
    setActiveSubmenu(title);
  };

  const handleMenuItemLeave = () => {
    setActiveSubmenu(null);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <nav className="relative bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src={LogoImage} alt="Art Gallery" className="h-8 w-8" />
            <span className="font-serif text-xl font-semibold text-foreground">
              Art Gallery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.submenu && handleMenuItemHover(item.title)}
                  onMouseLeave={handleMenuItemLeave}
                >
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center space-x-1 hover:font-semibold"
                    data-testid={`link-menu-${item.title.toLowerCase()}`}
                  >
                    <span>{item.title}</span>
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && activeSubmenu === item.title && (
                    <div className="absolute top-full left-0 mt-2 w-[800px] bg-background/95 backdrop-blur-xl border border-border rounded-lg shadow-xl z-50 p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {/* Authors Column */}
                        <div>
                          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                            Автори
                          </h3>
                          <div className="space-y-3">
                            {item.submenu.authors.map((author) => (
                              <div
                                key={author.id}
                                className="flex items-center space-x-3 p-2 rounded-md hover-elevate cursor-pointer"
                                data-testid={`author-${author.id}`}
                              >
                                <img
                                  src={author.avatar}
                                  alt={author.name}
                                  className="h-8 w-8 rounded-full object-cover"
                                />
                                <span className="text-sm text-foreground hover:text-primary transition-colors">
                                  {author.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Categories Column */}
                        <div>
                          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                            Категории
                          </h3>
                          <div className="space-y-2">
                            {item.submenu.categories.map((category) => (
                              <div
                                key={category.id}
                                className="flex items-center justify-between p-2 rounded-md hover-elevate cursor-pointer"
                                data-testid={`category-${category.id}`}
                              >
                                <span className="text-sm text-foreground hover:text-primary transition-colors">
                                  {category.name}
                                </span>
                                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                                  {category.count}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Featured Artwork Column */}
                        <div>
                          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                            Препоръчано
                          </h3>
                          <div className="border border-border rounded-lg p-4 hover-elevate cursor-pointer">
                            <img
                              src={item.submenu.featuredArtwork.image}
                              alt={item.submenu.featuredArtwork.title}
                              className="w-full h-32 object-cover rounded-md mb-3"
                            />
                            <h4 className="font-medium text-foreground text-sm mb-1">
                              {item.submenu.featuredArtwork.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mb-2">
                              от {item.submenu.featuredArtwork.artist}
                            </p>
                            <div className="flex items-center space-x-1">
                              {renderStars(item.submenu.featuredArtwork.rating)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.title.toLowerCase()}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}