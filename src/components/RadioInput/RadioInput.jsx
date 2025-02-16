import style from './RadioInput.module.css'

const RadioInput = ({ label, onChange, value, state }) => {
  return (
    <button className={`${style.radio} ${state === value ? style.selectedRadio : ""}`} onClick={onChange} value={value}>
      {label}
    </button>
  )
}

export default RadioInput