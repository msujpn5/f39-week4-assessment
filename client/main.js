const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const postForm = document.getElementById('post-form')
const postCompliment = document.getElementById('post-compliment')
const postMotivationLevel = document.getElementById('post-motivationLevel')
const displayDiv = document.getElementById('display')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

postForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let compBod = {
        compliment: postCompliment.value,
        motivationLevel : postMotivationLevel.value
    }

    axios.post('http://localhost:4000/api/submit-compliment', compBod)
    .then((res) => {
        const database = res.data
        showDatabase(database)
        postCompliment.value = ''
        postMotivationLevel.value = ''
    })
    .catch((err) => {
        console.log(err)
    })
})

function showDatabase(db) {
    displayDiv.innerHTML = ''


    if(db.length === 0) {
        let dataP = document.createElement('p')
        dataP.innerHTML = 'No compliments yet...'
        displayDiv.appendChild(dataP)
        return
    }

    for (let i = 0; i < db.length; i++) {
        let dataP = document.createElement('p')


        dataP.innerHTML = `${db[i].compliment} has a motivation level of ${db[i].motivationLevel}`

        displayDiv.appendChild(dataP)

    }
}


function getDatabaseForDisplay() {
    axios.get('http://localhost:4000/api/get-newCompliments')
    .then((response) => {
        showDatabase(response.data)
    })
    .catch((err) => {
        showDatabase(err.response.data)
        console.log(err)
    })
}