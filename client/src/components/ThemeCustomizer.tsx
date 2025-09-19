import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Palette, Upload, Download, RotateCcw, Eye } from 'lucide-react';

interface ThemeSettings {
  // Colors
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  menuBackgroundColor: string;
  menuTextColor: string;
  
  // Typography
  fontFamily: string;
  fontSize: number;
  fontWeight: string;
  lineHeight: number;
  letterSpacing: number;
  
  // Layout
  headerHeight: number;
  menuSpacing: number;
  contentMargins: number;
  borderRadius: number;
  
  // Effects
  blurIntensity: number;
  blurPeriphery: number;
  shadowIntensity: number;
  animationSpeed: number;
  
  // Logos
  logoUrl: string;
  faviconUrl: string;
  
  // Background
  backgroundImageUrl: string;
  backgroundOpacity: number;
  backgroundPosition: string;
}

const defaultSettings: ThemeSettings = {
  primaryColor: '#dc2626',
  backgroundColor: '#ffffff',
  textColor: '#1f2937',
  menuBackgroundColor: '#f9fafb',
  menuTextColor: '#374151',
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: '400',
  lineHeight: 1.6,
  letterSpacing: 0,
  headerHeight: 64,
  menuSpacing: 32,
  contentMargins: 24,
  borderRadius: 8,
  blurIntensity: 12,
  blurPeriphery: 4,
  shadowIntensity: 0.1,
  animationSpeed: 200,
  logoUrl: '',
  faviconUrl: '',
  backgroundImageUrl: '',
  backgroundOpacity: 0.1,
  backgroundPosition: 'center',
};

