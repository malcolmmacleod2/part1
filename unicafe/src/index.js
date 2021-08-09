import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {

  const all = good + bad + neutral

  const average = good - bad

  const positive = all !== 0 ? (good / all) : 0

  if (!good && !neutral && !bad) {
    return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      
      </table>
      
    </div>
  )
}

const Statistic = ({text, value}) => {
  return (
      <tr>
        <td>{text}</td><td>{value}</td>
      </tr>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGood = () => setGood(good + 1)
  
  const onNeutral = () => setNeutral(neutral + 1)

  const onBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={onGood} text="good" />
      <Button handleClick={onNeutral} text="neutral" />
      <Button handleClick={onBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)