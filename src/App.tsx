import GameBoard from "./components/GameBoard"

import coffeeImage from './assets/coffee.png'

import style from './App.module.css'

function App() {
  return (
    <main className={style.mainContent}>
      <h1 className={style.title}>Wow a memory game! :D</h1>
      <section className="board">
        <GameBoard size="large" tiles={Array(24).fill({ cardImage: coffeeImage })} />
      </section>
    </main>
  )
}

export default App
