import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Users, 
  Image as ImageIcon, 
  Palette, 
  FileText, 
  BarChart3,
  Plus,
  Edit2,
  Trash2,
  Eye
} from 'lucide-react';
import ThemeCustomizer from './ThemeCustomizer';

interface AdminStats {
  totalAuthors: number;
  totalArtworks: number;
  totalViews: number;
  totalSales: number;
}

interface Author {
  id: string;
  name: string;
  email: string;
  artworksCount: number;
  status: 'active' | 'pending' | 'inactive';
}

interface Artwork {
  id: string;
  title: string;
  artist: string;
  status: 'published' | 'draft' | 'review';
  views: number;
  price: number;
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // todo: remove mock functionality
  const stats: AdminStats = {
    totalAuthors: 24,
    totalArtworks: 156,
    totalViews: 12340,
    totalSales: 45600
  };

  // todo: remove mock functionality
  const authors: Author[] = [
    { id: '1', name: 'Мария Петрова', email: 'maria@example.com', artworksCount: 15, status: 'active' },
    { id: '2', name: 'Георги Димитров', email: 'georgi@example.com', artworksCount: 22, status: 'active' },
    { id: '3', name: 'Елена Стоянова', email: 'elena@example.com', artworksCount: 8, status: 'pending' },
  ];

  // todo: remove mock functionality
  const artworks: Artwork[] = [
    { id: '1', title: 'Абстрактни форми', artist: 'Мария Петрова', status: 'published', views: 234, price: 1200 },
    { id: '2', title: 'Планински пейзаж', artist: 'Георги Димитров', status: 'published', views: 156, price: 850 },
    { id: '3', title: 'Модерно изкуство', artist: 'Елена Стоянова', status: 'review', views: 89, price: 950 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'published':
        return 'default';
      case 'pending':
      case 'review':
        return 'secondary';
      case 'inactive':
      case 'draft':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Активен';
      case 'pending':
        return 'Чакащ';
      case 'inactive':
        return 'Неактивен';
      case 'published':
        return 'Публикувано';
      case 'review':
        return 'На преглед';
      case 'draft':
        return 'Чернова';
      default:
        return status;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6" data-testid="admin-panel">
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
          Административен панел
        </h1>
        <p className="text-muted-foreground">
          Управление на галерията, автори и персонализиране на дизайна
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="dashboard" className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span>Статистики</span>
          </TabsTrigger>
          <TabsTrigger value="authors" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Автори</span>
          </TabsTrigger>
          <TabsTrigger value="artworks" className="flex items-center space-x-2">
            <ImageIcon className="h-4 w-4" />
            <span>Произведения</span>
          </TabsTrigger>
          <TabsTrigger value="theme" className="flex items-center space-x-2">
            <Palette className="h-4 w-4" />
            <span>Тема</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Настройки</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Общо автори</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalAuthors}</div>
                <p className="text-xs text-muted-foreground">+2 този месец</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Общо произведения</CardTitle>
                <ImageIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalArtworks}</div>
                <p className="text-xs text-muted-foreground">+12 тази седмица</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Общо прегледи</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+18% от миналия месец</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Общи продажби</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalSales.toLocaleString()} лв.</div>
                <p className="text-xs text-muted-foreground">+25% от миналия месец</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="authors" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Управление на автори</h2>
            <Button data-testid="button-add-author">
              <Plus className="h-4 w-4 mr-2" />
              Добави автор
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {authors.map((author) => (
                  <div key={author.id} className="p-4 flex items-center justify-between hover-elevate">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{author.name}</h3>
                        <p className="text-sm text-muted-foreground">{author.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="font-medium text-foreground">{author.artworksCount}</div>
                        <div className="text-xs text-muted-foreground">произведения</div>
                      </div>
                      
                      <Badge variant={getStatusColor(author.status)}>
                        {getStatusText(author.status)}
                      </Badge>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" data-testid={`button-edit-author-${author.id}`}>
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" data-testid={`button-delete-author-${author.id}`}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="artworks" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Управление на произведения</h2>
            <Button data-testid="button-add-artwork">
              <Plus className="h-4 w-4 mr-2" />
              Добави произведение
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {artworks.map((artwork) => (
                  <div key={artwork.id} className="p-4 flex items-center justify-between hover-elevate">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-12 bg-muted rounded flex items-center justify-center">
                        <ImageIcon className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{artwork.title}</h3>
                        <p className="text-sm text-muted-foreground">от {artwork.artist}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="font-medium text-foreground">{artwork.views}</div>
                        <div className="text-xs text-muted-foreground">прегледи</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="font-medium text-foreground">{artwork.price} лв.</div>
                        <div className="text-xs text-muted-foreground">цена</div>
                      </div>
                      
                      <Badge variant={getStatusColor(artwork.status)}>
                        {getStatusText(artwork.status)}
                      </Badge>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" data-testid={`button-view-artwork-${artwork.id}`}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" data-testid={`button-edit-artwork-${artwork.id}`}>
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" data-testid={`button-delete-artwork-${artwork.id}`}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theme" className="space-y-6">
          <ThemeCustomizer />
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Общи настройки</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-muted-foreground">
                Тук ще бъдат добавени общи настройки за сайта като SEO, интеграции и други конфигурации.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}