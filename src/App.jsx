import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions';

function App() {
  const [workout, setWorkout] = useState(null);
  const [beastMode, setBeastMode] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  const updateWorkout = () => {
    let newWorkout = generateWorkout(beastMode, muscles, goal);
    if (muscles.length === 0) {
      return
    }
    console.log("New workout:", newWorkout);
    setWorkout(newWorkout);
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator 
        beastMode={beastMode} 
        setBeastMode={setBeastMode} 
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
