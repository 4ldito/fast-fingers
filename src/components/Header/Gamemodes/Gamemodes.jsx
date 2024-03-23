import style from "./Gamemodes.module.css"
import RadioInput from './../../RadioInput/RadioInput';
import { gameStore } from "../../../store/store";

const gamemodes = [
  {
    value: "time",
    label: "Tiempo",
  },
  {
    value: "words",
    label: "Palabras",
  },
  {
    value: "quotes",
    label: "Citas",
  },
  {
    value: "custom",
    label: "Personalizado",
  },
]

const Gamemodes = () => {
  const { gamemode, setGamemode } = gameStore((state) => state)

  const handleGamemodeChange = (e) => {
    setGamemode(e.target.value)
  }

  return (
    <section className={style.container}>
      {gamemodes.map(g => {
        return (
          <RadioInput
            key={g.value}
            state={gamemode}
            value={g.value}
            label={g.label}
            name={"opts"}
            onChange={handleGamemodeChange}
          />
        )
      })}
    </section>
  )
}

export default Gamemodes