export default function TaskReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id, // Ensure this ID is unique
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      // Make sure action.task has the same structure as the task objects
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task; // Update the task if IDs match
        }
        return t; // Return the existing task if IDs do not match
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id); // Filter out the task by ID
    }
    default: {
      throw new Error('Unknown action: ' + action.type); // Error handling for unknown action types
    }
  }
}
