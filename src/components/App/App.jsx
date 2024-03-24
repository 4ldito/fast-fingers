import { useGame } from "@hooks/useGame";
import { gameStore } from '@store/store';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import './App.module.css'
import Main from '../Main/Main';

function App() {
  const { loading } = gameStore((state) => state)
  useGame();

  return (
    <>
      {loading && <Loading />}
      <Header />
      <Main />
      {/* {finishedGame && <Results />} */}
    </>
  )
}

export default App
