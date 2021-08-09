import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const initial = new Array(props.anecdotes.length).fill(0)
  const [votes, setVotes] = useState(initial)

  const randomEntryHandler = () => {
    const random = Math.floor(Math.random() * props.anecdotes.length)
    console.log(random)
    setSelected(random)

  }

  const voteHandler = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)

    let mostIndex = 0
    votes.forEach((vote, index) => {
      if (vote > mostIndex) {
        mostIndex = index
      }
    });
  }

  const mostVotesPosition = () => {
    let max = 0
    let maxPos = 0
    votes.forEach((vote, index) => {
      if (vote > max) {
        max = vote
        maxPos = index
      }
    })

    return maxPos
  }

  const mostVotes = () => {
    const pos = mostVotesPosition()

    return votes[pos]
  }

  const mostVotesAnecdote = () => {
    const pos = mostVotesPosition()

    return props.anecdotes[pos]
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteHandler}>vote</button>
      <button onClick={randomEntryHandler}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{mostVotesAnecdote()}</p>
      <p>has {mostVotes()} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)