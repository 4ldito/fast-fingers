const Word = ({ word }) => {

  return (
    <div>
      {
        word.split("").map(letter => {
          return (
            // change <span> for <letter> then
            <span key={crypto.randomUUID()} className="letter">{letter}</span>
          )
        })
      }
    </div>
  )
}

export default Word