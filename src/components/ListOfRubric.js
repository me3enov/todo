import ItemOfRubric from "./ItemOfRubric";

function ListOfRubric({ rubrics, onRemoveTaskClick, useUpdateTasks, handleAddTask }) {
  return (
    <ul
      className={`items-list items-list_place_rubrics`}
      aria-label='Rubrics'>
      {rubrics.map((rubric) => {
        const {id} = rubric;
          return (
            <ItemOfRubric
              key={id}
              item={rubric}
              onRemoveTaskClick={onRemoveTaskClick}
              useUpdateTasks={useUpdateTasks}
              handleAddTask={handleAddTask}
            />
        );
      })}
    </ul>
  );
}

export default ListOfRubric;
