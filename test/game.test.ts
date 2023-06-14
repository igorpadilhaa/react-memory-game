import { assert, beforeEach, describe, expect, it } from "vitest";

import { BoardSize, Game, makeMove, newGame, selectCard } from '../src/api/game'

it('should generate board tiles', () => {
    const game = newGame(BoardSize.LITTLE)

    expect(game.board).to.have.length(BoardSize.LITTLE)
})

it('should flip a card and add it to selected list when selected', () => {
    const cardToSelect = 0;
    const game = newGame(BoardSize.LITTLE)

    selectCard(0, game)

    expect(game.selectedCards).to.contain(cardToSelect)
    assert(game.board[cardToSelect].flipped)
})

it('should prevent an attempt to flip a card that is already flipped', () => {
    const game = newGame(BoardSize.LITTLE)

    selectCard(0, game)
    selectCard(0, game)

    expect(game.selectedCards).to.have.lengthOf(1)
    assert(game.board[0].flipped)
})

describe('makeMove test suite', () => {
    let game: Game;

    beforeEach(() => {
        game = {
            selectedCards: [],
            board: [
                { image: 'image', flipped: false },
                { image: 'image', flipped: false },
                { image: 'another image', flipped: false}
            ]
        }
    })

    it('should keep cards flipped if they match and clear selected list', () => {
        selectCard(0, game)
        selectCard(1, game)

        makeMove(game)

        assert(game.board[0].flipped)
        assert(game.board[1].flipped)

        assert.isEmpty(game.selectedCards)
    })

    it('should unflip cards if they do not match and clear selected list', () => {
        selectCard(0, game)
        selectCard(2, game)

        makeMove(game)

        assert.isFalse(game.board[0].flipped)
        assert.isFalse(game.board[2].flipped)

        assert.isEmpty(game.selectedCards)
    })
})