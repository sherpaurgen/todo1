import Person from './Person/Person'
import './App.css';
import React, { useState } from 'react'

const App = (props) => {

  //useState return two element 1st) current state 2nd) function that update state
  const [personsState, setPersonsState] = useState({
    persons: [{ name: 'msdf', age: 23 },
    { name: 'wew', age: 34 },
    { name: 'ter', age: 12 }],
    stuffs: "sdlkjf"
  });
  const switchnameHandler = () => {
    console.log("button clicked")
    setPersonsState({
      persons: [{ name: 'ddd', age: 23 },
      { name: 'sssssw', age: 34 },
      { name: 'eeee', age: 12 }]
    })
  }
  return (
    <div>
      <Person name={personsState.persons[0].name} />
      <Person name={personsState.persons[1].name} />
      <button onClick={switchnameHandler}>change</button>
    </div>
  )
}
export default App;






