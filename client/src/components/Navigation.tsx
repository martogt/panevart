import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthorImage1 from '@assets/generated_images/Contemporary_artist_portrait_3cd1e1cc.png';
import AuthorImage2 from '@assets/generated_images/Classical_painter_portrait_3839224d.png';
import ArtworkImage1 from '@assets/generated_images/Abstract_modern_painting_0be10114.png';
import ArtworkImage2 from '@assets/generated_images/Classical_landscape_painting_f72d970e.png';
import ArtworkImage3 from '@assets/generated_images/Modern_digital_artwork_d47d91c7.png';
import LogoImage from '@assets/13_1758279923612.png';

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
    <nav className="relative bg-background/95 backdrop-blur-xl border-b border-border/20 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-11">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-elevate rounded-lg px-2 py-1">
            <img src={LogoImage} alt="Art Gallery" className="h-6 w-6 object-contain" />
            <span className="font-sans text-lg font-medium text-foreground tracking-tight">
              Art Gallery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-0">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.submenu && handleMenuItemHover(item.title)}
                  onMouseLeave={handleMenuItemLeave}
                >
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-all duration-200 font-normal text-sm px-4 py-2 rounded-lg hover-elevate flex items-center space-x-1 hover:font-medium"
                    data-testid={`link-menu-${item.title.toLowerCase()}`}
                  >
                    <span>{item.title}</span>
                    {item.submenu && <ChevronDown className="h-3 w-3 opacity-60" />}
                  </Link>

                  {/* Submenu - Apple Style */}
                  {item.submenu && activeSubmenu === item.title && (
                    <div className="fixed left-0 right-0 top-full bg-background/98 backdrop-blur-2xl border-b border-border/20 shadow-2xl z-50">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-3 gap-12">
                          {/* Authors Column */}
                          <div>
                            <h3 className="font-medium text-foreground mb-6 text-sm tracking-wide">
                              Автори
                            </h3>
                            <div className="space-y-4">
                              {item.submenu.authors.map((author) => (
                                <div
                                  key={author.id}
                                  className="flex items-center space-x-4 p-3 rounded-xl hover-elevate cursor-pointer transition-all duration-200"
                                  data-testid={`author-${author.id}`}
                                >
                                  <img
                                    src={author.avatar}
                                    alt={author.name}
                                    className="h-10 w-10 rounded-full object-cover"
                                  />
                                  <span className="text-sm text-foreground/90 hover:text-foreground transition-colors font-medium">
                                    {author.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Categories Column */}
                          <div>
                            <h3 className="font-medium text-foreground mb-6 text-sm tracking-wide">
                              Категории
                            </h3>
                            <div className="space-y-3">
                              {item.submenu.categories.map((category) => (
                                <div
                                  key={category.id}
                                  className="flex items-center justify-between p-3 rounded-xl hover-elevate cursor-pointer transition-all duration-200"
                                  data-testid={`category-${category.id}`}
                                >
                                  <span className="text-sm text-foreground/90 hover:text-foreground transition-colors font-medium">
                                    {category.name}
                                  </span>
                                  <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                    {category.count}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Featured Artwork Column */}
                          <div>
                            <h3 className="font-medium text-foreground mb-6 text-sm tracking-wide">
                              Препоръчано
                            </h3>
                            <div className="bg-muted/20 rounded-2xl p-6 hover-elevate cursor-pointer transition-all duration-300">
                              <img
                                src={item.submenu.featuredArtwork.image}
                                alt={item.submenu.featuredArtwork.title}
                                className="w-full h-40 object-cover rounded-xl mb-4"
                              />
                              <h4 className="font-semibold text-foreground text-base mb-2">
                                {item.submenu.featuredArtwork.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-3">
                                от {item.submenu.featuredArtwork.artist}
                              </p>
                              <div className="flex items-center space-x-1">
                                {renderStars(item.submenu.featuredArtwork.rating)}
                              </div>
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
              className="h-8 w-8"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/20 mt-2 pt-4 pb-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200 font-medium"
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