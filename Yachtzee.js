let player1Score=[];
let player1Dice=[];
let rollCount=0;
let roundCount=0;
let isPlayerOneTurn=true;
let transformValues=[
[0,30],[-5,40],[0,35],[5,40],[0,30]
];
const rollButton = document.getElementById("roll");
const player1Container=document.getElementById("player1Container");
const diceElements=document.querySelectorAll(".dice");
const scoreTableCells=document.querySelectorAll(".cell");
function rollDice(){
  let die1;
  let die2;
  let die3;
  let die4;
  let die5;

  const dice1 = document.getElementById("Dice-1");
  const dice2 = document.getElementById("Dice-2");
  const dice3 = document.getElementById("Dice-3");
  const dice4 = document.getElementById("Dice-4");
  const dice5 = document.getElementById("Dice-5");

  //roll count doet het alleen nog images er bij zetten//
  rollCount++;
  randomDice=[];
  die1 = randomnumber();
  randomDice.push(die1);

  die2 = randomnumber();
  randomDice.push(die2);

  die3 = randomnumber();
  randomDice.push(die3);

  die4 = randomnumber();
  randomDice.push(die4);

  die5 = randomnumber();
  randomDice.push(die5);
}
function randomnumber(){
    let random = Math.floor(Math.random()*6)+1;
    console.log(random);
    return random;
}
// hold button kan ik hier zetten
// cell kan ik hier zetten met holographic efect
// rekenen kan ik later doen