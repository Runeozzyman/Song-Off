import express from 'express';
import { ai } from "../config/gemini_config.js";

const router = express.Router();


router.get("/test" , async (req,res) => {
   const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Hello _ _ _ _ _ !",
   });

   res.json(response.text);
});

export default router;




