import React, {Component} from 'react';
import Person from './components/Person/Person';

import './App.css';

class App extends Component {
  state = {
    people: [
      {name: 'Dmitrii', age: 29, hobby: 'Hobby: Video games', id: 'd1'},
      {name: 'John', age: 30, hobby: 'Likes drinking alone', id: 'j1'},
      {name: 'Jack', age: 69, hobby: 'Collects posts stamps', id: 'j2'},
      {name: 'Haru-kun', age: 19, hobby: 'Otaku desu!', id: 'h1'}
    ],
    showPeople: true
  };


  changeName = (event, index) => {
    const people = [...this.state.people];
    const person = {...people[index]};
    person.name = event.target.value;
    people[index] = person;

    this.setState({people});
  };

  increaseAge = index => {
    const people = [...this.state.people];
    const person = {...people[index]};
    person.age++;
    people[index] = person;

    this.setState({people});
  };

  togglePeople = () => {
    this.setState({
      showPeople: !this.state.showPeople
    });
  };

  removePerson = index => {
    const people = [...this.state.people];
    people.splice(index, 1);

    this.setState({people});
  };

  render() {
    let people = null;

    if (this.state.showPeople) {

      people = this.state.people.map((person, index) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            onClick={() => this.increaseAge(index)}
            onChange={event => this.changeName(event, index)}
            remove={() => this.removePerson(index)}
          >
            <i>{person.hobby}</i>
          </Person>
      ));
    }

    return (
      <div className="App">
        <div>
          <button onClick={this.togglePeople}>Toggle people</button>
        </div>
        {people}
      </div>
    );
  }
}

export default App;
