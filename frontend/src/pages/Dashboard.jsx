import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'

function Dashboard() {
  const [showAdd, setShowAdd] = useState(false)
  const onToggleAdd = () => {
    setShowAdd(!showAdd)
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>MyBucketList Dashboard</h1>
      </section>

      <section className='content'>
      <button className={showAdd ? 'btn btn-close' : 'btn'} onClick={onToggleAdd}>{showAdd ? 'Close' : 'Add a Goal'}</button>
        {showAdd && <GoalForm />}
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>Bucket List is empty</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
