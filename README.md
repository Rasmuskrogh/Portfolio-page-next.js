# Rasmus Krogh-Andersen's Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my skills, projects, and professional journey as a Frontend Developer.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**:
  - Animated tech stack showcase
  - Project showcase with priority-based layout
  - Interactive contact form
  - Smooth scrolling navigation
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Dark/Light Mode**: Automatic theme switching based on section background

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Database**: Supabase
- **Deployment**: Vercel

## 📋 Sections

1. **Hero Section**: Introduction with name and role
2. **About Me**: Personal introduction and background
3. **Work Experience**: Professional journey with detailed descriptions
4. **Projects**: Showcase of projects with priority-based layout
5. **Education**: Academic background and relevant courses
6. **Tech Stack**: Interactive display of technical skills and proficiency levels
7. **Contact**: Contact form for direct communication

## 🎨 Design System

- **Colors**:
  - Primary: `#323131` (Dark Gray)
  - Secondary: `#fb6f4c` (Orange)
  - Text: Black/White based on section
- **Typography**:
  - Headings: League Spartan
  - Body: Open Sans
  - Accent: Lato
- **Spacing**: Consistent padding and margins across sections
- **Animations**: Smooth transitions and hover effects

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone [your-repo-url]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your environment variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Project Structure

```
portfolio-page/
├── app/
│   ├── page.tsx              # Main page component
│   └── layout.tsx            # Root layout
├── components/
│   ├── About.tsx             # About section
│   ├── ContactForm.tsx       # Contact form component
│   ├── Education.tsx         # Education section
│   ├── Experience.tsx        # Work experience section
│   ├── Projects/
│   │   ├── ProjectCard.tsx   # Project card component
│   │   └── ProjectArrowWrapper.tsx # Project navigation
│   ├── TechStack.tsx         # Tech stack showcase
│   └── ui/
│       └── Button.tsx        # Reusable button component
├── lib/
│   └── supabase.ts          # Supabase client configuration
├── public/                   # Static assets
└── types/                    # TypeScript type definitions
```

## 🔧 Customization

- Update personal information in the respective component files
- Modify the color scheme in the Tailwind configuration
- Add or remove projects in the Supabase database
- Adjust animations in the Framer Motion components

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions or suggestions, please reach out through the contact form on the website.
