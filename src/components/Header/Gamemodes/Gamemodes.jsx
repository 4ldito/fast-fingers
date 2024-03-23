import style from "./Gamemodes.module.css"

const Gamemodes = () => {
  return (
    <section className={style.container}>
      <button>Tiempo</button>
      <button>Palabras</button>
      <button>Citas</button>
      <button>Custom</button>
    </section>
  )
}

export default Gamemodes