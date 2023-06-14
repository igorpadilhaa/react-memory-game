import GameBoard from "./components/GameBoard"

import style from './App.module.css'
import useGameReducer from "./state/reducer"
import { useEffect } from "react"

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
      <h1 className={style.title}>Wow a memory game! :D</h1>
      <section className="board">
        <GameBoard size="medium" tiles={game.board.map(c => ({ cardImage: c.image, show: c.flipped}))} onMove={selectCard} />
      </section>
    </main>
  )
}

export default App
