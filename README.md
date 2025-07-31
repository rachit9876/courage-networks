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
- **Notification System** - Consolidated toast notification system
- **Progressive Web App** - Installable with instant updates
- **Responsive Design** - Mobile-first approach optimized for all devices

## Live Demo

Visit the live site: [Courage Networks](https://courage-networks.pages.dev/)

## Project Structure

```
courage-networks
│     .htaccess
│      disclaimer.html
│      gallery.html
│      house.html
│      index.html
│      logo.svg
│      manifest.json
│      pwa-install.js
│      README.md
│      research.html
│      robots.txt
│      sitemap.xml
│      sw.js
│
├───assets
│       backYard.webp
│       bed.webp
│       computerSimon.svg
│       computerSimon.webp
│       courage.webp
│       door.webp
│       drVindaloo.webp
│       ending.gif
│       eustaceBagge.webp
│       eustaceHouse.webp
│       food.webp
│       food2.webp
│       fox.webp
│       frame.webp
│       frame2.webp
│       fred.webp
│       horstBagge.webp
│       house.webp
│       iceCream.webp
│       intro.webp
│       katz.webp
│       kingRamses.webp
│       logo.webp
│       logo2.webp
│       motel.webp
│       murielBagge.webp
│       music.webp
│       nowherecity.webp
│       nowherecity2.webp
│       nowherecity3.webp
│       nowherecity4.webp
│       nowherecity6.webp
│       nowherecity8.webp
│       pc.webp
│       photo.webp
│       photo2.webp
│       recipeBookBg.webp
│       researchCentre.webp
│       show.webp
│       squid.webp
│       stretchfilms.gif
│       stretchfilms4k.webp
│       track.webp
│       tree.webp
│       tv.webp
│       window.webp
│
├───cookbook
│       app.js
│       book.html
│       courage_cookbook.json
│       style.css
│
├───json
│       characters.json
│       gallery.json
│
├───notifications
│       notifications.js
│
└───researchPaper
        ResearchPaper.docx
        ResearchPaper.pdf
```

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS CDN, Custom CSS with retro pixel aesthetics
- **Data Visualization**: Chart.js for awards visualization
- **PWA**: Service Workers with instant updates, Web App Manifest
- **Performance**: Intersection Observer API, Lazy Loading, Progressive Enhancement
- **Data Storage**: JSON-based character and recipe databases
- **Fonts**: Google Fonts (Special Elite monospace)
- **Image Optimization**: WebP format for all assets
- **SEO**: Structured data, sitemap, meta tags





## Key Features

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
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#000000",
  "theme_color": "#000000",
  "start_url": "/",
  "scope": "/"
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
- **CDN Integration**: Tailwind CSS and external libraries via CDN

### Caching Strategy
- **Service Worker**: Instant updates with offline fallback
- **Browser Cache**: Optimized headers for static assets
- **Memory Management**: Efficient DOM manipulation and cleanup
- **Search Optimization**: Real-time filtering without server requests

## SEO & Accessibility

### SEO Features
- **Semantic HTML**: Proper heading structure and landmarks
- **Meta Tags**: Comprehensive metadata
- **FAQ Section**: Structured Q&A for search engines

### Accessibility
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes
- **Alt Text**: Descriptive image alternatives

## Media Integration

### Image Gallery
- **Metadata System**: Detailed image information
- **Responsive Images**: Multiple resolution support
- **Lazy Loading**: Performance-optimized loading

## Project Statistics

### Content Metrics
- **Characters**: 200+ detailed character entries with comprehensive data
- **Recipes**: 8 complete recipes with episode context and cooking instructions
- **Assets**: 40+ optimized WebP images and media files
- **Pages**: 6 main HTML pages plus external game integration
- **Notifications**: Unified toast notification system with 12+ preset types

### Technical Metrics
- **Total Files**: 25+ files in streamlined, organized structure
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
- ES6+ JavaScript support (arrow functions, async/await, modules)
- CSS Grid and Flexbox for responsive layouts
- Intersection Observer API for lazy loading
- Service Worker support for PWA and caching
- WebP image format support
- CSS Custom Properties (CSS Variables)

---

**Made with love by fans, for fans**

*"The things I do for love!" - Courage*

**Live Site**: [courage-networks.pages.dev](https://courage-networks.pages.dev/)  
**External Game**: [game-networks.pages.dev/courage/](https://game-networks.pages.dev/courage/)

License [MIT](https://mit-license.pages.dev/)