import React, {useState} from 'react';
import data from "./data";
import './App.css';
import List from './List';



function App() {
// state values, then input the List component, set up the prop 'people' and the value in parameter is {people}
  const [people, setPeople]=useState(data)

  return (
<main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people}/> 
      <button onClick={()=> setPeople([])}>
        Clear all 
      </button>

    </section>

</main>
     
  );
}

export default App;
