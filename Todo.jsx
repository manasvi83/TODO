import React from 'react'
import { useState } from 'react'

export default function Todo() {
  const [inputtasks, setinputtasks] = useState('')
  const [tasks, settasks] = useState([])
  {
    settasks(...tasks, inputtasks);
    setinputtasks('');
  }

  // const addtask = ()=> 

  return (
    <>
      <div className='todo'>
        <div className='Heading'>
          <h1>To-Do List</h1>
        </div>
        <div className='list-contents' >
          <form>
            <input className='task' datatype='text' value={inputtasks} onChange={(e) => setinputtasks(e.target.value)} />
          </form>
          <button>+</button>
          <div className='list'>
            {
              tasks.map((elem, ind) => {
              return (
                <ul key={ind}>
                  <li>{elem}</li>
                </ul>
              )
              }
              )
              
            }

          </div>
        </div>
      </div>
    </>
  )
}
// onClick={addtask}