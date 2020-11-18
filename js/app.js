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
        newJoke['joke'] = data.joke
    })
})

genBtn

progBtn

lightDarkBtn.addEventListener('click', colorScheme.change)


// This is where you should put the event listener
// for a mouse-click

/*-------------------------------- Functions --------------------------------*/
