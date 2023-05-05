const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, submitCompliment, getNewCompliments, deleteCompliment, increaseMotivation, decreaseMotivation} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune)
app.post('/api/submit-compliment', submitCompliment)
app.get("/api/get-newCompliments", getNewCompliments)
app.delete('/api/delete-compliment', deleteCompliment)
app.put('/api/increase-motivation', increaseMotivation)
app.put('/api/decrease-motivation', decreaseMotivation)

app.listen(4000, () => console.log("Server running on 4000"));
