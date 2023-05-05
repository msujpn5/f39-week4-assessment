const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const postForm = document.getElementById('post-form')
const postCompliment = document.getElementById('post-compliment')


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
        compliment: postCompliment.value
    }

    axios.post('http://localhost:4000/submit-compliment', compBod)
    .then((res) => {
        const database = res.data
        showDatabase(database)
        postCompliment.value = ''
    })
    .catch((err) => {
        console.log(err)
    })
})