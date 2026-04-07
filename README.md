# Agentforce Marketing — Landing Page

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?style=flat&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat&logo=typescript)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react)

A modern, animated marketing landing page built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

[Demo](https://agentforce-rho.vercel.app) · [Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started)

</div>

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
│   │   ├── faq.tsx               # FAQ accordion
│   │   ├── logo-cloud.tsx        # Logo marquee
│   │   └── mode-toggle.tsx       # Theme toggle button
│   ├── lib/
│   │   └── utils.ts              # Utility functions (cn helper)
│   ├── providers/
│   │   └── theme-provider.tsx    # Dark/light mode provider
│   ├── globals.css               # Global styles & Tailwind v4 config
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   └── ui/
│       └── dotted-glow-background.tsx  # Background effect component
├── public/                       # Static assets & images
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

---

## 🎨 Customization

- **Colors & Theme** — Edit design tokens in `app/globals.css`
- **Content** — Each section component is self-contained — edit them individually in `app/components/`
- **Dark Mode** — Theme switching is handled by `ModeToggle` component using `next-themes`

---

## 📦 Deployment

Deploy easily to **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/agentforce-marketing)

Or build and run anywhere with Node.js:

```bash
npm run build
npm run start
```

---

## 📄 License

MIT License — feel free to use this project for your own purposes.