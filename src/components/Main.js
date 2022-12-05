import ListOfRubric from './ListOfRubric';

function Main({ rubrics, onRemoveTaskClick, useUpdateTasks, handleAddTask }) {
  return (
    <main className="content">
      <ListOfRubric
        rubrics={rubrics}
        onRemoveTaskClick={onRemoveTaskClick}
        useUpdateTasks={useUpdateTasks}
        handleAddTask={handleAddTask}
      />
    </main>
  );
}

export default Main;
