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

    submitCompliment: (req, res) => {
        const compliment = req.body.compliment
        const motivationLevel = req.body.motivationLevel

        const newComp = {
            compliment: compliment,
            motivationLevel: +motivationLevel
        }

        database.push(newComp)

        res.status(200).send(database)

    },

    getNewCompliments: (req, res) => {
        res.status(200).send(database)
    },

    deleteCompliment: (req, res) => {
        const compliment = req.query.compliment

        let matchingCompIndex
        for (let i = 0; i < database.length; i++) {
            if (database[i].compliment === compliment) {
                matchingCompIndex = i
                database.splice(i, 1)
                break
            }
        }

        if (matchingCompIndex !== undefined) {
            res.status(200).send(database)
        } else {
            res.status(400).send('No matching compliment found')
        }
    },

    increaseMotivation: (req, res) => {
        const compliment = req.params.compliment

        let matchingComplimentObject
        for (let i = 0; i < database.length; i++) {
            if (database[i].compliment === compliment) {
                matchingComplimentObject = database[i]
                database[i].motivationLevel += 1
                break;
            }
        }

        if (matchingComplimentObject) {
            res.status(200).send(database)
        } else {
            res.status(400).send('This compliment does not exist')
        }
    },

    decreaseMotivation: (req, res) => {
        const compliment = req.params.compliment

        let matchingComplimentObject
        for (let i = 0; i < database.length; i++) {
            if (database[i].compliment === compliment) {
                matchingComplimentObject = database[i]
                database[i].motivationLevel -= 1
                break;
            }
        }

        if (matchingComplimentObject) {
            res.status(200).send(database)
        } else {
            res.status(400).send('This compliment does not exist')
        }
    }

    

}