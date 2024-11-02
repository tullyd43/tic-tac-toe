// Player factory. Name is players name. Symbol is piece picked for game (X or O)
const Player = (name, symbol) => {
	// let score = 0;
	// const getScore = () => {
	// 	return score;
	// };
	// const addPoint = () => {
	// 	return score++;
	// };
	// const resetScore = () => {
	// 	return (score = 0);
	// };
	const details = () => {
		return `${name} is playing with ${symbol}'s`;
	};
	// const active = () => {
	// 	if (Game.lastMoveArr[lastMoveArr.length - 1] === this.symbol) {
	// 		dom.board.disabled = false;
	// 	}
	// };
	// const inactive = () => {
	// 	if (Game.lastMoveArr[lastMoveArr.length - 1] !== this.symbol) {
	// 		dom.board.disabled = true;
	// 	}
	// };
	return {
		name,
		symbol,
		// getScore,
		// addPoint,
		// resetScore,
		details,
		// active,
		// inactive,
	};
};

// const player1 = Player("David", "X");
// const player2 = Player("Jake", "O");

let Gameboard = (() => {
	const gameBoard = [];
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
			return [0, 3, 6].map((index) => gameBoard[index]);
		},
		combo5() {
			return [1, 4, 7].map((index) => gameBoard[index]);
		},
		combo6() {
			return [2, 5, 8].map((index) => gameBoard[index]);
		},
		combo7() {
			return [0, 5, 8].map((index) => gameBoard[index]);
		},
		combo8() {
			return [2, 4, 6].map((index) => gameBoard[index]);
		},
	};
	const combos = [
		winningCombos.combo1(),
		winningCombos.combo2(),
		winningCombos.combo3(),
		winningCombos.combo4(),
		winningCombos.combo5(),
		winningCombos.combo6(),
		winningCombos.combo7(),
		winningCombos.combo8(),
	];
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
		winningCombos,
		combos,
		fillBoard,
		resetGameBoard,
		addMove,
	};
})();

const Game = (() => {
	const players = [];
	const playerX = () => {
		return players.filter((player) => player.symbol === "X")
	}
	const playerO = () => {
		return players.filter((player) => player.symbol === "O");
	}
	const lastMoveArr = [];
	// const numPlayers = (x) => {
	// 	return (players.length = x);
	// };
	const createPlayer = (playerName, symbol) => {
		let player = Player(playerName, symbol);
		return players.push(player);
	};
	const startGame = () => {
		Gameboard.fillBoard();
	};
	const firstMove = () => {
		let move = Math.floor(Math.random() * 2);
		if (move === 1) {
			return lastMoveArr.push(Game.players[0].symbol);
		} else {
			return lastMoveArr.push(Game.players[1].symbol);
		}
	};
	const checkWinner = () => {
		if (
			Gameboard.winningCombos
				.combo1()
				.every(
					(val, index) => val === Gameboard.winningCombos.xWin[index]
				)
			// Gameboard.winningCombos.combo2() === Gameboard.winningCombos.xWin ||
			// Gameboard.winningCombos.combo3() === Gameboard.winningCombos.xWin ||
			// Gameboard.winningCombos.combo4() === Gameboard.winningCombos.xWin ||
			// Gameboard.winningCombos.combo5() === Gameboard.winningCombos.xWin ||
			// Gameboard.winningCombos.combo6() === Gameboard.winningCombos.xWin ||
			// Gameboard.winningCombos.combo7() === Gameboard.winningCombos.xWin ||
			// Gameboard.winningCombos.combo8() === Gameboard.winningCombos.xWin
			//Refactor
		) {
			console.log(players)
			let playerEx = playerX()
			console.log(playerEx)
			console.log("player X wins");
			console.log(`${playerEx[0].name} Wins`);
			dom.board.tile.disabled = true;
		} else if (
			Gameboard.winningCombos.combo1() === Gameboard.winningCombos.oWin
			// Gameboard.winningCombos.combo2() === Gameboard.winningCombos.oWin ||
			// Gameboard.winningCombos.combo3() === Gameboard.winningCombos.oWin ||
			// Gameboard.winningCombos.combo4() === Gameboard.winningCombos.oWin ||
			// Gameboard.winningCombos.combo5() === Gameboard.winningCombos.oWin ||
			// Gameboard.winningCombos.combo6() === Gameboard.winningCombos.oWin ||
			// Gameboard.winningCombos.combo7() === Gameboard.winningCombos.oWin ||
			// Gameboard.winningCombos.combo8() === Gameboard.winningCombos.oWin
		) {
			// let playerOh = playerO()[0]
			console.log("Player O wins");
			// console.log(`${playerOh[0].name} Wins`);
		}
	};
	const newGame = () => {
		// Code here
	};
	return {
		players,
		// playerX,
		// playerO,
		lastMoveArr,
		// numPlayers,
		createPlayer,
		firstMove,
		startGame,
		checkWinner,
		newGame,
	};
})();

