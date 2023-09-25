import React from 'react'

function Searchbox() {
  return (
    <div className='searchbox'>

    <input type='text' className='job-search1' placeholder='Enter the job'></input>
    
    <input type='text' className='job-search2' placeholder='Enter the city'></input>
    <button type='submit' className='Search'> Search </button>
    </div>
  )
}
export default Searchbox;