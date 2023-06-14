import { randomImages } from './images'

interface Game {
    status: GameStatus
    selectedCards: number[]
    board: Card[]
}

enum BoardSize {
    LITTLE = 6,
    MEDIUM = 12,
    LARGE = 24,
}

type GameStatus = 'ended' | 'ongoing'

class Card {
    constructor(
        public image: string, 
        public flipped: boolean) {}
}

function newGame(size: BoardSize): Game {
    const board: Card[] = new Array(size)
    const images = generateCardImages(size)

    for (let i = 0; i < size; i++)
        board[i] = new Card(images[i], false)

    return {
        status: 'ongoing',
        selectedCards: [],
        board
    }
}

function generateCardImages(count: number): string[] {
    let images = randomImages(count / 2)
    console.log({
        text: 'before shuffle',
        images
    })

    images = images.concat(images)
    images = shuffle(images)

    console.log({
        text: 'after shuffle',
        images
    })

    return images
} 

function shuffle<T>(array: T[]): T[] {
    const shuffled: T[] = new Array(array.length)

    for(let i = array.length - 1; i >= 0; i--) {
        const index = Math.floor(Math.random() * array.length)
        shuffled[i] = array[index]

        array.splice(index, 1)
    }

    return shuffled
}

function selectCard(card: number, game: Game) {
    if (game.board[card].flipped)
        return

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

    game.status = calculateGameStatus(game.board)
}

function calculateGameStatus(board: Card[]): GameStatus {
    for (const card of board) {
        if (!card.flipped)
            return 'ongoing'
    }

    return 'ended'
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