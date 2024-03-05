import { useState } from 'react'
import './App.css';
import Searchedgif from './Components/SearchedGif';
import Randomgif from './Components/RandomGif';

function App() {
  // const [count, setCount] = useState(0)

  return (
      // full div 
      <div className=' w-screen h-screen background flex flex-col items-center overflow-x-auto'>
      {/* Heading */}
      <h1 className=' text-3xl font-bold w-10/12 bg-white text-center mt-10 rounded-lg'>Random Gifs</h1>
      {/* Box Divs */}
      <div>
      <Randomgif></Randomgif>
      <Searchedgif></Searchedgif>
      </div>

      </div>
    
  )
}

export default App
