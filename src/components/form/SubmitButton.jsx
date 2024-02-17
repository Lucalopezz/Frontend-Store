import React from 'react'

export const SubmitButton = ({btnValue}) => {
  return (
    <input type="submit" value={btnValue} className='bg-slate-900 cursor-pointer p-4 px-8 text-white font-bold rounded-lg mt-3 hover:bg-slate-800' />
  )
}
