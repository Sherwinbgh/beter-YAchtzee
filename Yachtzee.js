let rollCount = 0;
let roundCount = 0;
let lijstdubbelsteen = [];
var telldubbelsteen = {};
var maaklijstvanobjects = [];
let score = [];
let firstTotal = 0;
let specialScore = [];
let secondTotal = 0;
let grandTotal = 0;
let total = 0;

const canthrow = [false, false, false, false, false];
const rollButton = document.getElementById("roll");
const diceElements = document.querySelectorAll(".dice");
const scoreTableCells = document.querySelectorAll(".cell");
const dices = document.querySelectorAll(".dice");
const allecells = document.querySelectorAll(".cell");
let special = document.querySelectorAll(".special");

//roll dice werkend
function rollDice() {
    rollCount++;
    for (var i = 0; i < 5; i++) {
        if (canthrow[i]) {
            lijstdubbelsteen[i] = parseInt(dices[i].name);
            continue;
        }
        var randomnumber2 = randomnumber()
        dices[i].src = "dice_images/Dice-" + randomnumber2 + ".png";
        dices[i].name = randomnumber2;
        lijstdubbelsteen[i] = randomnumber2;
    }
    console.log(lijstdubbelsteen);
    sumup();
    maaklijstvanobjects = maaklijstvanobject();
    threeofakinds();
    fourofakinds();
    fullhouce();
    smallstraught();
    largestraight();
    chance();
    yachtzee();
    cellsin();
}
//hold function met bg color
dices.forEach((dice, index) => {
    dice.onclick = function () {
        if (canthrow[index]) {
            canthrow[index] = false;
            dice.style.border = "none";
        }
        else {
            canthrow[index] = true;
            dice.style.border = "3px solid red";
        }
    }
});

//random number generator
function randomnumber() {
    let random = Math.floor(Math.random() * 6) + 1;
    return random;
}
// cells
// forloop
let cells = [];
selectcells();
function selectcells() {
    for (var i = 0; i < allecells.length; i++) {
        if (i % 2 == 0) {
            continue
        }
        cells.push(allecells[i])
    }
}
function resetRound() {
    lijstdubbelsteen = [];
    sumup();
    rollCount = 0;
    roundCount++;
    for (var i = 0; i < 5; i++) {
        dices[i].src = "dice_images/Dice-1.png";
        dices[i].name = "";
        dices[i].style.border = "none";
        canthrow[i] = false;
    }
    for (let i = 0; i < 6; i++) {
        let value = document.getElementById(`score${i + 1}`);
        if (value.name != "locked") {
            value.textContent = "0";
        }
    }
    special.forEach(cells => {
        if (cells.name != "locked") {
            cells.textContent = "0";
        }
    });
}
function click() {
    var scorecells = document.querySelectorAll(".datascore");
    console.log(scorecells)
    scorecells.forEach(cells => {
        cells.addEventListener("click", function () {
            if (cells.name == "locked") return;
            score.push(parseInt(cells.textContent));
            console.log(score);
            cells.name = "locked";
            cells.style.backgroundColor = "#E2A499";
            if (score.length == 6) {
                firstTotal += score.reduce((a, b) => a + b, 0);
                if (firstTotal > 63) {
                    firstTotal += 35;
                }
                document.getElementById("sum1").textContent = firstTotal;
                if (secondTotal != 0) {
                    calcGrand();
                }
            }
            resetRound();
        });
    });
}

function clickSpecial() {
    var specialcells = document.querySelectorAll(".datascore2");
    specialcells.forEach(cells => {
        cells.addEventListener("click", function () {
            if (cells.name == "locked") return;
            specialScore.push(parseInt(cells.textContent));
            cells.name = "locked";
            cells.style.backgroundColor = "#E2A499";
            if (specialScore.length == 7) {
                secondTotal += specialScore.reduce((a, b) => a + b, 0);
                document.getElementById("sum2").textContent = secondTotal;
                if (firstTotal != 0) {
                    calcGrand();
                }
            }
            resetRound();
        });
    });
}

