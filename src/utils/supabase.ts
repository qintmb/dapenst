import { createClient } from '@supabase/supabase-js';

// Tipe data untuk berita
export interface Berita {
  id: number;
  judul: string;
  narasi: string;
  tanggal: string;
  foto_url: string;
  created_at?: string;
}

// URL dan anon key Supabase dari environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example-anon-key';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example-service-key';

// Client untuk operasi publik (read-only)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client untuk operasi admin (CRUD penuh)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);