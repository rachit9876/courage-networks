# Courage Networks - Fan Website ([Try Now](https://courage-networks.pages.dev/))

A comprehensive fan website dedicated to the animated series "Courage the Cowardly Dog" featuring interactive content, character databases, recipe books, galleries, and more.

## Project Overview

This project is a Progressive Web App (PWA) that serves as an extensive archive and interactive experience for fans of Courage the Cowardly Dog. The website features a dark, pixel-art aesthetic that captures the eerie atmosphere of the show while providing rich content and functionality.

## Features

### Main Website
- **Interactive Terminal Interface** - Pixel-art computer with typing animations
- **Character Database** - Comprehensive information on 200+ characters
- **Episode Guide** - Complete episode listings with search and filtering
- **Villain Gallery** - Detailed information about memorable antagonists
- **Allies & Companions** - Information about helpful characters
- **Thematic Analysis** - Deep dive into the show's psychological themes

### Recipe Book
- **Interactive Cookbook** - Recipes inspired by the show
- **Recipe Scaling** - Adjust serving sizes dynamically
- **Search & Filter** - Find recipes by category or ingredients
- **Farmhouse UI** - Authentic visual design matching the show

### Gallery
- **Image Archive** - Screenshots and artwork from the series
- **Metadata Management** - Organized with CSV-based data structure

### Original Soundtrack (OST)
- **Music Player** - Listen to tracks from the show
- **Track Information** - Detailed metadata for each piece

### Lost Media Archive
- **Documentation** - Information about lost episodes and content
- **Research Database** - Comprehensive tracking of missing material

### Web Game
- **3D Interactive Experience** - Browser-based game with WebGL
- **Performance Optimized** - LOD system, object pooling, texture management
- **Cross-platform** - Works on desktop and mobile browsers

### Research Section
- **Academic Papers** - In-depth analysis of the show
- **Cultural Impact** - Documentation of the series' influence

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS with pixel-art aesthetics
- **Data Visualization**: Chart.js
- **3D Graphics**: WebGL (for web game)
- **Data Storage**: CSV files, JSON
- **PWA Features**: Service Worker, Web App Manifest
- **Fonts**: Google Fonts (Special Elite)

## Project Structure

```
courage-networks/
├── assets/                     # Images and media files
│   ├── courage.png            # Character images
│   ├── house.png              # Location images
│   └── ...                    # Various show assets
├── cookbook/                   # Recipe book section
│   ├── app.js                 # Recipe functionality
│   ├── book.html              # Recipe book interface
│   ├── courage_cookbook.json  # Recipe data
│   └── style.css              # Recipe book styles
├── CSV/                       # Structured data files
│   ├── allcharacters.csv      # Character database
│   ├── gallery.csv            # Image metadata
│   ├── lost_media.csv         # Lost content tracking
│   └── OST.csv                # Soundtrack information
├── notifications/             # Notification system
│   ├── acknowledge.js         # User acknowledgments
│   ├── sorry.js               # Error notifications
│   ├── webGame.js             # Game notifications
│   └── welcome.js             # Welcome messages
├── researchPaper/             # Academic content
│   ├── ResearchPaper.docx     # Research document
│   └── ResearchPaper.pdf      # PDF version
├── Thumbnails/                # Preview images
├── webGame/                   # 3D web game
│   ├── game.js                # Core game logic
│   ├── lod.js                 # Level of detail system
│   ├── object-pool.js         # Performance optimization
│   ├── performance.js         # Performance monitoring
│   ├── texture-manager.js     # Texture handling
│   ├── index.html             # Game entry point
│   ├── style.css              # Game styles
│   └── *.glb                  # 3D model assets
├── index.html                 # Main landing page
├── gallery.html               # Image gallery
├── house.html                 # Virtual house tour
├── lostmedia.html             # Lost media archive
├── ost.html                   # Soundtrack player
├── quiz.html                  # Interactive quiz
├── research.html              # Research papers
├── stream.html                # Video content
├── manifest.json              # PWA manifest
├── sw.js                      # Service worker
├── pwa-install.js             # PWA installation
└── developer_guide.md         # Technical documentation
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd courage-networks
   ```

