import coffeeImage from '../assets/coffee.png'

interface Game {
    selectedCards: number[]
    board: Card[]
}

enum BoardSize {
    LITTLE = 6,
    MEDIUM = 12,
    LARGE = 24,
}

class Card {
    constructor(
        public image: string, 
        public flipped: boolean) {}
}

function newGame(size: BoardSize): Game {
    const board: Card[] = new Array(size)
    
    for (let i = 0; i < size; i++)
        board[i] = new Card(coffeeImage, false);

    return { 
        selectedCards: [],
        board
    }
}

function selectCard(card: number, game: Game) {
    game.selectedCards.push(card)
    game.board[card].flipped = true
}

function makeMove(game: Game) {
    const board = game.board;
    const [ card1, card2 ] = game.selectedCards.map(index => board[index])

    const evaluation = card1.image === card2.image

    card1.flipped = evaluation
    card2.flipped = evaluation

    game.selectedCards = []
}

export type {
    Game
}

export {
    BoardSize,
    newGame,
    selectCard,
    makeMove
}