const dom = (() => {
	let welcome = document.querySelector("#welcome");
	let gameSetup = document.querySelector(".game-setup");
	let playerSetup = document.getElementById("player-setup");
	let play = document.getElementById("play");
	play.addEventListener("click", () => {
		welcome.style.display = "none";
		playerSetup.style.display = "flex";
	});

	let board = document.querySelector(".board");
	let tiles = board.querySelectorAll(".tiles");
	tiles.forEach((tile, index) => {
		tile.addEventListener("click", () => {
			if (
				Game.lastMoveArr[Game.lastMoveArr.length - 1] === "X" &&
				tile.childNodes.length === 0
			) {
				let o = document.createTextNode("O");
				tile.appendChild(o);
				Gameboard.addMove(index, "O");
				Game.lastMoveArr.push("O");
				Game.checkWinner()

			} else if (
				Game.lastMoveArr[Game.lastMoveArr.length - 1] === "O" &&
				tile.childNodes.length === 0
			) {
				let x = document.createTextNode("X");
				tile.appendChild(x);
				Gameboard.addMove(index, "X");
				Game.lastMoveArr.push("X");
				Game.checkWinner()
			}
		});
	});

	const form1 = document.querySelector(".player1-form");
	form1.addEventListener("submit", (e) => {
		e.preventDefault();
		const formData1 = new FormData(e.target);
		const playerData = Object.fromEntries(formData1.entries());
		let player = Player(playerData.player1name, playerData.symbol);
		Game.players.push(player);
		form1.style.display = "none";
		form2.style.display = "block";
		return;
	});

	const form2 = document.querySelector(".player2-form");
	form2.addEventListener("submit", (e) => {
		e.preventDefault();
		const formData2 = new FormData(e.target);
		const playerData = Object.fromEntries(formData2.entries());
		let player = Player(playerData.player2name, playerData.symbol);
		Game.players.push(player);
		form2.style.display = "none";
		let setup = document.querySelector("#player-setup");
		setup.style.display = "none";
		let p1details = document.createElement("h2");
		p1details.setAttribute("class", "player-heading");
		p1details.innerText = Game.players[0].details();
		let p2details = document.createElement("h2");
		p2details.setAttribute("class", "player-heading");
		p2details.innerText = Game.players[1].details();
		let firstPlayer = document.createElement("button");
		firstPlayer.innerText = "Who's going first?";
		firstPlayer.setAttribute("class", "startbtn");
		gameSetup.appendChild(firstPlayer);
		gameSetup.appendChild(p2details);
		gameSetup.appendChild(p1details);
		return {
			p1details,
			p2details,
		};
	});
	let players = document.querySelector(".players");
	document.addEventListener("click", function (event) {
		if (event.target.matches(".startbtn")) {
			Game.firstMove();
			console.log(Game.lastMoveArr);
			event.target.remove();
			gameSetup.remove();
			players.style.display = "grid";
			Game.startGame();

			console.log(Gameboard.gameBoard);
			console.log(Game.playerX)
			console.log(Game.playerO)
			console.log(Game.players)
			return 
		}
	});

	// let first = document.querySelector(".startbtn")
	// first.addEventListener("click", () => {
	//
	// 	let playerSetup = document.querySelector(".game-setup");
	// 	first.remove();

	// 	if (Game.firstMove[0] === Game.players[0].symbol) {

	// 	}
	// })

	// Start Game
	// let players = document.querySelector(".players")
	// players.style.display = "grid"

	return {
		board,
		gameSetup,
		playerSetup,
		play,
		tiles,
		form1,
		// playerX,

	};
})();

