# Courage Networks - Fan Page ( [Try Now](https://courage-networks.pages.dev/) )

A comprehensive fan-made website dedicated to the animated series "Courage the Cowardly Dog" created by John R. Dilworth. This project serves as an interactive archive and tribute to the beloved show, featuring character databases, episode guides, interactive elements, and more.

## Features

### Core Sections
- **Main Landing Page** - Interactive terminal interface with character information
- **Recipe Book** - Interactive cookbook based on recipes from the show
- **Gallery** - Image collection with metadata
- **Research Paper** - Academic analysis of the show
- **House Tour** - Virtual exploration of the Bagge farmhouse
- **Web Game** - 3D interactive game experience (external link)

### Interactive Elements
- **Character Database** - Searchable database of 200+ characters
- **Pixel Art Interface** - Retro computer terminal with typing animations
- **Progressive Web App** - Installable with offline capabilities
- **Responsive Design** - Optimized for all device sizes

## Live Demo

Visit the live site: [Courage Networks](https://courage-networks.pages.dev/)

## Project Structure

```
courage-networks/
├── assets/                     # Images and media files
│   ├── courage.png            # Character images
│   ├── house.png              # Location images
│   ├── logo.png               # Site branding
│   ├── backYard.png           # Background images
│   ├── bed.png                # Interior assets
│   ├── computerSimon.png      # Computer interface
│   ├── courage.png            # Character images
│   ├── eustaceBagge.png       # Character portraits
│   ├── house.png              # Location images
│   ├── logo.png               # Site branding
│   ├── murielBagge.png        # Character portraits
│   ├── recipeBookBg.jpg       # Recipe book background
│   └── ...                    # Additional assets (40+ files)
├── cookbook/                   # Recipe book section
│   ├── app.js                 # Recipe functionality
│   ├── book.html              # Recipe interface
│   ├── courage_cookbook.json  # Recipe data (8 recipes)
│   └── style.css              # Recipe styling
├── json/                      # Data files
│   ├── characters.json        # Character database (200+ characters)
│   └── gallery.json           # Gallery metadata
├── notifications/             # Notification scripts
│   ├── acknowledge.js         # User acknowledgments
│   ├── sorry.js               # Error notifications
│   ├── webGame.js             # Game notifications
│   └── welcome.js             # Welcome messages
├── researchPaper/             # Academic content
│   ├── ResearchPaper.docx     # Research document
│   └── ResearchPaper.pdf      # PDF version
├── Thumbnails/                # Video thumbnails
│   ├── promo.png              # Promotional content
│   ├── Straight Outta Nowhere.png
│   └── ...                    # Episode thumbnails
├── webGame/                   # 3D game files
│   ├── game.js                # Game logic
│   ├── index.html             # Game interface
│   ├── lod.js                 # Level of detail system
│   ├── object-pool.js         # Performance optimization
│   ├── performance.js         # Performance monitoring
│   ├── texture-manager.js     # Texture handling
│   ├── new.glb                # 3D models
│   ├── bg.png                 # Game background
│   ├── style.css              # Game styling
│   └── README.md              # Game development guide
├── .gitattributes             # Git configuration
├── .htaccess                  # Apache configuration
├── disclaimer.html            # Copyright disclaimer
├── gallery.html               # Image gallery
├── house.html                 # House tour
├── index.html                 # Main landing page
├── logo.svg                   # SVG logo
├── lostmedia.html             # Lost media archive
├── manifest.json              # PWA configuration
├── ost.html                   # Soundtrack player
├── pwa-install.js             # PWA installation
├── quiz.html                  # Interactive quiz
├── README.md                  # This file
├── research.html              # Research section
├── robots.txt                 # Search engine directives
├── stream.html                # Video streaming
└── sw.js                      # Service worker
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS with pixel art aesthetics
- **Data Visualization**: Chart.js
- **3D Graphics**: WebGL, GLB models
- **PWA**: Service Workers, Web App Manifest
- **Performance**: Intersection Observer, Lazy Loading, Object Pooling
- **Data Storage**: JSON files for structured content

## Design Features

### Visual Theme
- **Dark Theme**: Black background (#000000) with pink accents (#fdc3ed)
- **Pixel Art Aesthetic**: Retro computer interface inspired by 90s terminals
- **Typography**: 'Special Elite' monospace font for authentic retro feel
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Custom Animations**: Terminal typing effects, hover interactions, blinking cursors

### UI Components
- **Pixel Computer Interface**: Interactive terminal with realistic typing animations
- **Character Database**: Searchable table with 200+ character entries
- **Modal System**: Detailed character information popups with rich content
- **Navigation**: Responsive dropdown menu with smooth transitions
- **Interactive Elements**: Hover effects on villain/friend cards
- **Search Functionality**: Real-time filtering and highlighting
- **Progressive Loading**: "See More" functionality for large datasets

### Interactive Features
- **Terminal Simulation**: Welcome messages with typewriter effect
- **Character Exploration**: Click-to-reveal detailed character information
- **Responsive Cards**: Villain and ally cards with hover-reveal descriptions
- **Theme Integration**: Consistent color scheme throughout all sections

## Content Database

### Characters (200+ entries)
The project includes a comprehensive character database with detailed information:

- **Main Characters**: Courage, Muriel Bagge, Eustace Bagge
- **Major Villains**: Katz, King Ramses, Le Quack, Dr. Zalost, Cajun Fox, Mad Dog
- **Allies & Friends**: Computer, Dr. Vindaloo, Shirley the Medium, Charlie the Mouse
- **Recurring Characters**: Ma Bagge, Floyd, Jean Bon, various townspeople
- **One-time Characters**: Episode-specific villains and creatures
- **Mythical Beings**: Dragons, spirits, deities, and supernatural entities

#### Character Categories
- **Protagonists**: Heroes and helpful characters
- **Antagonists**: Villains and threats
- **Neutral**: Townspeople and background characters
- **Supernatural**: Ghosts, monsters, and otherworldly beings

### Data Structure
```json
{
  "Character": "Ai Shen",
  "Role / Short Description": "Mysterious spirit; guardian of an ancient relic",
  "Appearance Highlights": "Ethereal, dragon-like form with flowing mane",
  "Habit / Behavior": "Silent observer, appears at dusk"
}
```

## Interactive Features

### Recipe Book
- **Welcome Interface**: Farmhouse-themed landing page
- **Recipe Collection**: 8 authentic recipes from the show
- **Featured Recipes**: 
  - Happy Plums (The Tower of Dr. Zalost)
  - Little Muriel's Macaroni and Cheese (Little Muriel)
  - Scottish Dream Cookies (Le Quack Balloon)
  - Flantasy Flan (King of Flan)
  - Muriel's Award-Winning Dog Food (Invisible Muriel)
  - Eustace's Favorite Mashed Potatoes (Family Business)
  - Courage's Comfort Soup (Various episodes)
  - Nowhere Farmhouse Bread (Background staple)
- **Detailed View**: Complete ingredients, step-by-step instructions, and Muriel's personal tips
- **Episode References**: Each recipe linked to specific episodes where they appeared

### Web Game
- **3D Environment**: Explorable Bagge farmhouse using WebGL
- **Performance Optimized**: LOD system, object pooling, texture management
- **GLB Models**: Optimized 3D assets for web delivery
- **Development Tools**: Performance monitoring and debugging utilities
- **External Hosting**: Game hosted at [game-networks.pages.dev/courage/](https://game-networks.pages.dev/courage/)

### Gallery System
- **Image Metadata**: Detailed information for each image
- **Lazy Loading**: Performance-optimized image loading
- **Responsive Grid**: Adaptive layout for all screen sizes

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
- The web game has its own `/webGame/` directory with development documentation

### Production Deployment
1. Upload all files to web hosting service
2. Ensure server supports `.htaccess` (for Apache) - included in project
3. Configure proper MIME types for GLB and other media files
4. Enable HTTPS for PWA functionality
5. Update `robots.txt` for search engine optimization
6. Test PWA installation on mobile devices

## Progressive Web App

### Features
- **Offline Capability**: Service worker caching
- **Installable**: Add to home screen functionality
- **Responsive**: Works on all device types
- **Fast Loading**: Optimized asset delivery

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

## Performance Optimizations

### Loading Strategies
- **Lazy Loading**: Images and content loaded on demand
- **Intersection Observer**: Efficient viewport detection
- **Code Splitting**: Modular JavaScript loading
- **Asset Optimization**: Compressed images and minified code

### Caching Strategy
- **Service Worker**: Intelligent caching of static assets
- **Browser Cache**: Optimized cache headers
- **CDN Integration**: External library loading

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

## Copyright & Legal

### Disclaimer
This is a fan-made project created for educational and entertainment purposes. All content related to "Courage the Cowardly Dog" is owned by Cartoon Network and John R. Dilworth. This project does not distribute copyrighted content and encourages users to support official releases.

### Fair Use
- Educational content and analysis
- Transformative fan content
- No commercial use
- Proper attribution to original creators

## Contributing

### Guidelines
1. Follow existing code style and conventions
2. Test changes thoroughly before submitting
3. Document new features and components
4. Respect copyright and fair use principles

### Development Process
1. Fork the repository
2. Create feature branch
3. Make changes with proper testing
4. Submit pull request with detailed description

## Technical Implementation

### Frontend Architecture
- **Vanilla JavaScript**: No framework dependencies for fast loading
- **Modular Design**: Separate files for different functionalities
- **Event-Driven**: Efficient event handling for user interactions
- **Lazy Loading**: Characters loaded only when section is visible
- **Intersection Observer**: Performance-optimized viewport detection

### Data Management
- **JSON Storage**: Structured data files for characters and recipes
- **Client-Side Processing**: All data processing handled in browser
- **Search Implementation**: Real-time filtering without server requests
- **State Management**: Efficient handling of UI states and user preferences

### Performance Optimizations
- **Asset Optimization**: Compressed images and optimized file sizes
- **Code Splitting**: Modular loading of JavaScript components
- **Caching Strategy**: Service worker for offline functionality
- **Memory Management**: Efficient DOM manipulation and cleanup

## Project Statistics

### Content Metrics
- **Characters**: 200+ detailed character entries
- **Recipes**: 8 complete recipes with instructions
- **Assets**: 40+ image files and media assets
- **Pages**: 8 main HTML pages
- **Code Files**: Primarily single-page application with modular JavaScript

### Technical Metrics
- **Total Files**: 60+ files in organized structure
- **Database Entries**: JSON-based character and recipe data
- **Responsive Breakpoints**: Mobile, tablet, and desktop optimized
- **Browser Support**: Modern browsers with ES6+ support

## Future Enhancements

### Content Expansion
- **Episode Guide**: Complete episode database with summaries
- **Location Database**: Detailed information about Nowhere locations
- **Quote Collection**: Memorable quotes from characters
- **Trivia Section**: Fun facts and behind-the-scenes information

### Technical Improvements
- **Search Enhancement**: Advanced filtering and sorting options
- **Offline Mode**: Enhanced PWA capabilities
- **Performance**: Further optimization for mobile devices
- **Accessibility**: WCAG compliance improvements

## Development Notes

### Code Organization
- **Main Logic**: `index.html` contains the primary application code
- **Data Files**: JSON files in `/json/` directory for structured content
- **Styling**: Inline CSS with Tailwind CDN for rapid development
- **Assets**: Organized in `/assets/` with descriptive naming

### Key Features Implementation
- **Character Search**: Real-time filtering using JavaScript array methods
- **Modal System**: Dynamic content loading with smooth transitions
- **Responsive Design**: CSS Grid and Flexbox for layout
- **PWA Features**: Service worker and manifest for app-like experience

## Support & Contact

### Issues & Bugs
- Report issues via GitHub Issues with detailed reproduction steps
- Include browser version, device information, and screenshots
- Check existing issues before creating new ones

### Feature Requests
- Submit feature requests with detailed descriptions and use cases
- Consider implementation complexity and project scope
- Provide mockups or examples when possible

### Development Contributions
- Fork the repository and create feature branches
- Follow existing code style and conventions
- Test changes thoroughly before submitting pull requests
- Update documentation for new features

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Licenses
- **Tailwind CSS**: MIT License
- **Chart.js**: MIT License
- **Font Awesome**: Font Awesome Free License

## Acknowledgments

- **John R. Dilworth**: Creator of Courage the Cowardly Dog
- **Cartoon Network**: Original broadcaster
- **Community Contributors**: Fan art and content creators
- **Open Source Libraries**: All the amazing tools that made this possible

## Browser Compatibility

### Supported Browsers
- **Chrome**: 80+ (recommended)
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+

### Required Features
- ES6+ JavaScript support
- CSS Grid and Flexbox
- Intersection Observer API
- Service Worker support (for PWA features)

---

**Made with love by fans, for fans**

*"The things I do for love!" - Courage*

**Live Site**: [courage-networks.pages.dev](https://courage-networks.pages.dev/)

License [MIT](https://mit-license.pages.dev/)