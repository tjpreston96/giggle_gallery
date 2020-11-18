console.log(`sanity check`);

/*-------------------------------- Constants --------------------------------*/
const colorScheme = {
    dark: '',
    change: function () {
        colorScheme.dark = colorScheme.dark ? '' : 'dark';
        body.setAttribute('class', colorScheme.dark)
    },
}
/*---------------------------- Variables (state) ----------------------------*/

const jokes = []

/*------------------------ Cached Element References ------------------------*/
const norrisBtn = document.getElementById('norrisBtn');
const genBtn = document.getElementById('genBtn')
const progBtn = document.getElementById('progBtn')
const container = document.getElementById('containerDiv')
const lightDarkBtn = document.getElementById('lightDarkButton')
const body = document.getElementById('')


/*----------------------------- Event Listeners -----------------------------*/
norrisBtn.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let newJoke = {}
        newJoke['category'] = 'Norris'
        newJoke['joke'] = data.value
        jokes.push(newJoke)
        render()
    })
    .catch((err) => {
        console.log(err)
    })
})

genBtn.addEventListener('click', () => {
    fetch('https://official-joke-api.appspot.com/jokes/general/random')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let newJoke = {}
        newJoke['category'] = data.type
        newJoke['joke-p1'] = data.setup
        newJoke['joke-p2'] = data.punchline
        jokes.push(newJoke)
        render()
    })
    .catch((err) => {
        console.log(err)
    })
})

progBtn

lightDarkBtn.addEventListener('click', colorScheme.change)


// This is where you should put the event listener
// for a mouse-click

/*-------------------------------- Functions --------------------------------*/

function appendDiv (joke, category, idx){
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `
                        <div class="card h-100" id="${category.toLowerCase()}">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <header class='blockquote-header'>${category}</header>
                                    <p>${joke}</p>
                                </blockquote>
                            </div>
                            <button id = 'delButton' class='btn' onClick={deleteJoke(${idx})}>X</button>
                        </div>    
                        `
    container.appendChild(newDiv)
}


function render() {
    container.innerHTML = ""
    jokes.forEach((joke, idx) => {
        appendDiv(joke["joke"], joke["category"], idx)
    })
}

function appendDiv2 (category, setup, punchline, idx){
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `
                        <div class="card h-100" id="${category.toLowerCase()}">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <header class='blockquote-header'>${category}</header>
                                    <p>${setup}</p>
                                    <p>${punchline}</p>
                                </blockquote>
                            </div>
                            <button id = 'delButton' class='btn' onClick={deleteJoke(${idx})}>X</button>
                        </div>    
                        `
    container.appendChild(newDiv)
}

function render2() {
    container.innerHTML = ""
    jokes.forEach((joke, idx) => {
        appendDiv(joke["setup"],joke["punchline"], joke["category"], idx)
    })
}
function deleteJoke(idx) {
    jokes.splice(idx, 1)
    render()
}