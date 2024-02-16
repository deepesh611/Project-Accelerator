import './App.css'
import { Navbar } from './components/Navbar'
import  Offers  from './components/cards'
import data from './data/data.json'
function App() {
  return (
    <div>
     <Navbar />
     <Offers offer={data.offer}/>
     </div>
  )
}

export default App
