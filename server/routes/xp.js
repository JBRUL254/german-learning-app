import express from "express";
import { createClient } from "@supabase/supabase-js";
import { config } from "../config.js";

const router = express.Router();
const supabase = createClient(config.supabaseUrl, config.supabaseKey);

router.post("/update", async (req, res) => {
  const { user_id, xp } = req.body;

  const { data, error } = await supabase
    .from("users")
    .update({ xp })
    .eq("id", user_id);

  if (error) return res.status(500).json(error);
  res.json(data);
});

export default router;
