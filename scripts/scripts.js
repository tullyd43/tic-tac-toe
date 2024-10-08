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
		return (score = 0);
	};
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

const player1 = Player("David", "X")
console.log(player1.symbol)

let Gameboard = (() => {
	const gameBoard = [];
	const fillBoard = () => {
		gameBoard.length = 9
		return gameBoard.fill(null, 0, 9)
	}
	const resetGameBoard = () => {
		return gameBoard.length = 0;
	};
	const addMove = (position, playerSymbol) => {
		return gameBoard.splice(position, 1, playerSymbol)
	}
	return {
		gameBoard,
		fillBoard,
		resetGameBoard,
		addMove,
	};
})();

Gameboard.fillBoard()
console.log(Gameboard.gameBoard);
Gameboard.addMove(6, player1.symbol);
console.log(Gameboard.gameBoard);
console.log(Gameboard.gameBoard.length);
Gameboard.resetGameBoard();
console.log(Gameboard.gameBoard)



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
