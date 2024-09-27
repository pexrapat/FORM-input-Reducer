import { useReducer } from 'react';
import TaskReducer from './TaskReducer'; // Import your reducer

export default function ListUserComponent({ people }) {
  const [tasks, dispatch] = useReducer(TaskReducer, []);

  const handleAddTask = (person) => {
    const taskId = person.id || person.name; // Ensure a unique id for the task
    dispatch({
      type: 'added',
      id: taskId,
      text: `Task for ${person.name}`,
    });
  };

  const handleDeleteTask = (person) => {
    const taskId = person.id || person.name; // Ensure a unique id for deletion
    console.log(`Deleting task with ID: ${taskId}`); // Debugging line
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                  <button
                    onClick={() => handleAddTask(person)}
                    className="mt-2 bg-indigo-600 text-white px-3 py-1 rounded-md"
                  >
                    Add Task
                  </button>
                  <button
                    onClick={() => handleDeleteTask(person)}
                    className="mt-2 bg-red-600 text-white px-3 py-1 rounded-md ml-2"
                  >
                    Delete Task
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>{task.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
