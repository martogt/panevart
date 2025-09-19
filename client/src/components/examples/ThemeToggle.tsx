import { ThemeProvider } from '../ThemeProvider';
import { ThemeToggle } from '../ThemeToggle';

export default function ThemeToggleExample() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="p-4 flex justify-center">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}