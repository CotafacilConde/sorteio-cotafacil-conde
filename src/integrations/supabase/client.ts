// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://spoxyvyfsadkagwtiahx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwb3h5dnlmc2Fka2Fnd3RpYWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwOTUzOTYsImV4cCI6MjA2NzY3MTM5Nn0.kqGCSEIvTIcmJKXh3FVYAXqmdUl13aPIBCJ3lVoJGtE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});