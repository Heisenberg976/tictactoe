const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const winner = document.getElementById("winner");
const scores = document.getElementById("scores");
const reset = document.getElementById("reset");
const neww = document.getElementById("new");

let matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        matrix[i][j] = 0;
    }
}
let res;
let moves = 0;
let scoreX = 0;
let scoreO = 0;
scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;


function checkMoves(btn) {
    moves++;
    if (btn.innerText == '') {

        if (moves % 2 != 0) {
            btn.innerText = 'X';
            btn.style.color = "red";
            res = 1;
        }
        else {
            btn.innerText = 'O';
            btn.style.color = "blue";
            res = 10;
        }
    }
    else {

    }
}

function disableAll() {
    one.style.pointerEvents = 'none';
    two.style.pointerEvents = 'none';
    three.style.pointerEvents = 'none';
    four.style.pointerEvents = 'none';
    five.style.pointerEvents = 'none';
    six.style.pointerEvents = 'none';
    seven.style.pointerEvents = 'none';
    eight.style.pointerEvents = 'none';
    nine.style.pointerEvents = 'none';
}

function disableOne(obj) {
    obj.style.pointerEvents = 'none';
}

function checkWin() {
    // console.log(matrix);
    // console.log(res);

    for (let i = 0; i < matrix.length; i++) {
        let k = matrix[0][i] + matrix[1][i] + matrix[2][i];
        if (k == 3) {
            winner.innerText = "X won";
            winner.classList.add("alert");
            winner.classList.add("alert-danger");

            scoreX++;
            scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;
            disableAll();
        }
        else if (k == 30) {
            winner.classList.add("alert");
            winner.classList.add("alert-info");
            winner.innerText = "O won";
            scoreO++;
            scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;
            disableAll();
        }

    }

    for (let i = 0; i < matrix.length; i++) {
        let k = matrix[i][0] + matrix[i][1] + matrix[i][2];
        if (k == 3) {
            winner.innerText = "X won";
            winner.classList.add("alert");
            winner.classList.add("alert-danger");
            scoreX++;
            scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;
            disableAll();
        }
        else if (k == 30) {
            winner.innerText = "O won";
            winner.classList.add("alert");
            winner.classList.add("alert-info");
            scoreO++;
            scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;
            disableAll();
        }

    }
    //d1
    if (matrix[0][0] + matrix[1][1] + matrix[2][2] == 3) {
        winner.innerText = "X won";
        winner.classList.add("alert");
        winner.classList.add("alert-danger");
        scoreX++;
        scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;
        disableAll();
    }
    else if (matrix[0][0] + matrix[1][1] + matrix[2][2] == 30) {
        winner.innerText = "O won";
        winner.classList.add("alert");
        winner.classList.add("alert-info");
        scoreO++;
        scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;
        disableAll();
    }
    //d2
    if (matrix[0][2] + matrix[1][1] + matrix[2][0] == 3) {
        winner.innerText = "X won";
        winner.classList.add("alert");
        winner.classList.add("alert-danger");
        scoreX++;
        scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;
        disableAll();
    }
    else if (matrix[0][2] + matrix[1][1] + matrix[2][0] == 30) {
        winner.innerText = "O won";
        winner.classList.add("alert");
        winner.classList.add("alert-info");
        scoreO++;
        scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;
        disableAll();
    }
    // console.log(scoreX);
    // console.log(scoreO);
    if (winner.innerText == '' && moves == 9) {
        winner.classList.add("alert");
        winner.classList.add("alert-info");
        winner.innerText = "Draw";
        scoreO++;
        scoreX++;
        scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;
        disableAll();

    }
    console.log(winner.innerText);
}

reset.addEventListener('click', function () {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[i][j] = 0;
        }
    }
    res;
    moves = 0;
    scoreX = 0;
    scoreO = 0;
    one.innerText = '';
    two.innerText = '';
    three.innerText = '';
    four.innerText = '';
    five.innerText = '';
    six.innerText = '';
    seven.innerText = '';
    eight.innerText = '';
    nine.innerText = '';
    scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;
    winner.innerText = "";
    winner.classList.remove("alert");
    winner.classList.remove("alert-success");
})

neww.addEventListener('click', function () {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[i][j] = 0;
        }
    }
    res;
    moves = 0;
    one.innerText = '';
    two.innerText = '';
    three.innerText = '';
    four.innerText = '';
    five.innerText = '';
    six.innerText = '';
    seven.innerText = '';
    eight.innerText = '';
    nine.innerText = '';
    one.style.pointerEvents = 'auto';
    two.style.pointerEvents = 'auto';
    three.style.pointerEvents = 'auto';
    four.style.pointerEvents = 'auto';
    five.style.pointerEvents = 'auto';
    six.style.pointerEvents = 'auto';
    seven.style.pointerEvents = 'auto';
    eight.style.pointerEvents = 'auto';
    nine.style.pointerEvents = 'auto';
    winner.classList.remove("alert");
    winner.classList.remove("alert-danger");

    scores.innerText = `Player X - ${scoreX}` + ` Player O - ${scoreO}`;
    winner.innerText = "";
    winner.classList.remove("alert");
    winner.classList.remove("alert-success");
})

function setUpButtons() {
    one.addEventListener('click', function () {
        checkMoves(one);
        matrix[0][0] = res;
        checkWin();
        disableOne(this);
    })

    two.addEventListener('click', function () {
        checkMoves(two);
        matrix[0][1] = res;
        checkWin();
        disableOne(this);
    })

    three.addEventListener('click', function () {
        checkMoves(three);
        matrix[0][2] = res;
        checkWin();
        disableOne(this);
    })


    four.addEventListener('click', function () {
        checkMoves(four);
        matrix[1][0] = res;
        checkWin();
        disableOne(this);

    })

    five.addEventListener('click', function () {
        checkMoves(five);
        matrix[1][1] = res;
        checkWin();
        disableOne(this);
    })
    six.addEventListener('click', function () {
        checkMoves(six);
        matrix[1][2] = res;

        checkWin();
        disableOne(this);
    })


    seven.addEventListener('click', function () {
        checkMoves(seven);
        matrix[2][0] = res;

        checkWin();
        disableOne(this);
    })
    eight.addEventListener('click', function () {
        checkMoves(eight);
        matrix[2][1] = res;

        checkWin();
        disableOne(this);
    })
    nine.addEventListener('click', function () {
        checkMoves(nine);
        matrix[2][2] = res;

        checkWin();
        disableOne(this);
    })
}

setUpButtons();
