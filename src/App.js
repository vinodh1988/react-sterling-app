import './App.css'
import Box from './Box'

const App=()=>{
  return (
    <div className="root">
           <h1>First React App</h1>
           <hr/>
           <Box title="Vegetables"/>
           <Box title="Fruits"/>
           <Box title="Spices"/>
           <Box title="Electronics"/>
    </div>
  )
}

export default App