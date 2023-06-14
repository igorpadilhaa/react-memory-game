import { assert, expect, it } from "vitest";

import { BoardSize, newGame, selectCard } from '../src/api/game'

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