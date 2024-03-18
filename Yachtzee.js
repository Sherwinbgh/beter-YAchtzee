let player1Score=[];
let player1Dice=[];
let rollCount=0;
let roundCount=0;
let lijstdubbelsteen=[];
var telldubbelsteen = {};
var maaklijstvanobjects = [];

const canthrow = [false,false,false,false,false];
const rollButton = document.getElementById("roll");
const diceElements = document.querySelectorAll(".dice");
const scoreTableCells = document.querySelectorAll(".cell");
const dices = document.querySelectorAll(".dice");
const allecells=document.querySelectorAll(".cell");
//roll dice werkend
console.log(dices);
function rollDice() {
    rollCount++;
    let randomDice = [];
    for(var i = 0; i < 5;i++){
        if(canthrow[i]){
            continue;
        }
        var randomnumber2 = randomnumber()
        dices [i].src = "dice_images/Dice-" + randomnumber2 + ".png";
        lijstdubbelsteen [i] = randomnumber2;
    }
    sumup();
  }
//hold function met bg color
dices.forEach((dice,index) => {
    dice.onclick = function(){
        if(canthrow[index]){
            canthrow[index] = false;
            dice.style.border = "none";
        }
        else{
            canthrow[index] = true;
            dice.style.border = "3px solid red";
        }
    }
});
//random number generator
function randomnumber(){
    let random = Math.floor(Math.random()*6)+1;
    return random;
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
//dubbelstenen in de console opslaan
function sumup(){
    telldubbelsteen = {};
    lijstdubbelsteen.forEach(digit => {
        if(telldubbelsteen[digit] == undefined){
            telldubbelsteen[digit] = 0;
        };
        telldubbelsteen[digit] += 1;
    });
    return telldubbelsteen;
}
//rekenen
function calculateones(){
    return telldubbelsteen[1];
}
function calculateTwos(){
    return telldubbelsteen[2]*2;
}
function calculateThrees(){
    return telldubbelsteen[3]*3;
}
function calculatefours(){
    return telldubbelsteen[4]*4;
}
function calculatefives(){
    return telldubbelsteen[5]*5;
}
function calculatesixs(){
    return telldubbelsteen[6]*6;
}
function maaklijstvanobject(){
    var maaklijstvanobjects =  Object.values(telldubbelsteen);
    return maaklijstvanobjects;
}
function threeofakinds(){
    maaklijstvanobject();
    return maaklijstvanobjects.includes(3);
}
function fourofakinds(){
    maaklijstvanobject();
    return maaklijstvanobjects.includes(4);
}
function fullhouce(){
    maaklijstvanobject();
    return maaklijstvanobjects.includes(3,2);
}
function smallstraught(){
    maaklijstvanobject();
    return maaklijstvanobjects.includes(1,2,3,4);
}
function largestraight(){
    maaklijstvanobject();
    return maaklijstvanobjects.includes(1,2,3,4,5);
}
function chance(){

}
function yachtzee(){
    maaklijstvanobject();
    return maaklijstvanobjects.includes(5);
}