# Ocean Catch - Dry Fish Wholesale Business Website

A modern, responsive website for a dry fish wholesale business built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern UI Design** - Clean, premium design with ocean-inspired color scheme
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Built with Next.js 14 App Router for optimal performance
- 🎭 **Smooth Animations** - Framer Motion animations for engaging user experience
- 🎯 **SEO Optimized** - Proper metadata and semantic HTML

## Pages

- **Home** - Hero section with company tagline and call-to-action buttons
- **Products** - Grid layout showcasing various dry fish products with wholesale pricing
- **About** - Company story, mission, values, and team information
- **Contact** - Contact form, Google Map embed, phone number, and WhatsApp button

## Components

- `Navbar` - Sticky navigation bar with mobile menu
- `Footer` - Footer with social links and quick navigation
- `HeroSection` - Hero section with background image and CTA buttons
- `ProductCard` - Reusable product card component
- `ContactForm` - Contact form with validation

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
dry-fish-wholesale/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── data/
│   └── products.json
└── public/
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:
- **Ocean Blue** - Primary brand color
- **Sandy Beige** - Background and accent color
- **Coral** - Call-to-action and highlight color

### Products

Edit `/data/products.json` to update product listings.

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

## Build for Production

```bash
npm run build
npm start
```

## License

This project is private and proprietary.

