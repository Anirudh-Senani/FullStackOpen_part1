import React, {useState} from 'react'

const Display = ({text,counter}) => {
  return (
  <div>
    {text}  {counter}
  </div>
  )
}

const Button = ({text, handleClick}) => {
  return(
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}


const App = () => {

  const [good,setGood] = useState(0);
  const [bad,setBad] = useState(0);
  const [neutral,setNeutral] = useState(0);

  const handleGood = () => setGood(good+1)
  
  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  const handleBad = () => {
    setBad(bad+1)
  }



  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
      <Button text = 'good' handleClick = {handleGood}/>
      <Button text = 'neutral' handleClick = {handleNeutral}/>
      <Button text = 'bad'  handleClick = {handleBad}/>
      </div>
      <h1>Statistics</h1>
      <div>
      <Display text = 'good' counter = {good}/>
      <Display text = 'neutral' counter = {neutral}/>
      <Display text = 'bad' counter = {bad}/>
      </div>
    </div>
  )
}

export default App