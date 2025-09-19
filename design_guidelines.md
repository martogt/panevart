# Design Guidelines: Art Gallery Content Management System

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium art gallery websites like Saatchi Art and Artsy, combined with modern admin interfaces like Notion and Linear for the control panel.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Dark Mode: 220 15% 8% (deep charcoal background)
- Light Mode: 0 0% 98% (warm white background)
- Text Primary: 0 0% 95% (light mode: 0 0% 15%)
- Accent: 350 70% 55% (sophisticated burgundy for art focus)

**Menu & UI Colors:**
- Menu Background: Translucent with blur effect (configurable opacity 10-90%)
- Menu Text: Inherits from global text settings
- Hover States: Subtle brightness increase (110% filter)

### B. Typography
**Font System:**
- Primary: Inter (clean, modern readability)
- Display: Playfair Display (elegant serif for titles)
- Monospace: JetBrains Mono (admin panel code areas)

**Hierarchy:**
- Menu Items: 16px regular → 16px semibold on hover
- Headings: 32px/24px/20px/18px with proper line spacing
- Body Text: 16px with 1.6 line height

### C. Layout System
**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16
- Menu padding: p-4
- Content sections: py-12 px-6
- Card spacing: gap-6
- Component margins: mb-8

### D. Component Library

#### Navigation System
- **Primary Menu:** Horizontal layout with subtle hover animations
- **Submenu (Three Columns):** 
  - Left: Author names (text list)
  - Center: Art categories (chip/tag style)
  - Right: Featured artwork (image with overlay)
- **Blur Effect:** Configurable backdrop-blur with edge gradient fade

#### Admin Control Panel
- **Tabbed Interface:** Settings organized by category
- **Real-time Preview:** Split-screen or overlay preview mode
- **Color Pickers:** Advanced HSL/RGB pickers with presets
- **Typography Controls:** Font selection, weight, size, spacing sliders
- **Image Uploads:** Drag-drop areas with preview thumbnails

#### Content Display
- **Author Profiles:** Clean card layout with artwork grid
- **Art Categories:** Filterable tag system with visual hierarchy
- **Rating System:** Star-based with visual feedback
- **Image Galleries:** Masonry or grid layout with lightbox

### E. Advanced Customization Features

#### Visual Theme Controls
- **Logo Management:** Separate favicon and menu logo uploads
- **Background Options:** Solid colors, gradients, or uploaded images
- **Menu Styling:** Padding, margins, border radius, shadow intensity
- **Layout Controls:** Header height, content width, footer styling
- **Animation Speed:** Hover transition timing (100-500ms range)

#### Typography Granularity
- **Zone-Based Settings:** Headers, body text, menus, buttons, captions
- **Font Properties:** Family, size, weight, letter spacing, line height
- **Color Mapping:** Text, backgrounds, borders per component type

## Images
**Hero Section:** Large, high-quality artwork showcase with subtle overlay
**Background Images:** Optional full-screen backgrounds with customizable opacity overlays
**Author Portraits:** Professional headshots in consistent aspect ratios
**Artwork Thumbnails:** High-resolution previews with zoom functionality
**Gallery Images:** Museum-quality presentation with proper color profiles

## Interaction Patterns
- **Smooth Transitions:** 200ms ease-in-out for all hover states
- **Progressive Enhancement:** Menu reveals content smoothly
- **Visual Feedback:** Subtle shadows and highlights for interactive elements
- **Responsive Behavior:** Mobile-first with elegant desktop enhancements

## Accessibility Considerations
- **Color Contrast:** WCAG AA compliance across all theme variations
- **Focus States:** Clear keyboard navigation indicators
- **Screen Reader Support:** Proper ARIA labels and semantic structure
- **Dark Mode Consistency:** Unified implementation across all components including form inputs

This design system prioritizes artistic elegance while maintaining functional clarity, giving users comprehensive control over their site's visual identity through an intuitive admin interface.