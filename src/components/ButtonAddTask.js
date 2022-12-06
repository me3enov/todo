function ButtonAddTask({ isOpen, handlePopupOpen }) {
  return (
    <button
      className={
        isOpen ? 'rubric__button-add-task rubric__button_disabled' : 'rubric__button-add-task'
      }
      type="button"
      aria-label="Add ItemOfTask"
      onClick={handlePopupOpen}
    >
      <p className="rubric__button-text">New task</p>
    </button>
  );
}

export default ButtonAddTask;
