import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0,0,0,0,0,0,0]);

  const getRandom = () => {
    const sel = Math.floor(Math.random() * (anecdotes.length));
    setSelected(sel);
  };

  const addVote = () => {
    let copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  var getMostLiked = () => {
    return votes.indexOf(Math.max.apply(null, votes));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br/>
      <button onClick={addVote}>vote</button>
      <button onClick={getRandom}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getMostLiked()]}</p>
      <p>has {votes[getMostLiked()]} votes</p>
    </div>
  )
};

export default App