import { nanoid } from 'nanoid';
import ItemOfTask from './ItemOfTask';

function ListTask({ tasksList, onRemoveTaskClick, useUpdateTasks }) {
  const items = Object.values(tasksList);
  const tasks = useUpdateTasks(items);

  return (
    <ul className="items-list items-list_place_tasks" aria-label="Tasks">
      {tasks.map((task) => {
        task.id = nanoid(10);
        return <ItemOfTask key={task.id} item={task} onRemoveTaskClick={onRemoveTaskClick} />;
      })}
    </ul>
  );
}

export default ListTask;
