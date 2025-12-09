import express from "express";
import cors from "cors";
import { config } from "./config.js";
import lessonsRoute from "./routes/lessons.js";
import flashcardsRoute from "./routes/flashcards.js";
import chatRoute from "./routes/chat.js";
import xpRoute from "./routes/xp.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "German Learning App API working 🎉" });
});

app.use("/lessons", lessonsRoute);
app.use("/flashcards", flashcardsRoute);
app.use("/chat", chatRoute);
app.use("/xp", xpRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server running on " + port));
                                   
