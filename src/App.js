import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  // automatically calls this function when react mounts components onto the webpage
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // works like promise
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  // render onto the screen
  render() {

    const { monsters , searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
        placeholder='search monster'
        handleChange = {this.handleChange} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
