import express from "express";
import { createClient } from "@supabase/supabase-js";
import { config } from "../config.js";

const router = express.Router();
const supabase = createClient(config.supabaseUrl, config.supabaseKey);

router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("flashcards").select("*");
  if (error) return res.status(500).json(error);
  res.json(data);
});

export default router;
