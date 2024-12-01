import React from 'react'

function SectionWrapper(props) {
    const {children, header, title, id} = props;
  return (
   <section id={id} className='min-h-screen flex flex-col gap-10'>
    <div className='bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center p-4'>
        <p className='uppercase font-medium'>{header}</p>
        <h2 className='font-semi-bold text-3xl sm:text-4xl md-text-5xl lg-6xl'>{title[0]} {title[1]} <span className='text-blue-400'>{title[2]}</span>{title[3]}</h2>
    </div>
    
    <div className='max-w-[800] w-full flex flex-col mx-auto gap-10 p-4'>
        {children}
    </div>
   </section>
  )
}

export default SectionWrapper