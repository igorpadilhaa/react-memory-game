import GameBoard from "./components/GameBoard"

import { useEffect } from "react"

import { move, newGame, selectCard, useGameReducer } from "./state/game"

import GameControls from "./components/GameControls/GameControls"
import { Control } from "./components/GameControls/types"

import { BoardSize } from "./api/game"
import useConfigForm from "./components/GameConfigForm/useConfigForm"

import restartIcon from './assets/restart.png'
import settingsIcon from './assets/settings.png'
import { Link } from "react-router-dom"

import style from './App.module.css'

function App() {
  const [game, dispatch] = useGameReducer()
  const readyToMakeMove = game.selectedCards.length >= 2;

  const { Form, show } = useConfigForm({
    onSubmit: (config) => {
      const newSize = config.boardSize
      if (!newSize || game.board.length == newSize)
        return

      dispatch(newGame(newSize))
    },
    boardSize: game.board.length as BoardSize
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
    },
    {
      image: settingsIcon,
      action: show
    }
  ]

  const onMove = (card: number) => {
    if (!readyToMakeMove)
      dispatch(selectCard(card))
  }

  return (
    <main className={style.mainContent}>
      <GameControls title="Wow a memory game! :D" controls={controls}>
        <GameBoard tiles={game.board} onMove={onMove} />
      </GameControls>
      <Form />

      <footer>
        <span>Icons provided by <Link target="_blank" to="https://icons8.com">Icons8</Link></span>
        <Link to="/about">About</Link>
      </footer>
    </main>
  )
}

export default App
