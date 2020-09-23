import Person from './Person/Person'
import './App.css';
import React, { Component } from 'react'
import Practice1 from './Practice1'
import AuthContext from './context/Auth-context'


// function App() {
//   return (
//     <div className="App">
//       <Person />'Hellkjsdfkl'
//     </div>
//   );
// }

// export default App;


export default class App extends Component {
  state = {
    persons: [
      { id: "a", name: 'ram', age: 23 },
      { id: "b", name: 'hari', age: 34 },
      { id: "c", name: 'shyam', age: 12 }],
    showPersons: true,
    strlength: 0,
    authenticated: false
  }

  togglePersonsHandler = () => {
    console.log(this.state.showPersons)
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  namechangeHandler = (e, id) => {
    const currentItem = [...this.state.persons];
    const position = currentItem.map(x => x.id).indexOf(id);
    console.log("position is " + position)
    console.log("id is" + currentItem)
    console.log(e.target.value)
    currentItem[position].name = e.target.value
    this.setState({ persons: currentItem })
  }

  deletePersonHandler = (id) => {
    const currentItem = [...this.state.persons];
    const position = currentItem.map(x => x.id).indexOf(id);
    console.log("valueof position:" + position)
    currentItem.splice(position, 1)
    this.setState({ persons: currentItem })
  }
  getlengthHandler = (e) => {
    let strlength = e.target.value.length;
    // strlengthcopy  = [...this.state.strlength];
    this.setState({ strlength: strlength })
  }
  componentDidMount() {
    console.log("Did MOUNT started...")
  }
  componentDidUpdate() {
    console.log("Did UPDATE started..")
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        <Person plist={this.state.persons} deleteit={this.deletePersonHandler} changeHandler={this.namechangeHandler} />
      </div>);
    }

    return (
      <div className="App">
        <AuthContext.Provider value={{ authenticated: this.state.authenticated }}>
          {persons}
        </AuthContext.Provider>
        <button onClick={this.togglePersonsHandler}>toggler</button>
        <hr></hr>
        <Practice1 strlength={this.state.strlength} getlengthHandler={this.getlengthHandler} />
      </div>
    )
  }
}

