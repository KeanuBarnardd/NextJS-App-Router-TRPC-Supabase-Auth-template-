# NextJS 15 App Router TRPC Supabase Auth Template

This is a super simple starter template using Next.js 15, tRPC, Supabase Auth, and Tailwind CSS. It’s meant to be a clean base with the basics set up — auth, route protection, and type-safe APIs.

Nothing fancy, just a solid starting point so you can jump straight into building and add whatever packages or features you need.

## Features

- 🔐 **Authentication** - Complete auth flow with Supabase (login, signup, logout)
- 🎯 **Type Safety** - End-to-end type safety with tRPC
- 🚀 **Next.js 15** - Latest App Router features and optimizations
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔒 **Protected Routes** - Middleware-based route protection

## Prerequisites

- npm or yarn
- Supabase account

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/nextjs-15-app-router-supabase-auth-template.git
cd nextjs-15-app-router-supabase-auth-template
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Copy the example environment file and update it with your Supabase credentials:

```bash
cp .env.local.example .env.local
```

Update the following variables in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (protected)/       # Protected routes
│   ├── api/              # API routes
│   ├── auth/             # Auth callback routes
│   ├── error/            # Error handling
│   ├── login/            # Login page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
├── public/              # Static assets
├── supabase/           # Supabase client configuration
├── trpc/               # tRPC configuration and routers
├── middleware.ts       # Next.js middleware for auth
└── next.config.ts      # Next.js configuration
```

## Authentication Flow

1. **Sign Up**: Users can create an account with email and password
2. **Login**: Existing users can log in with their credentials
3. **Protected Routes**: Middleware ensures only authenticated users can access protected routes
4. **Logout**: Users can securely log out of their session

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Feel free to take this and do as you please 👌😁


## Made with
- [Next.js](https://nextjs.org/)
- [tRPC](https://trpc.io/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
