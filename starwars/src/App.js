import React, { Component } from 'react';
import './App.css';
import './components/StarWars.css';
import CharacterTemplate from './components/CharacterTemplate'


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  next = () => {
    let i = this.state.page;
    i++;
    this.getCharacters(`https://swapi.co/api/people/?page=${i}`);
    this.setState ({ page: i });
  }

  previous = () => {
    let i = this.state.page;
    if (i === 1) {
      this.setState ({ page: 1 });
    }
    else {
      i--;
    this.getCharacters(`https://swapi.co/api/people/?page=${i}`);
    this.setState ({ page: i });
    }
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="buttons">
            <button onClick={this.previous} className="left">←</button>
            <button onClick={this.next}>→</button>
        </div>
        <div className="characterContainer">
          <CharacterTemplate starwarsChars={this.state.starwarsChars} />
        </div>
      </div>
    );
  }
}

export default App;
