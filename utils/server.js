// server.js
import express from "express";
import cors from "cors";
import multer from "multer";
import fetch from "node-fetch";
import fs from "fs";

const app = express();
const upload = multer({ dest: "uploads/" });
app.use(cors());

app.post("/api/recognize", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const image = fs.readFileSync(req.file.path);

    const response = await fetch(
      "https://api-inference.huggingface.co/models/jacques7103/food-recognition",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer ", // <--- YOUR TOKEN
          "Content-Type": "application/octet-stream",
        },
        body: image,
      }
    );

    const result = await response.json();
    fs.unlinkSync(req.file.path); // cleanup temp file

    res.json(result);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
