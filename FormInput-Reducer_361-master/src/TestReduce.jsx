import { useState } from 'react';
import FormComponent from './FormComponent';
import ListUserComponent from './ListUserComponent';

let nextId = 3; // Initialize nextId here
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function TestReduce() {
  const [tasks, setTasks] = useState(initialTasks); // Initialize tasks with initialTasks

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++, // Increment nextId for each new task
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(updatedTask) {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <FormComponent onAddTask={handleAddTask} />
      <ListUserComponent
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
