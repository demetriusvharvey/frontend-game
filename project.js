let order = []; 
let playerOrder = []; 
let flash; 
let round; 
let good; 
let compround; 
let intervalId; 
let light = true; 
let win; 
const roundCounter = document.querySelector("#round")
const green = document.querySelector('#green')
const red = document.querySelector("#red")
const yellow = document.querySelector("#yellow")
const blue = document.querySelector("#blue")
const startButton = document.querySelector("#start")

//each color's eventlistener and functions

green.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if(!win) {
            setTimeout(()=> {
                clearColor();
            }, 300);
        }
    }
})

red.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if(!win) {
            setTimeout(()=> {
                clearColor();
            }, 300);
        }
    }
})

yellow.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if(!win) {
            setTimeout(()=> {
                clearColor();
            }, 300);
        }
    }
})

blue.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if(!win) {
            setTimeout(()=> {
                clearColor();
            }, 300);
        }
    }
})

// function for checking if player is wrong or right

function check() {
    if (playerOrder[playerOrder.length -1] !== order[playerOrder.length -1]) 
    good = false;

    if (playerOrder.length == 20 && good) {
        winGame();
    }
    if (good == false) {
        flashColor();
        roundCounter.innerHTML = "NOPE"
        setTimeout(()=> {
            roundCounter.innerHTML = round;
            clearColor();

            if (false) {
                play();
            } else {
                compround = true;
                flash = 0;
                playerOrder = [];
                good = true;
                intervalId = setInterval(gameround, 800);
            }
        }, 800);
    }

    if (round == playerOrder.length && good && !win) {
        round++
        playerOrder = [];
        compround = true;
        flash = 0;
        roundCounter.innerHTML = round;
        intervalId = setInterval(gameround, 800)
    }
}

// functions so the colors light up
function one() {
    if (light) {
  
      
    }
    light = true;
    green.style.backgroundColor = "lightgreen";
}

function two() {
    if (light) {
    
       
    }
    light = true;
    red.style.backgroundColor = "tomato";
}

function three() {
    if (light) {

    
    }
   light = true;
    yellow.style.backgroundColor = "yellow";
}

function four() {
    if (light) {

    }
    light = true;
    blue.style.backgroundColor = "lightskyblue";
}


// startbutton event listener and functions
startButton.addEventListener('click', (event) => {
        play();
    })


function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  round = 1;
  roundCounter.innerHTML = 1;
  good = true;
  for (let i = 0; i < 20; i++) {
      order.push(Math.floor(Math.random() * 4) + 1);
  }
compround = true;

  intervalId = setInterval(gameround, 500);
}

//what flashes the colors "gameround" 
function gameround() {
    if (flash == round) {
      clearInterval(intervalId);
      compround = false;
      clearColor();
      on = true;
    }
    if (compround) {
        clearColor();
        setTimeout(()=> {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 200);
    }
}

//functions so cpu can do its round
function clearColor() {
    green.style.backgroundColor = "darkgreen";
    red.style.backgroundColor = "darkred";
    yellow.style.backgroundColor = "goldenrod";
    blue.style.backgroundColor = "darkblue";
}

function flashColor() {
    green.style.backgroundColor = "lightgreen";
    red.style.backgroundColor = "tomato";
    yellow.style.backgroundColor = "yellow";
    blue.style.backgroundColor = "lightskyblue";
}

//win game function
function winGame() {
    flashColor();
    roundCounter.innerHTML = "WIN";
    on = false;
    win = true;
}

