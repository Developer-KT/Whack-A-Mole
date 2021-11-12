const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')                              //remove mole class from all of our squares
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]          //random position using math random
    randomPosition.classList.add('mole')                                //adding mole class to randomPosition

    //assign the id of the randomPosition to hitPosition for later use
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {                                     //if we press mouse on id that is hitPosition, we win
            result = result + 1                                         //add 1 point to result
            score.textContent = result
        }
    })
})


function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 750)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score: ' + result);
    }
}

let timerId = setInterval(countDown, 750)