import GameBoard from "./components/GameBoard"

import style from './App.module.css'
import useGameReducer from "./state/reducer"

function App() {
  const [game, dispatch] = useGameReducer()

  const move = (card: number) => {
    dispatch({
      type: 'game/selectCard',
      payload: { card }
    })
  }

  return (
    <main className={style.mainContent}>
      <h1 className={style.title}>Wow a memory game! :D</h1>
      <section className="board">
        <GameBoard size="medium" tiles={game.board.map(c => ({ cardImage: c.image, show: c.flipped}))} onMove={move} />
      </section>
    </main>
  )
}

export default App
