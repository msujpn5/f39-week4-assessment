const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, submitTask, getNewTasks, deleteTask, increaseMotivation, decreaseMotivation} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune)
app.post('/api/submit-task', submitTask)
app.get("/api/get-newTasks", getNewTasks)
app.delete('/api/delete-task', deleteTask)
app.put('/api/increase-motivation/:task', increaseMotivation)
app.put('/api/decrease-motivation/:task', decreaseMotivation)

app.listen(4000, () => console.log("Server running on 4000"));
