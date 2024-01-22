const Word = ({ word }) => {

  return (
    <div>
      {
        word.split("").map(letter => {
          return (
            <span key={crypto.randomUUID()} className="letter">{letter}</span>
          )
        })
      }
      <span></span>
    </div>
  )
}

export default Word