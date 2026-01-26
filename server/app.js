import "dotenv/config";
import express from 'express';
import cors from 'cors';
import gemini_api from "./routes/gemini_api.js";

const router = express.Router();
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());



app.use("/api/evaluate", gemini_api);


app.get('/' , (req, res) =>{
    res.json('root port')
});
 
app.listen(PORT);

export default app;