import GameBoard from "./components/GameBoard"

import style from './App.module.css'
import { useEffect } from "react"

import { move, newGame, selectCard, useGameReducer } from "./state/game"

import GameControls from "./components/GameControls/GameControls"
import { Control } from "./components/GameControls/types"

import restartIcon from './assets/restart.png'

function App() {
  const [game, dispatch] = useGameReducer()

  useEffect(() => {
    if (game.selectedCards.length !== 2)
      return

    const timeout = setTimeout(() => dispatch(move()), 500)

    return () => clearTimeout(timeout)
  }, [game.selectedCards, dispatch])

  const controls: Control[] = []

  if (game.status == 'ongoing') {
    controls.push({ 
      image: restartIcon,
      action: () => dispatch(newGame(12))
    })
  }

  return (
    <main className={style.mainContent}>
      <GameControls title="Wow a memory game! :D" controls={controls}>
        <GameBoard size="medium" tiles={game.board.map(c => ({ cardImage: c.image, show: c.flipped }))} onMove={(card) => dispatch(selectCard(card))} />
      </GameControls>
    </main>
  )
}

export default App
