import WordsContainer from '../WordsContainer/WordsContainer'
import { useGame } from "@hooks/useGame";

import './App.module.css'
import Header from '../Header/Header';

function App() {
  useGame();

  return (
    <>
      <Header />
      <WordsContainer />
    </>
  )
}

export default App
