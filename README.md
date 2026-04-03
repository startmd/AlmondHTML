# Almond

A free, open-source project management dashboard template built with Tailwind CSS and Alpine.js.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Dashboard with project stats, cards, and activity feed |
| `kanban.html` | Drag-and-drop kanban board with 5 columns and add-task modal |
| `settings.html` | Project settings form with progress tracking |
| `login.html` | Login page with demo credentials |
| `register.html` | Registration page with validation |
| `forgot-password.html` | Password reset request page |

## Tech Stack

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Alpine.js](https://alpinejs.dev/) - Lightweight JavaScript framework for interactivity
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Inter](https://fonts.google.com/specimen/Inter) - Google Font

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the template in your browser at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Outputs static files to the `dist/` directory.

```bash
npm run preview
```

Previews the production build locally.

## Project Structure

```
almond-template/
  index.html          # Dashboard
  kanban.html         # Kanban board
  settings.html       # Project settings
  login.html          # Login
  register.html       # Registration
  forgot-password.html # Password reset
  src/
    css/main.css      # Tailwind entry point
    js/main.js        # Alpine.js initialization
  tailwind.config.js  # Tailwind configuration
  vite.config.js      # Vite configuration
  postcss.config.js   # PostCSS configuration
```

## Demo Credentials

- **Email:** demo@almond.com
- **Password:** password

## Customization

### Colors

Edit `tailwind.config.js` to change the color palette:

- `almond` - Warm cream background tones
- `primary` - Green accent color
- `brown` - Dark secondary navigation
- `cream` - Light text for dark backgrounds

### Adding Pages

1. Create a new `.html` file in the project root
2. Include the standard `<head>` block (fonts, Vite assets)
3. Import the CSS: `<link rel="stylesheet" href="/src/css/main.css">`
4. Import the JS: `<script type="module" src="/src/js/main.js"></script>`

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## License

[MIT](LICENSE)
