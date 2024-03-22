import Stopwatch from '../Stopwatch/Stopwatch';
import WordsContainer from '../WordsContainer/WordsContainer'
import { useGame } from "@hooks/useGame";

import './App.css'

function App() {
  useGame();

  return (
    <>
      <Stopwatch />
      <WordsContainer />
    </>
  )
}

export default App
