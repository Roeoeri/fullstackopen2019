import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(new Array(props.anecdotes.length).fill(0))
  const [mostVotes, setMostVotes]= useState(0)


  const voteAnecdote = () =>{
    const arr = vote(allVotes,selected)
    setAllVotes(vote(arr))
    setMostVotes(getIndexOfMostVoted(arr))
  }

  return (
    <div>
    <h1>Random anecdote</h1>
      {props.anecdotes[selected]}
      <p>
          Has {allVotes[selected]} votes
      </p>
      <p>
      <button onClick={()=> setSelected(randomElementOfArray(props.anecdotes))}>Next anecdote</button>
      <button onClick={()=>voteAnecdote(allVotes,selected)}>Vote anecdote</button>
      </p>
      <h1>Most Votes</h1>
      {props.anecdotes[mostVotes]}
    </div>
  )
}

const getIndexOfMostVoted = (arr) =>{
    let index = 0
    let mostVotes = 0;
    for(var i=0; i< arr.length; i++){
        if(arr[i] > mostVotes){
            index = i
            mostVotes = arr[i]
        }

    }
    return index
}

const vote = (arr,i) => {
    const copy = [...arr]
    copy[i] += 1
    return copy
}


const randomElementOfArray = (arr) =>{

    const length = arr.length
    return Math.floor(Math.random()*(length))
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