2. **Start a local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

### Development Setup

1. **File Structure**: Maintain the existing directory structure
2. **Data Files**: CSV files in the `CSV/` directory contain structured data
3. **Assets**: Images and media files are organized in the `assets/` directory
4. **Styling**: Custom CSS follows pixel-art aesthetic principles

## Data Management

The project uses CSV files for structured data management:

### Character Data (`CSV/allcharacters.csv`)
```csv
Character,Role/Description,Appearance,Behavior
Courage,Main protagonist,Pink dog,Cowardly but heroic
Muriel Bagge,Courage's owner,Elderly Scottish woman,Kind and caring
...
```

### Gallery Data (`CSV/gallery.csv`)
```csv
Image,Description,Category,Episode
courage.png,Main character portrait,Characters,Multiple
house.png,Bagge farmhouse,Locations,Multiple
...
```

## Design System

### Color Palette
- **Background**: Black (`#000000`)
- **Cards**: Dark Gray (`#333333`)
- **Primary Accent**: Pink (`#fdc3ed`)
- **Secondary Text**: Light Gray (`#cccccc`)
- **Horror Accent**: Red/Purple tones

### Typography
- **Primary Font**: 'Special Elite' (Google Fonts)
- **Fallback**: Monospace fonts for pixel aesthetic

### UI Components
- **Pixel Buttons**: 8-bit style interactive elements
- **Computer Terminal**: Retro computing interface
- **Character Cards**: Hover-reveal information cards
- **Modal Dialogs**: Detailed character information

## Key Features Implementation

### Terminal Typing Effect
```javascript
function typeText(element, text, speed = 100) {
    element.innerHTML = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
```

