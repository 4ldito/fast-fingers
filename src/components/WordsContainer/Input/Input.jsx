const Input = () => {
  const handleFocus = (e) => {
    console.log("focus")
  }
  
  return (
    <input onFocus={handleFocus} type="text" />
  )
}

export default Input