import Header from './Header';
import ListOfTasks from './ListOfTasks';
import getColorClass from "../utils/getColorClass";
import ContainerAddTask from "./ContainerAddTask";

function ItemOfRubric({ item, onRemoveTaskClick, useUpdateTasks, handleAddTask }) {
  const color = getColorClass(item.color);

  return (
    <li className="rubric">
      <Header
        color={color}
        title={item.name}
      />
      <ListOfTasks
        tasksList={item.tasks}
        onRemoveTaskClick={onRemoveTaskClick}
        useUpdateTasks={useUpdateTasks}
      />
      <ContainerAddTask
        handleAddTask={handleAddTask}
      />
    </li>
  );
}

export default ItemOfRubric;