function calcGrand() {
    grandTotal = firstTotal + secondTotal;
    document.getElementById("grandtotal").textContent = grandTotal;
}

click();
clickSpecial();
function cellsin() {
    for (let i = 0; i < 6; i++) {
        const value = document.getElementById(`score${i + 1}`);
        if (telldubbelsteen[i + 1] == undefined) {
            value.textContent = 0;
        } else {
            value.textContent = telldubbelsteen[i + 1] * (i + 1);
        }
    }
}
//dubbelstenen in de console opslaan
function sumup() {
    telldubbelsteen = {};
    lijstdubbelsteen.forEach(digit => {
        if (telldubbelsteen[digit] == undefined) {
            telldubbelsteen[digit] = 0;
        };
        telldubbelsteen[digit] += 1;
    });
    return telldubbelsteen;
}
//rekenen
// boven gedeelde
function calculateones() {
    return telldubbelsteen[1];
}
function calculateTwos() {
    return telldubbelsteen[2] * 2;
}
function calculateThrees() {
    return telldubbelsteen[3] * 3;
}
function calculatefours() {
    return telldubbelsteen[4] * 4;
}
function calculatefives() {
    return telldubbelsteen[5] * 5;
}
function calculatesixs() {
    return telldubbelsteen[6] * 6;
}
function calculatebonus() {
    if (total > 63) {
        return 35;
    }
}
function sum() {
    total + calculatebonus()
}
function maaklijstvanobject() {
    var maaklijstvanobjects = Object.values(telldubbelsteen);
    return maaklijstvanobjects;
}
// beneden gedeelde, moet nog bijwerken
let total2 = threeofakinds() + fourofakinds() + fullhouce() + fullhouce() + smallstraught() + largestraight() + chance() + yachtzee()
function threeofakinds() {
    let tkind = document.getElementById("TOAK");
    if (maaklijstvanobjects.includes(3) || maaklijstvanobjects.includes(4) || maaklijstvanobjects.includes(5)) {
        tkind.textContent = lijstdubbelsteen.reduce((a, b) => a + b, 0);
    } else {
        tkind.textContent = 0;
    }
}
function fourofakinds() {
    let fkind = document.getElementById("FOAK");
    if (maaklijstvanobjects.includes(4) || maaklijstvanobjects.includes(5)) {
        fkind.textContent = lijstdubbelsteen.reduce((a, b) => a + b, 0);
    } else {
        fkind.textContent = 0;
    }
}
function fullhouce() {
    let fullhouse = document.getElementById("full");
    if (maaklijstvanobjects.includes(3) && maaklijstvanobjects.includes(2)) {
        fullhouse.textContent = 25;
    } else {
        fullhouse.textContent = 0;
    }
}
function smallstraught() {
    let smallstraight = document.getElementById("small");
    lijstdubbelsteen.sort();
    if (/1234|2345|3456/.test(lijstdubbelsteen.join("").replace(/(.)\1/, "$1"))) {
        smallstraight.textContent = 30;
    } else {
        smallstraight.textContent = 0;
    }
    return telldubbelsteen;
}
function largestraight() {
    let largestraight = document.getElementById("large");
    lijstdubbelsteen.sort();
    if (/12345|23456/.test(lijstdubbelsteen.join("").replace(/(.)\1/, "$1"))) {
        largestraight.textContent = 40;
    } else {
        largestraight.textContent = 0;
    }
    return telldubbelsteen;
}
function chance() {
    let chance = document.getElementById("chance");
    chance.textContent = lijstdubbelsteen.reduce((a, b) => a + b, 0);
}
function yachtzee() {
    if (maaklijstvanobjects.includes(5)) {
        let yachtzee = document.getElementById("yachtzee");
        yachtzee.textContent = 50;
    } else {
        yachtzee.textContent = 0;
    }
}