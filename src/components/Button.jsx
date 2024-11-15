import React from 'react'

function Button(props) {
    const { func, text } = props;
  return (
    <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueshadow duration-200'>
        <p>{ text }</p>
    </button>
  )
}

export default Button