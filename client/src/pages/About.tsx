import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, Heart, Star, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-about">
      <div className="max-w-4xl mx-auto py-20 px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">За нас</Badge>
          <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
            Нашата мисия
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Създаваме пространство, където изкуството среща технологиите, 
            а творците могат да споделят своите произведения с целия свят.
          </p>
        </div>

        {/* Mission */}
        <Card className="mb-12 hover-elevate">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Вдъхновение и творчество
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Вярваме, че изкуството има силата да трансформира, вдъхновява и обединява хората. 
                Нашата платформа е създадена с мисията да предостави на художниците модерни 
                инструменти за представяне на техните произведения, като същевременно дава 
                възможност на галериите да персонализират напълно своя дигитален образ.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Талантливи автори</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
                  <div className="text-sm text-muted-foreground">Уникални произведения</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Активни галерии</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-elevate">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Пълна персонализация</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Променяйте всеки елемент от дизайна - цветове, шрифтове, оформление, 
                ефекти и анимации. Създайте уникална визия, която отразява вашия стил.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Интуитивен контролен панел</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Управлявайте автори, произведения и настройки лесно и бързо. 
                Всички промени се виждат в реално време с функцията за предварителен преглед.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Готови ли сте да започнете?
          </h3>
          <p className="text-muted-foreground mb-8">
            Открийте възможностите на нашата платформа и създайте вашата уникална художествена галерия.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-explore-gallery">
              <Link href="/gallery">
                Разгледайте галерията
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild data-testid="button-admin-panel">
              <Link href="/admin">
                Контролен панел
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}