
import { useEffect, useState } from 'react';
import './App.css';

//const API="http://localhost:4000"
const API="https://sandy-node.herokuapp.com"

function App() {

  const[mobiles,setMobiles]= useState([])

  useEffect(()=>{
  fetch(`${API}/mobiles`)
  .then((data)=>data.json())
  .then((mbs)=>setMobiles(mbs))
},[])
  
  return (
    <div className="App">
      <div className='phone-list-container'>
      {mobiles.map((mobile)=>(
         <Phone key={mobile._id} mobile={mobile}/>
      ))}
      </div>
      </div>
  );
}


function Phone({mobile}){
  
  return(
    <div className='phone-container'>
      <img className='phone-picture' src={mobile.img} alt={Image}></img>
      <h2 className='phone-name'>{mobile.model}</h2> 
      <p className='phone-company'>{mobile.company}</p>
    </div>
  )
}


export default App;
