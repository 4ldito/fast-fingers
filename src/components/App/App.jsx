import WordsContainer from '../WordsContainer/WordsContainer'
import { useGame } from "@hooks/useGame";
import { gameStore } from '@store/store';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import './App.module.css'

function App() {
  const { loading } = gameStore((state) => state)
  useGame();

  return (
    <>
      {loading && <Loading />}
      <Header />
      <WordsContainer />
      {/* {finishedGame && <Results />} */}
    </>
  )
}

export default App
