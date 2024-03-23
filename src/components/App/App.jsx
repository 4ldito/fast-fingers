import WordsContainer from '../WordsContainer/WordsContainer'
import { useGame } from "@hooks/useGame";
import { gameStore } from '@store/store';
import Header from '../Header/Header';
import Results from '../Results/Results';
import './App.module.css'

function App() {
  const { finishedGame } = gameStore((state) => state)
  useGame();

  return (
    <>
      <Header />
      {!finishedGame && <WordsContainer />}
      {finishedGame && <Results />}
    </>
  )
}

export default App
