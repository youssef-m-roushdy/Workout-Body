import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDatails = ({workout}) => {
    const {dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()

    const handleClick = async () => {
        if(!user) {
            return
        }
        
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
    
        if (response.ok) {
            // If the delete operation is successful, dispatch the action
            dispatch({ type: 'DELETE_WORKOUT', payload: { _id: workout._id } });
        } else {
            // Handle error cases if needed
            console.error('Failed to delete workout:', response.status, response.statusText);
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps (kg): </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )

}

export default WorkoutDatails