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

const Statistics = ({good, bad,neutral}) => {
  if (good+bad+neutral === 0){
    return(<p>No feedback given</p>)
  }
  return(      
    <div>
    <h1>Statistics</h1>
    <table>
    <tbody>
    <tr>
      <td> good </td>
      <td> {good} </td>
    </tr>
    <tr>
      <td> neutral </td>
      <td> {neutral} </td>
    </tr>
    <tr>
      <td> bad </td>
      <td> {bad} </td>
    </tr>
    <tr>
      <td> average </td>
      <td> {(good-bad)/(good+bad+neutral)} </td>
    </tr>
    <tr>
      <td> positive </td>
      <td> {good*100/(good+bad+neutral)} % </td>
    </tr>
    </tbody>
    </table>
    </div>
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
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App