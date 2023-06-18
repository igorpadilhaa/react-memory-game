import GameBoard from "./components/GameBoard"

import style from './App.module.css'
import { useEffect } from "react"

import { move, newGame, selectCard, useGameReducer } from "./state/game"

import GameControls from "./components/GameControls/GameControls"
import { Control } from "./components/GameControls/types"

import restartIcon from './assets/restart.png'
import useConfigForm from "./components/GameConfigForm/useConfigForm"

function App() {
  const [game, dispatch] = useGameReducer()
  const { Form, show } = useConfigForm({
    onSubmit: (config) => {
      const newSize = config.boardSize
      if (!newSize || game.board.length == newSize)
        return

      dispatch(newGame(newSize))
    }
  })

  useEffect(show, [show])

  useEffect(() => {
    if (game.selectedCards.length !== 2)
      return

    const timeout = setTimeout(() => dispatch(move()), 500)

    return () => clearTimeout(timeout)
  }, [game.selectedCards, dispatch])

  const controls: Control[] = [
    {
      image: restartIcon,
      action: () => dispatch(newGame(game.board.length))
    }
  ]

  return (
    <main className={style.mainContent}>
      <GameControls title="Wow a memory game! :D" controls={controls}>
        <GameBoard tiles={game.board} onMove={(card) => dispatch(selectCard(card))} />
      </GameControls>
      <Form />
    </main>
  )
}

export default App
