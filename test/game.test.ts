import { assert, expect, it } from "vitest";

import { BoardSize, newGame } from '../src/api/game'

it('should generate board tiles', () => {
    const game = newGame(BoardSize.LITTLE)

    expect(game.board).to.have.length(BoardSize.LITTLE)
})