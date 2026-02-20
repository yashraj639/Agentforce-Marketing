# Agentforce Marketing — Landing Page

> A modern, animated marketing landing page built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Features

- **Hero Section** — Bold headline with CTA buttons and a hero image showcase
- **Logo Cloud** — Social proof marquee of partner/client logos
- **Features Sections** — Three distinct, richly animated feature breakdowns
- **Speed Section** — Performance / value highlight block
- **Outcomes Section** — Results-driven section with outcome cards
- **Pricing Section** — Clear, conversion-focused pricing tiers
- **FAQ Section** — Accordion-style frequently asked questions
- **Responsive Navbar** — Desktop nav + animated mobile drawer with blur backdrop
- **Dark / Light Mode** — System-aware theme toggle powered by `next-themes`
- **Smooth Animations** — Page-wide micro-animations via Framer Motion (`motion/react`)

---

## 🛠 Tech Stack

| Tool                                                      | Purpose                      |
| --------------------------------------------------------- | ---------------------------- |
| [Next.js 16](https://nextjs.org)                          | React framework (App Router) |
| [Tailwind CSS v4](https://tailwindcss.com)                | Utility-first styling        |
| [Framer Motion](https://motion.dev)                       | Animations & transitions     |
| [Radix UI](https://www.radix-ui.com)                      | Accessible UI primitives     |
| [Lucide React](https://lucide.dev)                        | Icon library                 |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark / light mode            |
| [class-variance-authority](https://cva.style)             | Component variant management |
| TypeScript                                                | Type safety                  |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **18+**
- npm / yarn / pnpm / bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/agentforce-marketing.git
cd agentforce-marketing

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── navbar.tsx            # Responsive navbar (desktop + mobile drawer)
│   │   ├── hero.tsx              # Hero section
│   │   ├── logo-cloud.tsx        # Logo marquee
│   │   ├── features/             # Primary features section
│   │   ├── features-secondary/   # Secondary features section
│   │   ├── features-third/       # Third features section
│   │   ├── speed.tsx             # Speed / performance highlight
│   │   ├── outcomes/             # Outcomes section
│   │   ├── pricing.tsx           # Pricing tiers
│   │   ├── faq.tsx               # FAQ accordion
│   │   ├── footer.tsx            # Site footer
│   │   └── ui/                   # Shared UI primitives (Button, etc.)
│   ├── globals.css               # Global styles & Tailwind base
│   ├── layout.tsx                # Root layout with theme provider
│   └── page.tsx                  # Home page assembly
├── public/                       # Static assets & images
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 🎨 Customization

- **Colors & Theme** — Edit design tokens in `app/globals.css`
- **Nav Links** — Update the `navLinks` array in `app/components/navbar.tsx`
- **Content** — Each section component is self-contained — edit them individually in `app/components/`
- **Dark Mode** — Theme switching is handled by the `ModeToggleButton` component using `next-themes`

---

## 📦 Deployment

The easiest way to deploy is with **Vercel**:

[![Deployed on Vercel](https://agentforce-rho.vercel.app/)]

Or use any platform that supports Node.js:

```bash
npm run build
npm run start
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
