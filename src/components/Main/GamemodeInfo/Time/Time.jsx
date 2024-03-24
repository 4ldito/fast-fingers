import useTimer from '@hooks/useTimer'
import style from './Time.module.css'

const Time = () => {
  const { time } = useTimer();

  return (
    <span className={style.time}>
      {time}
    </span>
  )
}

export default Time