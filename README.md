# Courage Networks - Fan Page ( [Try Now](https://courage-networks.pages.dev/) )

A comprehensive fan-made website dedicated to the animated series "Courage the Cowardly Dog" created by John R. Dilworth. This project serves as an interactive archive and tribute to the beloved show, featuring character databases, interactive recipes, research content, and immersive experiences.

## Features

### Core Sections
- **Main Landing Page** - Interactive pixel computer terminal with typing animations
- **Recipe Book** - Complete cookbook with 8 authentic recipes from the show
- **Gallery** - Curated image collection with metadata
- **Research Paper** - Academic analysis and cultural impact study
- **House Tour** - Virtual exploration of the Bagge farmhouse
- **Web Game** - 3D interactive game experience (external link)

### Interactive Elements
- **Character Database** - Comprehensive searchable database of 200+ characters
- **Pixel Art Interface** - Retro computer terminal with realistic typing effects
- **Progressive Web App** - Installable with instant updates
- **Responsive Design** - Mobile-first approach optimized for all devices

## Live Demo

Visit the live site: [Courage Networks](https://courage-networks.pages.dev/)

## Project Structure

```
courage-networks/
├── assets/                    # Image assets (35+ WebP images)
│   ├── computerSimon.webp     # Main terminal interface
│   ├── courage.webp           # Character images
│   ├── murielBagge.webp
│   ├── eustaceBagge.webp
│   ├── house.webp             # Location images
│   ├── recipeBookBg.webp
│   └── ... (30+ more images)
├── cookbook/                  # Recipe book section
│   ├── app.js                 # Cookbook functionality
│   ├── book.html              # Recipe book interface
│   ├── courage_cookbook.json  # Recipe database
│   └── style.css              # Cookbook styling
├── json/                      # Data files
│   ├── characters.json        # 200+ character database
│   └── gallery.json           # Gallery metadata
├── notifications/             # Notification system
│   └── notifications.js       # Toast notifications
├── researchPaper/            # Academic content
│   ├── ResearchPaper.docx
│   └── ResearchPaper.pdf
├── index.html                # Main landing page
├── gallery.html              # Image gallery
├── house.html                # Virtual house tour
├── research.html             # Research paper display
├── disclaimer.html           # Copyright disclaimer
├── manifest.json             # PWA configuration
├── sw.js                     # Service worker
├── pwa-install.js           # PWA installation
├── logo.svg                 # Site logo
├── sitemap.xml              # SEO sitemap
├── robots.txt               # Search engine directives
└── .htaccess                # Server configuration
```

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS CDN, Custom CSS with retro pixel aesthetics
- **PWA**: Service Workers with instant updates, Web App Manifest
- **Performance**: Intersection Observer API, Lazy Loading, Progressive Enhancement
- **Data Storage**: JSON-based character and recipe databases
- **Charts**: Chart.js for data visualization
- **Fonts**: Google Fonts (Special Elite monospace)
- **Image Optimization**: WebP format for all assets
- **SEO**: Structured data, sitemap, meta tags

## Key Features

### Character Database
- **Comprehensive Collection**: 200+ characters from the series
- **Searchable Interface**: Real-time filtering by name and description
- **Detailed Information**: Character roles, appearance, and behavior patterns
- **Interactive Display**: Hover effects and modal popups for main characters
- **Lazy Loading**: Performance-optimized loading when section becomes visible

### Recipe Book
- **Farmhouse Interface**: Immersive cookbook experience with authentic styling
- **Complete Recipe Collection**: 8 carefully crafted recipes from the show
- **Featured Recipes**: 
  - **Happy Plums** (The Tower of Dr. Zalost) - Magical happiness-restoring plums
  - **Little Muriel's Macaroni and Cheese** (Little Muriel) - Extravagant 3-cheese masterpiece
  - **Scottish Dream Cookies** (Le Quack Balloon) - Buttery shortbread specialty
  - **Flantasy Flan** (King of Flan) - Hypnotically delicious caramel flan
  - **Muriel's Award-Winning Dog Food** (Invisible Muriel) - Secret government-coveted recipe
  - **Eustace's Favorite Mashed Potatoes** (Family Business) - Creamy comfort food
  - **Courage's Comfort Soup** (Various episodes) - Soothing soup for scary nights
  - **Nowhere Farmhouse Bread** (Background staple) - Rustic homemade bread
- **Detailed Instructions**: Complete ingredients, step-by-step cooking instructions
- **Muriel's Tips**: Personal cooking advice and secrets from Muriel herself
- **Episode Context**: Each recipe linked to specific episodes and story moments

### Web Game
- **External 3D Experience**: Fully explorable Bagge farmhouse environment
- **WebGL Technology**: Advanced 3D graphics in the browser
- **Performance Optimized**: LOD system, object pooling, texture management
- **Immersive Exploration**: Walk through iconic locations from the show
- **External Hosting**: Game hosted at [game-networks.pages.dev/courage/](https://game-networks.pages.dev/courage/)
- **Seamless Integration**: Accessible directly from the main site navigation



## Installation & Setup

### Prerequisites
- Modern web browser with JavaScript enabled
- Local web server (for development)
- Git for version control

### Development Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/courage-networks.git
   cd courage-networks
   ```

2. **Start local server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   
   # Using Live Server (VS Code extension)
   # Right-click index.html and select "Open with Live Server"
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### File Structure Notes
- All assets are organized in the `/assets/` directory
- Character data is stored in `/json/characters.json`
- Recipe data is in `/cookbook/courage_cookbook.json`
- External web game hosted separately at game-networks.pages.dev

### Production Deployment
1. Upload all files to web hosting service
2. Ensure server supports `.htaccess` (for Apache) - included in project
3. Configure proper MIME types for WebP and other media files
4. Enable HTTPS for PWA functionality
5. Update `robots.txt` for search engine optimization
6. Test PWA installation on mobile devices

## Progressive Web App

### Features
- **Installable**: Add to home screen functionality across all platforms
- **Offline Support**: Core functionality available without internet
- **Fast Loading**: Optimized asset delivery and caching strategies
- **Mobile Optimized**: Touch-friendly interface with responsive design

### PWA Configuration
```json
{
  "name": "Courage Fan Page",
  "short_name": "Courage",
  "description": "Personal fan page",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#000000",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "logo.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    }
  ]
}
```

### Service Worker Features
- **Instant Updates**: Always fetches latest content when available
- **Cache Invalidation**: Automatic cleanup ensures fresh content
- **Offline Fallback**: Basic functionality when network unavailable

## Performance Optimizations

### Loading Strategies
- **Lazy Loading**: Character database loads only when section is visible
- **Intersection Observer**: Efficient viewport detection for content loading
- **Progressive Enhancement**: Core functionality works without JavaScript
- **WebP Images**: All assets optimized in modern WebP format
- **CDN Integration**: Tailwind CSS and Chart.js via CDN

### Caching Strategy
- **Service Worker**: Instant updates with cache invalidation
- **No-Cache Fetch**: Always fetches latest content when available
- **Memory Management**: Efficient DOM manipulation and cleanup
- **Search Optimization**: Real-time filtering without server requests

## SEO & Accessibility

### SEO Features
- **Semantic HTML**: Proper heading structure and landmarks
- **Meta Tags**: Comprehensive Open Graph and Twitter Card metadata
- **Structured Data**: JSON-LD schema for search engines
- **Sitemap**: XML sitemap for search engine indexing
- **FAQ Section**: Structured Q&A for search engines

### Accessibility
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes
- **Alt Text**: Descriptive image alternatives

## Interactive Features

### Terminal Interface
- **Pixel Art Computer**: Retro CRT monitor aesthetic with typing animations
- **Dynamic Text**: Real-time typing effect displaying version updates
- **Responsive Design**: Scales appropriately on mobile devices

### Search Functionality
- **Global Search**: Header search bar with real-time highlighting
- **Character Search**: Dedicated search for character database
- **Smooth Scrolling**: Auto-scroll to first search result

### Data Visualization
- **Awards Chart**: Interactive Chart.js visualization of show's accolades
- **Character Statistics**: Comprehensive database with filtering capabilities

## Project Statistics

### Content Metrics
- **Characters**: 200+ detailed character entries with comprehensive data
- **Recipes**: 8 complete recipes with episode context and cooking instructions
- **Assets**: 35+ optimized WebP images and media files
- **Pages**: 6 main HTML pages plus external game integration

### Technical Metrics
- **Total Files**: 25+ files in organized structure
- **Database Entries**: JSON-based character and recipe databases
- **Image Optimization**: 100% WebP format for faster loading
- **Mobile-First**: Responsive design with touch-optimized interactions
- **Browser Support**: Modern browsers with ES6+ and WebP support

## Browser Compatibility

### Supported Browsers
- **Chrome**: 80+ (recommended)
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+

### Required Features
- ES6+ JavaScript support (arrow functions, async/await)
- CSS Grid and Flexbox for responsive layouts
- Intersection Observer API for lazy loading
- Service Worker support for PWA functionality
- WebP image format support
- CSS Custom Properties (CSS Variables)
- Chart.js for data visualization

---

**Made with love by fans, for fans**

*"The things I do for love!" - Courage*

**Live Site**: [courage-networks.pages.dev](https://courage-networks.pages.dev/)  
**External Game**: [game-networks.pages.dev/courage/](https://game-networks.pages.dev/courage/)

**Created by**: @rachit.zip  
**License**: MIT