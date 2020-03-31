import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends = [{name:'akash', school:'sm high schhol', location:'chitalmari'},
  {name:'rayhan', school:'oxford', location:'dhaka'},
  {name:'rana', school:'college of development', location:'bagerhat'}
]
 return (
    <div className="App">
     <header className="App-header">
          {
            friends.map(id => <Friend identity={id}></Friend>)
          }
          <Counter></Counter>
          <Person></Person>
         
          
       </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  console.log(setCount);
  
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  // const handleDecrease = () => { 
  //   const decCount = count - 1;
  //   setCount(decCount); 
  // }
  return (
    <div>
       <h1>Count:{count}</h1>
       <button onMouseMove={() => setCount(count + 1)}>Increase</button>
       <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Friend(data){
  const color = {
    border:'1px solid blue',
    backgroundColor:'gray',
    height:'200px',
    width:'200px',
   }
  const {name, school, location} = data.identity;
 return (
 <div style={color}>
    <h3>Name:{name}</h3>
    <h3>School:{school}</h3>
    <h3>location:{location}</h3>
  </div>

 )
}

function Person(){
  const[users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div>
      <h3>UserName:{users.length}</h3>
      <ul>
         {
            users.map(user => <li>{user.name}</li>)
          }
      </ul>
      
    </div>
  )
}

export default App;
