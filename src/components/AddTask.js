import { useState } from 'react'

const AddTask = ({ onAdd }) => {
const [text, setText] = useState('')
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
  e.preventDefault()

  if(!text) {
    alert('Please add task')
    return
  }

  onAdd({ text, day, reminder})
    
  setText('')
  setDay('')
  setReminder(false)
}

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>What are you going to get done?</label>
        <input 
        type='text' 
        placeholder='Add an objective'
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        />
      </div>
      <div className='form-control'>
        <label>When will it be completed?</label>
        <input 
        type='text' 
        placeholder='Add a deadline'
        value={day} 
        onChange={(e) => setDay(e.target.value)} 
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
        type='checkbox' 
        checked={reminder}  
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)} 
        />
      </div>

      <input type='submit' value='Set Objective' className='btn btn-block' />
    </form>
  )
}

export default AddTask
