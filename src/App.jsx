
import { Provider } from 'react-redux';
import store from './Redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="todo-app">
        <h2>To-Do List <img src="https://w7.pngwing.com/pngs/645/931/png-transparent-check-list-todo-list-thumbnail.png" alt="" /></h2>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
