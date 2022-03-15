import { useState } from 'react'
import './App.css'
import Box from './Box'

const App=()=>{
  const [vegetables,setVegetables]=useState(['Potato','Tomato','Onion'])
  const [fruits,setFruits]=useState(["Apple","Grapes","Banana"])
  const [spices,setSpices]=useState(['Cinnamon','Pepper','Cloves'])
  const [electronics,setElectronics]=useState(['Mobile','Disk','Main Memory'])
  return (
    <div className="root">
           <h1>First React App</h1>
           <hr/>
             Add an Item <input type="text"/> <br/>
             Type <select>
               <option value="vegetables">Vegetables</option>
               <option value="fruits">Fruits</option>
               <option value="spices">Spices</option>
               <option value="electronics">Electronics</option>
             </select>
             <br/><br/>
             <button type="button">Add item</button>
           <hr/>
           <Box title="Vegetables" items={vegetables}/>
           <Box title="Fruits" items={fruits}/>
           <Box title="Spices" items={spices}/>
           <Box title="Electronics" items={electronics}/>
    </div>
  )
}

export default App