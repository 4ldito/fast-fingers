import WordsContainer from '../WordsContainer/WordsContainer'
import { useGame } from './../../hooks/useGame';
import './App.css'

function App() {
  useGame();
  
  return (
    <>
      <WordsContainer />
    </>
  )
}

export default App
