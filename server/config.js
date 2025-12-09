import dotenv from "dotenv";
dotenv.config();

export const config = {
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_SERVICE_ROLE,
  openaiKey: process.env.OPENAI_KEY
};
