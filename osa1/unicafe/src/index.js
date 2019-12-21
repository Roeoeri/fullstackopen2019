import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => <h1>{title}</h1>

const VotingButton = ({name,handler}) => <button onClick={handler}>
    {name}</button>

const Statistics = ({parts}) =>{
    const good = parts[0].value
    const neutral = parts[1].value
    const bad = parts[2].value

    const all = good + neutral + bad
    const positive = good/all
    const average = (good-bad)/all

    if(all === 0){
        return(<p>No feedback yet</p>)
    }
    return(
        <div>
            <Header title = "Statistics"/>
        <table>
            <tbody>
        {parts.map(part => <Statistic key = {part.name} text={part.name} value={part.value}/>)}
        <Statistic text="All" value={all}/>
        <Statistic text="Average" value={average}/>
        <Statistic text="Positive %" value={positive*100}/> 
           </tbody>
        </table>
        </div>
    )
} 

const Statistic = ({text,value}) => <tr><td>{text}</td><td>{value}</td></tr>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const parts = [{name : "good", value:good},
                 {name : "neutral", value:neutral},
                 {name : "bad", value:bad}]


  const vote= (currentValue,handler) =>{
      return  (
         () => handler(currentValue +1)
      )

  }

  return (
    <div>
      <Header title="Give feedback"/>
      <VotingButton name="good" handler={vote(good,setGood)}/>
      <VotingButton name="neutral"handler={vote(neutral,setNeutral)}/>
      <VotingButton name="bad" handler={vote(bad,setBad)}/>
      <Statistics parts={parts}/>
    </div>
  )
}
ReactDOM.render(<App />, 
  document.getElementById('root')
)