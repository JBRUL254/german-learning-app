import express from "express";
import OpenAI from "openai";
import { config } from "../config.js";

const router = express.Router();
const openai = new OpenAI({ apiKey: config.openaiKey });

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a friendly German tutor." },
        { role: "user", content: message }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
