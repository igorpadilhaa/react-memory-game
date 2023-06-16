import GameBoard from "./components/GameBoard"

import style from './App.module.css'
import useGameReducer from "./state/reducer"
import { useEffect } from "react"
import GameControls from "./components/GameControls/GameControls"

function App() {
  const [game, dispatch] = useGameReducer()

  const selectCard = (card: number) => {
    dispatch({
      type: 'game/selectCard',
      payload: { card }
    })
  }

  useEffect(() => {
    if (game.selectedCards.length !== 2)
      return

    const timeout = setTimeout(() => dispatch({ type: 'game/move' }), 500)

    return () => clearTimeout(timeout)
  }, [game.selectedCards, dispatch])

  return (
    <main className={style.mainContent}>
      <GameControls title="Wow a memory game! :D">
        <GameBoard size="medium" tiles={game.board.map(c => ({ cardImage: c.image, show: c.flipped }))} onMove={selectCard} />
      </GameControls>
    </main>
  )
}

export default App
