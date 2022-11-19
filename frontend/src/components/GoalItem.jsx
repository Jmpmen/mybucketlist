import { useDispatch } from 'react-redux'
import { FiTrash } from 'react-icons/fi'
import { updateGoal, deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className={`goal ${goal.completed ? 'completed' : ''}`}>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button className={`complete-btn ${goal.completed ? 'incomplete-btn' : ''}`} onClick={() => dispatch(updateGoal(goal._id))}>
        {goal.completed ? 'Undo': 'Mark Complete'}
      </button>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <FiTrash />
      </button>
    </div>
  )
}

export default GoalItem
