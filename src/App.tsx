import { useEffect } from "react"

import GameBoard from "./components/GameBoard"

import coffeeImage from './assets/coffee.png'

import style from './App.module.css'
import useGameReducer from "./state/reducer"

function App() {
  const [, dispatch] = useGameReducer()

  useEffect(() => {
    dispatch({ type: 'app mounted!' })
  }, [dispatch])

  return (
    <main className={style.mainContent}>
      <h1 className={style.title}>Wow a memory game! :D</h1>
      <section className="board">
        <GameBoard size="large" tiles={Array(24).fill({ cardImage: coffeeImage })} onMove={() => dispatch({ type: 'move made'})} />
      </section>
    </main>
  )
}

export default App
