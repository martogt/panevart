import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Authors from "@/pages/Authors";
import About from "@/pages/About";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/authors" component={Authors} />
      <Route path="/collections" component={Gallery} />
      <Route path="/about" component={About} />
      <Route path="/admin" component={Admin} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="light" storageKey="art-gallery-theme">
          <div className="min-h-screen bg-background">
            {/* Navigation */}
            <Navigation />
            
            {/* Theme Toggle - Fixed position */}
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            
            {/* Main Content */}
            <main>
              <Router />
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
