import { useState, useEffect } from 'react';
import Main from './Main';
import PopupRemoveTask from './PopupRemoveTask';
import api from '../utils/api';

function App() {
  const [rubrics, setRubrics] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isRemoveTaskPopupOpen, setIsRemoveTaskPopupOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  function useUpdateTasks(items) {
    useEffect(() => {
      setTasks(items);
    }, [setTasks]);
    return tasks;
  };

  function handleRemoveTask(task) {
    setTasks(tasks.filter(item => item.id !== task.id));
  };

  function handleAddTask(task) {
    setTasks([task, ...tasks]);
    closeAllPopups();
  };

  function handleRemoveTaskClick(task) {
    setSelectedTask(task);
    setIsRemoveTaskPopupOpen(true);
  };

  function closeAllPopups() {
    setIsRemoveTaskPopupOpen(false);
    setSelectedTask(null)
  }

  useEffect(() => {
    api.getData()
      .then((res) => {
        const items = Object.values(res);
        //setRubrics(items);
        // For Frontend ONLY hardcode;
        const frontend = items.filter(item => item.name === 'Frontend')
        setRubrics(frontend);
      })
      .catch((err) => console.log(err));
    }, []);

  return (
    <div className="app">
      <Main
        rubrics={rubrics}
        onRemoveTaskClick={handleRemoveTaskClick}
        useUpdateTasks={useUpdateTasks}
        handleAddTask={handleAddTask}
      />
      <PopupRemoveTask
        task={selectedTask}
        isOpen={isRemoveTaskPopupOpen}
        onClose={closeAllPopups}
        handleRemoveTask={handleRemoveTask}
      />
    </div>
  );
}

export default App;
