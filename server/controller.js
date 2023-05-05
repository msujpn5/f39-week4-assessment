const database = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A pleasant surprise is waiting for you.", "Emulate what you respect in your friends.", "I learn by going where I have to go.", "In the end all things will be known.", "Meditation with an old enemy is advised.", "Pennies from heaven find their way to your doorstep this year!"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    submitTask: (req, res) => {
        const task = req.body.task
        const motivationLevel = req.body.motivationLevel

        const newTask = {
            task: task,
            motivationLevel: +motivationLevel
        }

        database.push(newTask)

        res.status(200).send(database)

    },

    getNewTasks: (req, res) => {
        res.status(200).send(database)
    },

    increaseMotivation: (req, res) => {
        const task = req.params.task

        let matchingTaskObject
        for (let i = 0; i < database.length; i++) {
            if (database[i].task === task && database[i].motivationLevel < 5) {
                matchingTaskObject = database[i]
                database[i].motivationLevel += 1
                break
            } else {
                res.status(400).send('Motivation levels can\'t go higher than 5')
            }
        }

        if (matchingTaskObject) {
            res.status(200).send(database)
        } else {
            res.status(400).send('This task does not exist')
        }
    },

    decreaseMotivation: (req, res) => {
        const task = req.params.task

        let matchingTaskObject
        for (let i = 0; i < database.length; i++) {
            if (database[i].task === task && database[i].motivationLevel > 1) {
                matchingTaskObject = database[i]
                database[i].motivationLevel -= 1
                break
            } else {
                res.status(400).send('Motivation levels can\'t go below 1')
            }
        }

        if (matchingTaskObject) {
            res.status(200).send(database)
        } else {
            res.status(400).send('This task does not exist')
        }
    },

    deleteTask: (req, res) => {
        const task = req.query.task

        let matchingTaskIndex
        for (let i = 0; i < database.length; i++) {
            if (database[i].task === task) {
                matchingTaskIndex = i
                database.splice(i, 1)
                break
            }
        }

        if (matchingTaskIndex !== undefined) {
            res.status(200).send(database)
        } else {
            res.status(400).send('No matching task found')
        }
    }


    

}