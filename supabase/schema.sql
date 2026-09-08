-- ==========================================
-- Supabase Schema & RLS Policies (V3)
-- ==========================================

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  count INT DEFAULT 0,
  group_key TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Users Table (Extends Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  display_name TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Components Table
CREATE TABLE IF NOT EXISTS public.components (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE, -- e.g. "btn-primary-01"
  author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  code TEXT NOT NULL,
  prompt TEXT,
  preview_kind TEXT,
  category_slug TEXT REFERENCES public.categories(slug) ON DELETE CASCADE NOT NULL,
  tags TEXT[] DEFAULT '{}',
  is_public BOOLEAN DEFAULT true,
  featured INT DEFAULT 0,
  likes_count INT DEFAULT 0,
  views_count INT DEFAULT 0,
  parent_id UUID REFERENCES public.components(id) ON DELETE SET NULL, -- for remixes
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Component Likes
CREATE TABLE IF NOT EXISTS public.component_likes (
  component_id UUID REFERENCES public.components(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (component_id, user_id)
);

-- 5. Component Views
CREATE TABLE IF NOT EXISTS public.component_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  component_id UUID REFERENCES public.components(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  session_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- RLS (Row Level Security) Policies
-- ==========================================

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.components ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.component_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.component_views ENABLE ROW LEVEL SECURITY;

-- Categories: Anyone can read
CREATE POLICY "Categories are viewable by everyone" ON public.categories FOR SELECT USING (true);

-- Profiles: Anyone can read, only owner can update
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Components: Anyone can read public components
CREATE POLICY "Public components are viewable by everyone" ON public.components FOR SELECT USING (is_public = true);
CREATE POLICY "Users can view their own private components" ON public.components FOR SELECT USING (auth.uid() = author_id);
CREATE POLICY "Users can insert their own components" ON public.components FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Users can update their own components" ON public.components FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Users can delete their own components" ON public.components FOR DELETE USING (auth.uid() = author_id);

-- Likes: Anyone can read likes, authenticated users can like/unlike
CREATE POLICY "Component likes are viewable by everyone" ON public.component_likes FOR SELECT USING (true);
CREATE POLICY "Users can like a component" ON public.component_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can unlike a component" ON public.component_likes FOR DELETE USING (auth.uid() = user_id);

-- Views: Anyone can insert a view
CREATE POLICY "Anyone can record a view" ON public.component_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Only admins/system can read all views" ON public.component_views FOR SELECT USING (auth.uid() IS NOT NULL);
