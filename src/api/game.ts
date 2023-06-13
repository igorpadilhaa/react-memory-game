import coffeeImage from '../assets/coffee.png'

interface Game {
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

    return { board }
}

export {
    BoardSize,
    newGame
}