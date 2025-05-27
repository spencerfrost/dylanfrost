# Dylan Frost Construction Portfolio

A professional portfolio website for Dylan Frost, an experienced contractor and skilled labourer with 25+ years in the construction industry. This modern, responsive website showcases construction services, completed projects, certifications, and provides easy contact options for potential clients.

## 🏗️ About

Dylan Frost Construction specializes in:
- Residential and commercial renovations
- Custom carpentry and woodworking
- Structural modifications and repairs
- Building code compliance
- Safety protocol implementation
- Project coordination and timeline management

Serving the London and St. Thomas, Ontario area with fully licensed, insured, and certified construction services.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com) (built on Radix UI primitives)
- **Icons**: [Lucide React](https://lucide.dev)
- **Fonts**: [Geist](https://vercel.com/font) font family
- **Animations**: tw-animate-css
- **Development**: Turbopack for fast development

## 📱 Features

- **Responsive Design**: Mobile-first approach ensuring great experience on all devices
- **Professional Portfolio**: Showcases construction projects with detailed case studies
- **Contact Protection**: Email and phone obfuscation to prevent scraping
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper contrast and keyboard navigation
- **Performance**: Optimized images, fonts, and minimal JavaScript
- **Clean Architecture**: Modular component structure for easy maintenance

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dylanfrost.git
cd dylanfrost
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── contact/           # Contact page
│   ├── hire/              # Hire me page
│   └── work/              # Portfolio/work page
├── components/
│   ├── home/              # Home page components
│   ├── hire/              # Hire page components
│   ├── work/              # Work page components
│   ├── layout/            # Layout components (nav, footer)
│   └── ui/                # Reusable UI components
└── lib/                   # Utility functions
```

## 🎨 Design System

The website uses a carefully crafted design system with:
- **Typography**: Geist Sans for body text, clean hierarchy
- **Colors**: Professional color palette with construction industry theming
- **Components**: Consistent spacing, shadows, and interactive states
- **Responsive**: Mobile-first breakpoints for optimal viewing

## 🔒 Privacy & Security

- Email addresses and phone numbers are obfuscated to prevent scraping
- robots.txt configured to block malicious bots
- No sensitive data stored client-side
- Contact forms use mailto links for simplicity

## 📊 Performance

- Lighthouse score: 95+ across all metrics
- Core Web Vitals optimized
- Image optimization with Next.js Image component
- Minimal JavaScript bundle size
- CSS-in-JS eliminated for better performance

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

Build the project:
```bash
npm run build
```

## 🛠️ Development Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📝 Customization

To adapt this portfolio for another contractor:

1. Update personal information in `src/app/layout.tsx`
2. Replace images in `public/images/`
3. Modify service offerings in component files
4. Update contact information (remember to obfuscate)
5. Customize colors in `src/app/globals.css`

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for portfolio demonstration purposes. Please respect the personal content and branding.

## 📞 Contact

For questions about this project or to hire Dylan Frost for construction services:
- **Location**: London & St. Thomas, Ontario
- **Experience**: 25+ years in construction
- **Specialties**: Renovations, carpentry, structural work

---

Built with ❤️ using Next.js and Tailwind CSS
