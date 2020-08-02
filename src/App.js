import React, { Component } from 'react';
import {CardList} from './components/card-list/cardList.component.jsx';
import {SearchBox} from './components/serach-box/searchBox.component';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        monsters : [],
        searchField : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>this.setState({monsters :users}))
  }
  
  render() { 
    const {monsters,searchField}=this.state;
    const filterMosters = monsters.filter(monsters=>monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return ( 
    <div>
    <h1 className="App">Monsters Rolodex</h1>
    <SearchBox placeholder="Search Monster" handleChange={(e)=>
      this.setState({searchField : e.target.value},()=>console.log(this.state))} />
      <CardList monsters={filterMosters} />
    </div>
     );
  }
} 
 
export default App;