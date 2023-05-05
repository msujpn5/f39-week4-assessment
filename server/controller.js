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

        const newObj = {
            compliment: compliment
        }

        database.push(newObj)

        res.status(200).send(database)
    }

    

}