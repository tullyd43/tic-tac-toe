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

const player1 = Player("David", "X");

let Gameboard = (() => {
	const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const winningCombos = {
		xWin: ["X", "X", "X"],
		oWin: ["O", "O", "O"],
		combo1() {
			return gameBoard.slice(0, 3);
		},
		combo2() {
			return gameBoard.slice(3, 6);
		},
		combo3() {
			return gameBoard.slice(6, 9);
		},
		combo4() {
			let x = [gameBoard[0], gameBoard[3], gameBoard[6]];
			return x;
		},
		combo5() {
			let x = [gameBoard[1], gameBoard[4], gameBoard[7]];
			return x;
		},
		combo6() {
			let x = [gameBoard[2], gameBoard[5], gameBoard[8]];
			return x;
		},
		combo7() {
			let x = [gameBoard[0], gameBoard[4], gameBoard[8]];
			return x;
		},
		combo8() {
			let x = [gameBoard[2], gameBoard[4], gameBoard[6]];
			return x;
		},
	};
	const fillBoard = () => {
		gameBoard.length = 9;
		return gameBoard.fill(null, 0, 9);
	};
	const resetGameBoard = () => {
		return (gameBoard.length = 0);
	};
	const addMove = (position, playerSymbol) => {
		return gameBoard.splice(position, 1, playerSymbol);
	};
	return {
		gameBoard,
		fillBoard,
		resetGameBoard,
		addMove,
		winningCombos,
	};
})();

let Game = (() => {
	const players = [];
	// const winningCombos = {

	// }
	const numPlayers = (x) => {
		return (players.length = x);
	};
	const createPlayer = (playerName, symbol) => {
		let player = Player(playerName, symbol);
		return players.push(player);
	};
	const startGame = () => {
		Gameboard.fillBoard();
	};
	const checkWinner = () => {
		if (
			Gameboard.winningCombos.combo1() ||
			Gameboard.winningCombos.combo2() ||
			Gameboard.winningCombos.combo3() ||
			Gameboard.winningCombos.combo4() ||
			Gameboard.winningCombos.combo5() ||
			Gameboard.winningCombos.combo6() ||
			Gameboard.winningCombos.combo7() ||
			Gameboard.winningCombos.combo8()
			===
			Gameboard.winningCombos.xWin ||
			Gameboard.winningCombos.oWin
		) {
		}
	};
	const newGame = () => {
		// Code here
	};
	return {
		players,
		numPlayers,
		createPlayer,
		startGame,
		checkWinner,
		newGame,
		// winningCombos
	};
})();

console.log(Gameboard.gameBoard);
console.log(Gameboard.winningCombos.combo1());
console.log(Gameboard.gameBoard);
console.log(Gameboard.winningCombos.combo2());
console.log(Gameboard.gameBoard);
console.log(Gameboard.winningCombos.combo3());
console.log(Gameboard.gameBoard);
console.log(Gameboard.winningCombos.combo4());

