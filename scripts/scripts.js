// Player factory. Name is players name. Symbol is piece picked for game (X or O)
const Player = (name, symbol) => {
	let score = 0;
	const getScore = () => {
		return score;
	};
	const addPoint = () => {
		return score++;
	};
	const resetScore = () => {
		return score = 0
	}
	const details = () => {
		return `${name} is playing with ${symbol}'s`;
	};
	return {
		name,
		symbol,
		getScore,
		addPoint,
		resetScore,
        details,
	};
};

let Gameboard = (() => {
	const gameBoard = [];
	
	return {
		gameBoard,
	};
})();

let Game = (() => {
	// let play = prompt("Would you like to play a game of Tic Tac Toe?")
	// if (play.toLowerCase() === "yes") {
	//     console.log("Lets play!")
	// }
	const newGame = () => {
		// Code here
	};
	return {
		newGame,
	};
})();

// console.log(Game.gameBoard)
// console.log(Game)
// console.log(gameBoard)
