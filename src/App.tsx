import { useEffect } from "react"

import GameBoard from "./components/GameBoard"

import style from './App.module.css'
import useGameReducer from "./state/reducer"

function App() {
  const [game, dispatch] = useGameReducer()

  useEffect(() => {
    dispatch({ type: 'app mounted!' })
  }, [dispatch])

  return (
    <main className={style.mainContent}>
      <h1 className={style.title}>Wow a memory game! :D</h1>
      <section className="board">
        <GameBoard size="large" tiles={game.board.map(c => ({ cardImage: c.image, show: c.flipped}))} onMove={() => dispatch({ type: 'move made'})} />
      </section>
    </main>
  )
}

export default App
