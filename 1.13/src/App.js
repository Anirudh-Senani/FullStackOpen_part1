import React, {useState} from 'react'

const Button = ({text, handleClick}) => {
  return(
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [points,setPoints] = useState(new Array(6).fill(0))

  const handleSelect = () => {
    setSelected(Math.floor(Math.random()*5 + 1))
  }

  const handleVote = () => {
    const point = [...points]
    point[selected]++
    setPoints(point)
  }

  return (
    <div>
      {anecdotes[selected]} <br></br>
      has {points[selected]} votes
      <div>
        <Button text = 'next anecdote' handleClick = {handleSelect}/>
        <Button text = 'vote' handleClick = {handleVote}/>
      </div>
    </div>
  )
}

export default App