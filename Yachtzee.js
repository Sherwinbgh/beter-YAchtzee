let player1Score=[];
let player1Dice=[];
let rollCount=0;
let roundCount=0;

const canthrow = [false,false,false,false,false];
const rollButton = document.getElementById("roll");
const diceElements = document.querySelectorAll(".dice");
const scoreTableCells = document.querySelectorAll(".cell");
const dices = document.querySelectorAll(".dice");
const allecells=document.querySelectorAll(".cell");
//roll dice werkend maar moet nog de fotos eruit halen
console.log(dices);
function rollDice() {
    rollCount++;
    let randomDice = [];

    for(var i = 0; i < 5;i++){
        if(canthrow[i]){
            continue;
        }
        dices [i].src = "dice_images/Dice-" + randomnumber() + ".png";
    }
    console.log(randomDice);
  }
dices.forEach((dice,index) => {
    dice.onclick = function(){
        if(canthrow[index]){
            canthrow[index] = false;
        }
        else{
            canthrow[index] = true;
        }
        console.log(canthrow)
    }
});

function randomnumber(){
    let random = Math.floor(Math.random()*6)+1;
    return random;
}
function resetGameState() {
    rollsLeft = 3;
    selectedDice = [];
    updateRollsLeft();
}
// forloop
let cells=[];
selectcells();
function selectcells(){
    for(var i = 0; i < allecells.length;i++){
        if(i%2==0){
            continue
        }
        cells.push(allecells[i])
    }
}

//nummer veranderd van rood naar zwart alleen moet getest worden
/*
function changecolor(){
    var cell = document.getElementById();
    if(cell.style.color === 'red'){
        cell.style.color === 'black';
    } else {
        cell.style.color ==='red';
    }
}
*/
//rekenen