### Dynamic Content Loading
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadContent();
        }
    });
});
```

### CSV Data Processing
```javascript
async function loadCharacters() {
    const response = await fetch('CSV/allcharacters.csv');
    const csvText = await response.text();
    const lines = csvText.split('\n');
    return lines.slice(1).map(line => {
        const values = line.split(',');
        return {
            name: values[0]?.trim(),
            role: values[1]?.trim(),
            appearance: values[2]?.trim(),
            behavior: values[3]?.trim()
        };
    });
}
```

## Progressive Web App (PWA)

### Features
- **Offline Functionality**: Service worker caches essential resources
- **Installable**: Can be installed on mobile devices and desktops
- **Responsive Design**: Optimized for all screen sizes
- **App-like Experience**: Standalone display mode

### Manifest Configuration
```json
{
  "name": "Courage Fan Page",
  "short_name": "Courage",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#000000"
}
```

## Web Game

The integrated web game features:
- **3D Graphics**: WebGL-based rendering
- **Performance Optimization**: LOD system, object pooling
- **Cross-platform**: Desktop and mobile support
- **Asset Management**: Efficient texture and model loading

### Game Architecture
- **Core Logic**: `game.js` - Main game loop and logic
- **Performance**: `performance.js` - Monitoring and optimization
- **Assets**: `texture-manager.js` - Resource management
- **Optimization**: `object-pool.js` - Memory management

## Search and Filtering

### Character Search
- Real-time filtering of 200+ characters
- Search by name, role, or behavior
- Lazy loading for performance

### Episode Guide
- Season-based filtering
- Episode search by title or description
- Responsive table design

### Recipe Search
- Category-based filtering
- Ingredient search
- Dynamic recipe scaling

## Performance Optimization

### Techniques Used
- **Lazy Loading**: Images and content load on demand
- **Intersection Observer**: Efficient viewport detection
- **CSV Caching**: Data loaded once and cached
- **Debounced Search**: Reduced API calls during typing
- **Optimized Images**: Compressed assets for faster loading

### Web Game Optimization
- **Level of Detail (LOD)**: Reduced complexity for distant objects
- **Object Pooling**: Reuse objects to reduce garbage collection
- **Texture Management**: Efficient GPU memory usage
- **Performance Monitoring**: Real-time performance metrics

## Security and Privacy

### Content Policy
- **Fan Content**: All content is fan-created and educational
- **Copyright Compliance**: No distribution of copyrighted episodes
- **Attribution**: Proper credit to original creators
- **Disclaimer**: Clear copyright disclaimer included

### Data Handling
- **No Personal Data**: No collection of user personal information
- **Local Storage**: Minimal use of browser storage
- **No Tracking**: No analytics or tracking scripts

## Browser Compatibility

### Supported Browsers
- **Chrome**: 80+
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+

### Mobile Support
- **iOS Safari**: 13+
- **Chrome Mobile**: 80+
- **Samsung Internet**: 12+

## Deployment

### Production Checklist
1. **Optimize Assets**: Compress images and minify code
2. **Test PWA**: Verify service worker and manifest
3. **Cross-browser Testing**: Test on all supported browsers
4. **Performance Audit**: Run Lighthouse audits
5. **Security Headers**: Configure appropriate HTTP headers

### Hosting Requirements
- **Static Hosting**: Can be hosted on any static file server
- **HTTPS**: Required for PWA features
- **MIME Types**: Proper configuration for audio/video files
- **Compression**: Gzip/Brotli compression recommended

## Contributing

### Development Guidelines
1. **Code Style**: Follow existing patterns and conventions
2. **Testing**: Test on multiple browsers and devices
3. **Documentation**: Update documentation for new features
4. **Performance**: Consider performance impact of changes

### Adding Content
1. **Characters**: Add to `CSV/allcharacters.csv`
2. **Images**: Place in appropriate `assets/` subdirectory
3. **Recipes**: Update `cookbook/courage_cookbook.json`
4. **Episodes**: Modify episode data structures

## License and Legal

### Copyright Notice
This is a fan-made website created for educational and entertainment purposes. All original content and characters belong to their respective copyright holders.

### Fair Use
This project operates under fair use principles:
- **Educational Purpose**: Provides information about the series
- **No Commercial Use**: Non-profit fan project
- **Transformative Content**: Original analysis and presentation
- **No Episode Distribution**: Does not distribute copyrighted episodes

## Troubleshooting

### Common Issues

**Images Not Loading**
- Check file paths and case sensitivity
- Verify image formats (PNG, JPG, SVG supported)
- Check browser console for 404 errors

**JavaScript Errors**
- Ensure all dependencies are loaded
- Check browser console for specific errors
- Verify CSV file formatting

**PWA Installation Issues**
- Ensure HTTPS is enabled
- Check manifest.json validity
- Verify service worker registration

**Performance Issues**
- Monitor network tab for large resources
- Check for memory leaks in web game
- Optimize image sizes and formats

## Support

For technical issues or questions:
1. Check the `developer_guide.md` for detailed technical information
2. Review browser console for error messages
3. Test in different browsers to isolate issues
4. Check network connectivity for CSV loading issues

## Future Enhancements

### Planned Features
- **Multi-language Support**: Internationalization
- **User Accounts**: Save favorites and progress
- **Interactive Timeline**: Episode chronology
- **Enhanced Game**: Additional game modes
- **Community Features**: User-generated content

### Technical Improvements
- **Performance**: Further optimization
- **Accessibility**: Enhanced screen reader support
- **SEO**: Improved search engine optimization
- **Analytics**: Privacy-focused usage analytics

---

**Created by**: @rachit.zip  
**Last Updated**: 2024  
**Version**: 5.3

*This project is a labor of love for fans of Courage the Cowardly Dog. It aims to preserve and celebrate the unique artistry and storytelling of this beloved animated series.*