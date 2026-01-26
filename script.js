let userscore = 0;
let computerscore = 0;

let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        removeActiveClasses();

        const userChoice = choice.getAttribute("id");
        const computerChoice = genCompChoice();

        if (userChoice === computerChoice) {
            msg.innerText = "Game is Drawn";
            msg.style.backgroundColor = "#30363d";
            msg.style.color = "#f0f6fc";
            msg.style.animation = "pop 0.3s ease";
        } 
        else {
            let userwin = true;

            if (userChoice === "rock") {
                userwin = computerChoice === "paper" ? false : true;
            }
            else if (userChoice === "scissors") {
                userwin = computerChoice === "rock" ? false : true;
            }
            else if (userChoice === "paper") {
                userwin = computerChoice === "scissors" ? false : true;
            }

            showWinner(userwin, userChoice, computerChoice, choice);
            changeScore();
        }
    });
});

const showWinner = (userwin, userChoice, computerChoice, clickedChoice) => {
    if (userwin) {
        msg.innerText = `You Win! ${userChoice} beats ${computerChoice} `;
        msg.style.backgroundColor = "#238636";
        msg.style.color = "#ffffff";
        clickedChoice.classList.add("active-win");
        userscore++;
        user.classList.add("score-pop");
    }
    else {
        msg.innerText = `You Lost! ${computerChoice} beats ${userChoice} `;
        msg.style.backgroundColor = "#da3633";
        msg.style.color = "#ffffff";
        clickedChoice.classList.add("active-lose");
        computerscore++;
        comp.classList.add("score-pop");
    }

    msg.style.animation = "pop 0.3s ease";

    setTimeout(() => {
        user.classList.remove("score-pop");
        comp.classList.remove("score-pop");
    }, 200);
};

const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const changeScore = () => {
    user.innerText = userscore;
    comp.innerText = computerscore;
};

const removeActiveClasses = () => {
    choices.forEach(choice => {
        choice.classList.remove("active-win");
        choice.classList.remove("active-lose");
    });
};

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
    userscore = 0;
    computerscore = 0;

    user.innerText = 0;
    comp.innerText = 0;

    msg.innerText = "Play your move";
    msg.style.backgroundColor = "rgba(0,0,0,0.4)";

    removeActiveClasses();
});
