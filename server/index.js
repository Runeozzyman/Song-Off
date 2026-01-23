import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const router = express.Router();
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/' , (req, res) =>{
    res.json('root port')
});

app.get('/testAPI' , (req, res) => {
    res.json({message: 'backend worky'});
});


app.listen(PORT, () => {
    console.log("server is running");
});