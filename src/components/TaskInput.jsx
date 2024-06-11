import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, completed: false, date: new Date().toLocaleString() }));
      setTask('');
    }
  };

  return (
    <div className="row">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask} className="Add-button">Add Task</button>
    </div>
  );
};

export default TaskInput;
