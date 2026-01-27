import express from 'express';
import { ai } from "../config/gemini_config.js";

const router = express.Router();


router.get("/health", async (req,res) => {
    res.json({status: "gemini backend healthy"});
})

router.post("/compare" , async (req,res,next) => {

    console.log("request body:", req.body);

    try{

    const {answerA, answerB, theme} = req.body;

    if(!answerA || !answerB){
        return res.status(400).json({
            error: "Both answers are required"
        });
    }


    const prompt = `
    Compare the following two answers:
    
    Answer A:
    ${answerA}
    
    Answer B:
    ${answerB}

    Choose the song that more accurately fits this theme: ${theme}
    Respond with simply either A or B, respectively for the song that fits better. No explanation, just a single character.

    `;

    const result = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
   });

        const raw =
            result.candidates[0].content.parts[0].text
            .trim()
            .toUpperCase();


        res.json({winner: raw});

    } catch (err){
        next(err);
    }

});



export default router;




