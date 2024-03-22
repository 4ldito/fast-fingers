import WordsContainer from '../WordsContainer/WordsContainer'
import { useGame } from "@hooks/useGame";

import './App.css'
import Gamemodes from '../Gamemodes/Gamemodes';

function App() {
  useGame();

  return (
    <>
      <Gamemodes />
      <WordsContainer />
    </>
  )
}

export default App
