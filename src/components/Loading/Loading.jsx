import style from './Loading.module.css'

const Loading = () => {
  return (
    <div className={style.container}>
      <div className={style.background}></div>
      <div className={style.loading}><div></div><div></div></div>
    </div>
  )
}

export default Loading