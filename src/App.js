import React from 'react';
import './App.css';

import {CardList} from './Components/card-list/card-list.component'
import {WonderList} from './Components/wonder-list/wonder-list.component'
import {SearchBox} from './Components/search-Box/search-box.component'
class App extends React.Component    {
  constructor(){
    super();
    this.state = {
      
      wonders: [
              {name : 'Taj Mahal', id :'1'},
              {name : 'Leaning Tower of Pisa', id :'2'},
              {name : 'Great Wall of China', id :'3'},
              {name : 'Statue of Liberty', id :'4'}
      ],

      usersData:[] , searchField :""
    };

    

  }

  handleClick = e => {this.setState({ searchField : e.target.value})};
  
  componentDidMount(){
              fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(users => this.setState({usersData:users}))

  }


render() {
  const userData = this.state.usersData;
  const searchField = this.state.searchField;
 const filteredUser = userData.filter(user => 
  user.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
    <div className="App">
      <h1>User Details</h1>
      <SearchBox 
                placeholder='search users' 
                handleChange={(e)   => this.setState( { searchField : e.target.value})}>

                </SearchBox>
      <CardList usersData={filteredUser}>
        
      </CardList>

     <WonderList wonders={this.state.wonders}>

     </WonderList>


    </div>
  );
}
}

export default App;
