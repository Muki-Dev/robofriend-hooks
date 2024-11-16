import React, { useState,useEffect } from 'react';
import CarList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'
import './App.css';

function App() {
  const [ robots,SetRobots ] = useState([]);
  const [ searchField,SetSearchField ] = useState('')

 useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => SetRobots(users))
  },[])

  const onSearchChange = (event) => {
    SetSearchField(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

  return !robots.length ?
    <h1>Loading</h1> 
    :(
       <div className='tc'>
        <h1 className='f1'>Robofriends Hooks</h1>
         <SearchBox searchChange={ onSearchChange } />
         <Scroll>
           <ErrorBoundry>
              <CarList robots={ filteredRobots } />
           </ErrorBoundry>
          </Scroll>
      </div>
    );
}

export default App;
