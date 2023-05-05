const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const postForm = document.getElementById('post-form')
const postTask = document.getElementById('post-task')
const postMotivationLevel = document.getElementById('post-motivationLevel')
const displayDiv = document.getElementById('display')
const deleteForm = document.getElementById('delete-form')
const deleteTask = document.getElementById('delete-task')
const putForm1 = document.getElementById('put-form1')
const putTask1 = document.getElementById('put-task1')
const putForm2 = document.getElementById('put-form2')
const putTask2 = document.getElementById('put-task2')


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

    let taskBod = {
        task: postTask.value,
        motivationLevel : +postMotivationLevel.value
    }

    axios.post('http://localhost:4000/api/submit-task', taskBod)
    .then((res) => {
        const database = res.data
        showDatabase(database)
        postTask.value = ''
        postMotivationLevel.value = ''
    })
    .catch((err) => {
        console.log(err)
    })
})

deleteForm.addEventListener('submit', (event) => {
    event.preventDefault()
    axios.delete('http://localhost:4000/api/delete-task?task=' + deleteTask.value)
    .then((response) => {
        showDatabase(response.data)
        deleteTask.value = ''
    })
    
    .catch ((err) => {
    console.log(err)
    })

})

putForm1.addEventListener('submit', (event) => {
    event.preventDefault()
    axios.put('http://localhost:4000/api/increase-motivation/' + putTask1.value)
    .then((response) => {
        showDatabase(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
})

putForm2.addEventListener('submit', (event) => {
    event.preventDefault()
    axios.put('http://localhost:4000/api/decrease-motivation/' + putTask2.value)
    .then((response) => {
        showDatabase(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
})


function showDatabase(db) {
    displayDiv.innerHTML = ''


    if(db.length === 0) {
        let dataP = document.createElement('p')
        dataP.innerHTML = 'No tasks yet...'
        displayDiv.appendChild(dataP)
        return
    }

    for (let i = 0; i < db.length; i++) {
        let dataP = document.createElement('p')


        dataP.innerHTML = `${db[i].task} has a motivation level of ${db[i].motivationLevel}`

        displayDiv.appendChild(dataP)

    }
}


function getDatabaseForDisplay() {
    axios.get('http://localhost:4000/api/get-newTasks')
    .then((response) => {
        showDatabase(response.data)
    })
    .catch((err) => {
        showDatabase(err.response.data)
        console.log(err)
    })
}

getDatabaseForDisplay()