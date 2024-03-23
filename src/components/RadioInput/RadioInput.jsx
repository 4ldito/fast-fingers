import style from './RadioInput.module.css'

const RadioInput = ({ label, name, onChange, value, state }) => {
  return (
    <div className={style.radioGroup}>
      <input checked={state === value} type="radio" name={name} onChange={onChange} value={value} />
      <label htmlFor="opt1" >{label}</label>
    </div>
  )
}

export default RadioInput