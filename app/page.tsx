import { addReservation, getReservations , removeReservation} from '@/app/lib/reservation';
export default async function ReservationApp() {
  const tasks = await getReservations();
  return (
    <>
      <form action={addReservation}>
        <label>
          New task: <input name="title" />
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {tasks.map((task) => (
            <li key={task.id}>
              {task.title} 
            <form action={removeReservation} className="inline">
                <input type="hidden" name="id" value={task.id} />
                <button type="submit">Delete task</button>
              </form>
            </li>
        ))}
      </ul>
    </>
  )
}