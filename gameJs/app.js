let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result");

const pierre_div = document.getElementById("pierre");
const papier_div = document.getElementById("papier");
const ciseau_div = document.getElementById("ciseau");

console.log("OKAY JS")


function getComputerChoice(){
	const choices = ["Ciseau", "Pierre", "Papier"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
};

function reset(){
	userScore = 0;
	computerScore = 0;
	computerScore_span.innerHTML = computerScore
	userScore_span.innerHTML = userScore;
}

function win(){
	userScore++;
	console.log("Ordi " + computerScore);
	console.log("User " + userScore);
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = "<p>Bravo + 1 Point</p>"

	if (userScore == 10){
		alert("Vous avez Gagné ")
		reset()
	}
	else if (computerScore == 10){
		alert("Vous avez perdu ")
		reset()
	}
}

function lose(){
	computerScore++;
	console.log("Ordi " + computerScore);
	console.log("User " + userScore);
	computerScore_span.innerHTML = computerScore
	result_div.innerHTML = "<p>L'ordinateur marque !<p>"

	if (userScore == 10){
		alert("Vous avez Gagné ")
		reset()
	}
	else if (computerScore == 10){
		alert("Vous avez perdu ")
		reset()
	}
}

function equal(){
	console.log("equal")
	result_div.innerHTML = "<p>Egalité</p>"
}

function game(userChoice){

	const computerChoice = getComputerChoice();
	console.log("Computer choice => " + computerChoice);
	console.log("user choice => " + userChoice)

	switch (userChoice + computerChoice) {
		case "CiseauPapier":
		case "PapierPierre":
		case "PierreCiseau":
			win()
			break;

		case "PapierCiseau":
		case "PierrePapier":
		case "CiseauPierre":
			lose()
			break;

		case "PapierPapier":
		case "PierrePierre":
		case "CiseauCiseau":
			equal()
			break;


	}

};

function main(){

	pierre_div.addEventListener('click', function() {
		game("Pierre");
	})


	papier_div.addEventListener('click', function() {
		game("Papier");
	})


	ciseau_div.addEventListener('click', function() {
		game("Ciseau");
	})

}


main();