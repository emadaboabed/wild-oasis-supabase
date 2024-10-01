import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vdzxbadpaqhbkqhsqnsh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkenhiYWRwYXFoYmtxaHNxbnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3MzEzNjYsImV4cCI6MjAzOTMwNzM2Nn0.sqlS5u6MU2yRpHiKiPG5WSsVWH9UGjAUXQuP6p0WKjc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
