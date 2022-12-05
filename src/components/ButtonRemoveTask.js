function ButtonRemoveTask({ task, onButtonClick }) {
  function handleClick() {
    onButtonClick(task)
  }

  return (
    <button
      className="task__remove-button"
      type="button"
      aria-label="Remove task"
      onClick={handleClick}
    >
    </button>
  );
}

export default ButtonRemoveTask;