export default function ThemeCustomizer() {
  const [settings, setSettings] = useState<ThemeSettings>(defaultSettings);
  const [previewMode, setPreviewMode] = useState(false);

  const updateSetting = (key: keyof ThemeSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    console.log(`Updated ${key}:`, value);
  };

  const handleReset = () => {
    setSettings(defaultSettings);
    console.log('Theme settings reset to default');
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'theme-settings.json';
    link.click();
    URL.revokeObjectURL(url);
    console.log('Theme exported');
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedSettings = JSON.parse(e.target?.result as string);
          setSettings(importedSettings);
          console.log('Theme imported successfully');
        } catch (error) {
          console.error('Error importing theme:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const togglePreview = () => {
    setPreviewMode(!previewMode);
    console.log(`Preview mode ${!previewMode ? 'enabled' : 'disabled'}`);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto" data-testid="card-theme-customizer">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Palette className="h-5 w-5 text-primary" />
            <CardTitle>Персонализиране на темата</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={togglePreview}
              data-testid="button-toggle-preview"
            >
              <Eye className="h-4 w-4 mr-2" />
              {previewMode ? 'Изключи превю' : 'Включи превю'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              data-testid="button-reset-theme"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Нулирай
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="colors">Цветове</TabsTrigger>
            <TabsTrigger value="typography">Типография</TabsTrigger>
            <TabsTrigger value="layout">Оформление</TabsTrigger>
            <TabsTrigger value="effects">Ефекти</TabsTrigger>
            <TabsTrigger value="media">Медия</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primary-color">Основен цвят</Label>
                <div className="flex space-x-2">
                  <Input
                    id="primary-color"
                    type="color"
                    value={settings.primaryColor}
                    onChange={(e) => updateSetting('primaryColor', e.target.value)}
                    className="w-16 h-10"
                    data-testid="input-primary-color"
                  />
                  <Input
                    value={settings.primaryColor}
                    onChange={(e) => updateSetting('primaryColor', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="background-color">Фонов цвят</Label>
                <div className="flex space-x-2">
                  <Input
                    id="background-color"
                    type="color"
                    value={settings.backgroundColor}
                    onChange={(e) => updateSetting('backgroundColor', e.target.value)}
                    className="w-16 h-10"
                    data-testid="input-background-color"
                  />
                  <Input
                    value={settings.backgroundColor}
                    onChange={(e) => updateSetting('backgroundColor', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="text-color">Цвят на текста</Label>
                <div className="flex space-x-2">
                  <Input
                    id="text-color"
                    type="color"
                    value={settings.textColor}
                    onChange={(e) => updateSetting('textColor', e.target.value)}
                    className="w-16 h-10"
                    data-testid="input-text-color"
                  />
                  <Input
                    value={settings.textColor}
                    onChange={(e) => updateSetting('textColor', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="menu-background-color">Фон на менюто</Label>
                <div className="flex space-x-2">
                  <Input
                    id="menu-background-color"
                    type="color"
                    value={settings.menuBackgroundColor}
                    onChange={(e) => updateSetting('menuBackgroundColor', e.target.value)}
                    className="w-16 h-10"
                    data-testid="input-menu-background-color"
                  />
                  <Input
                    value={settings.menuBackgroundColor}
                    onChange={(e) => updateSetting('menuBackgroundColor', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="font-family">Шрифт</Label>
                <Select value={settings.fontFamily} onValueChange={(value) => updateSetting('fontFamily', value)}>
                  <SelectTrigger data-testid="select-font-family">
                    <SelectValue placeholder="Изберете шрифт" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inter">Inter</SelectItem>
                    <SelectItem value="Playfair Display">Playfair Display</SelectItem>
                    <SelectItem value="JetBrains Mono">JetBrains Mono</SelectItem>
                    <SelectItem value="Open Sans">Open Sans</SelectItem>
                    <SelectItem value="Roboto">Roboto</SelectItem>
                    <SelectItem value="Montserrat">Montserrat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="font-weight">Тегло на шрифта</Label>
                <Select value={settings.fontWeight} onValueChange={(value) => updateSetting('fontWeight', value)}>
                  <SelectTrigger data-testid="select-font-weight">
                    <SelectValue placeholder="Изберете тегло" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="300">Тънък (300)</SelectItem>
                    <SelectItem value="400">Нормален (400)</SelectItem>
                    <SelectItem value="500">Среден (500)</SelectItem>
                    <SelectItem value="600">Полудебел (600)</SelectItem>
                    <SelectItem value="700">Дебел (700)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Размер на шрифта: {settings.fontSize}px</Label>
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={(value) => updateSetting('fontSize', value[0])}
                  max={24}
                  min={12}
                  step={1}
                  data-testid="slider-font-size"
                />
              </div>

              <div className="space-y-2">
                <Label>Височина на реда: {settings.lineHeight}</Label>
                <Slider
                  value={[settings.lineHeight]}
                  onValueChange={(value) => updateSetting('lineHeight', value[0])}
                  max={2.5}
                  min={1}
                  step={0.1}
                  data-testid="slider-line-height"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="layout" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Височина на хедъра: {settings.headerHeight}px</Label>
                <Slider
                  value={[settings.headerHeight]}
                  onValueChange={(value) => updateSetting('headerHeight', value[0])}
                  max={120}
                  min={48}
                  step={4}
                  data-testid="slider-header-height"
                />
              </div>

              <div className="space-y-2">
                <Label>Разстояние в менюто: {settings.menuSpacing}px</Label>
                <Slider
                  value={[settings.menuSpacing]}
                  onValueChange={(value) => updateSetting('menuSpacing', value[0])}
                  max={64}
                  min={8}
                  step={4}
                  data-testid="slider-menu-spacing"
                />
              </div>

              <div className="space-y-2">
                <Label>Марджини на съдържанието: {settings.contentMargins}px</Label>
                <Slider
                  value={[settings.contentMargins]}
                  onValueChange={(value) => updateSetting('contentMargins', value[0])}
                  max={48}
                  min={8}
                  step={4}
                  data-testid="slider-content-margins"
                />
              </div>

              <div className="space-y-2">
                <Label>Радиус на ъглите: {settings.borderRadius}px</Label>
                <Slider
                  value={[settings.borderRadius]}
                  onValueChange={(value) => updateSetting('borderRadius', value[0])}
                  max={20}
                  min={0}
                  step={1}
                  data-testid="slider-border-radius"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="effects" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Интензивност на блър ефекта: {settings.blurIntensity}px</Label>
                <Slider
                  value={[settings.blurIntensity]}
                  onValueChange={(value) => updateSetting('blurIntensity', value[0])}
                  max={32}
                  min={0}
                  step={1}
                  data-testid="slider-blur-intensity"
                />
              </div>

              <div className="space-y-2">
                <Label>Блър по периферията: {settings.blurPeriphery}px</Label>
                <Slider
                  value={[settings.blurPeriphery]}
                  onValueChange={(value) => updateSetting('blurPeriphery', value[0])}
                  max={16}
                  min={0}
                  step={1}
                  data-testid="slider-blur-periphery"
                />
              </div>

              <div className="space-y-2">
                <Label>Интензивност на сенките: {settings.shadowIntensity}</Label>
                <Slider
                  value={[settings.shadowIntensity]}
                  onValueChange={(value) => updateSetting('shadowIntensity', value[0])}
                  max={0.5}
                  min={0}
                  step={0.05}
                  data-testid="slider-shadow-intensity"
                />
              </div>

              <div className="space-y-2">
                <Label>Скорост на анимациите: {settings.animationSpeed}ms</Label>
                <Slider
                  value={[settings.animationSpeed]}
                  onValueChange={(value) => updateSetting('animationSpeed', value[0])}
                  max={500}
                  min={100}
                  step={50}
                  data-testid="slider-animation-speed"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="media" className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="logo-url">URL на логото</Label>
                <Input
                  id="logo-url"
                  value={settings.logoUrl}
                  onChange={(e) => updateSetting('logoUrl', e.target.value)}
                  placeholder="https://example.com/logo.png"
                  data-testid="input-logo-url"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="favicon-url">URL на favicon</Label>
                <Input
                  id="favicon-url"
                  value={settings.faviconUrl}
                  onChange={(e) => updateSetting('faviconUrl', e.target.value)}
                  placeholder="https://example.com/favicon.ico"
                  data-testid="input-favicon-url"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="background-image-url">URL на фоновото изображение</Label>
                <Input
                  id="background-image-url"
                  value={settings.backgroundImageUrl}
                  onChange={(e) => updateSetting('backgroundImageUrl', e.target.value)}
                  placeholder="https://example.com/background.jpg"
                  data-testid="input-background-image-url"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Прозрачност на фона: {Math.round(settings.backgroundOpacity * 100)}%</Label>
                  <Slider
                    value={[settings.backgroundOpacity]}
                    onValueChange={(value) => updateSetting('backgroundOpacity', value[0])}
                    max={1}
                    min={0}
                    step={0.05}
                    data-testid="slider-background-opacity"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="background-position">Позиция на фона</Label>
                  <Select value={settings.backgroundPosition} onValueChange={(value) => updateSetting('backgroundPosition', value)}>
                    <SelectTrigger data-testid="select-background-position">
                      <SelectValue placeholder="Изберете позиция" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="center">Център</SelectItem>
                      <SelectItem value="top">Горе</SelectItem>
                      <SelectItem value="bottom">Долу</SelectItem>
                      <SelectItem value="left">Ляво</SelectItem>
                      <SelectItem value="right">Дясно</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Export/Import Controls */}
        <div className="flex justify-between items-center pt-6 border-t border-border mt-6">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={handleExport}
              data-testid="button-export-theme"
            >
              <Download className="h-4 w-4 mr-2" />
              Експорт
            </Button>
            
            <div className="relative">
              <Button variant="outline" asChild data-testid="button-import-theme">
                <label htmlFor="import-theme" className="cursor-pointer">
                  <Upload className="h-4 w-4 mr-2" />
                  Импорт
                </label>
              </Button>
              <Input
                id="import-theme"
                type="file"
                accept=".json"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImport}
              />
            </div>
          </div>

          <Button data-testid="button-apply-theme">
            Приложи промените
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}