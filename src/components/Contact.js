import React from 'react'

const Contact = () => {
  return (
    <div className='text-center  font-medium m-4'>
    <h2>Contact us page</h2>
      <form>
        <input className='m-3 border-2 border-black' type="text" placeholder='First name'  />
        <input className='m-3 border-2 border-black' type="text" placeholder='last name'  />
        <input className='m-3 border-2 border-black' type="Number" placeholder='mobile no.'  />
        <div>
        <button className='border-2 px-2 bg-blue-400 border-black rounded-lg'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
