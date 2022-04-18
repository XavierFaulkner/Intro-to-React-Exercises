import React, {useState} from 'react'

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad;
  const average = Math.round(((good + (bad*-1))/all) * 10) / 10;
  const positive = Math.round(((good/all)*100) * 10) / 10;

  if(all === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  } else {
    return (
      <>
        <table>
          <tbody>
            <StatisticsLine text="good" value={good}/>
            <StatisticsLine text="neutral" value={neutral}/>
            <StatisticsLine text="bad" value={bad}/>
            <StatisticsLine text="all" value={all}/>
            <StatisticsLine text="average" value={average}/>
            <StatisticsLine text="positive" value={positive}/>
          </tbody>
        </table>
      </>
    )
  }
};

const StatisticsLine = ({text, value}) => {
  return (
    <>
      <tr>
        <th style={{textAlign: "left"}}>{text}</th>
        <td>{value}</td>
      </tr>
    </>
  )
};

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="App">
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
