import React from 'react'

function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
        <p>ITS TIME TO BE ON</p> 
        <h1 className='uppercase font-semibold txt-4xl sm:text-5xl md:text-6xl'><span className='text-blue-400 font-medium '>Beast</span>Mode</h1>
        </div>
        <p className='text-sm md:text-base font'>
            <span className='text-blue-400 font-medium '>I hereby acknowledge:</span> All the late-night snacks, Netflix marathons, and that one 
            pizza delivery guy who knows me by name. You’ve been loyal companions through thick 
            (and maybe a little too thick) and thin. But as I embark on this journey with <span className='text-blue-400 font-medium '>GET FIT</span>, 
            I bid you a fond farewell. It’s time to swap the remote for dumbbells, the snacks for smoothies, and 
            the sweatpants for...well, sweatpants—but now they’ll be <span className='text-blue-400 font-medium '>workout-approved</span>.
        </p>
        <button className='px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueshadow duration-200'><p>Accept & Begin</p></button>
    </div>
  )
}

export default Hero