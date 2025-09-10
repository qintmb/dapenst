import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Client for public usage (client-side)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client for admin operations (server-side)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

// Type definitions for Berita
export type Berita = {
  id: string;
  created_at: string;
  tanggal: string;
  judul: string;
  narasi: string;
  foto_url: string;
};