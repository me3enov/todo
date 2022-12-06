import PopupWithForm from './PopupWithForm';

function PopupRemoveTask({ task, isOpen, onClose, handleRemoveTask }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    handleRemoveTask(task);
    onClose();
  }

  return (
    <PopupWithForm
      name="remove-task"
      buttonText="Remove Task"
      buttonName="remove"
      buttonLabel="Remove Task"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="form__title-container">
        <h3 className="form__title">{`Do you want to remove "${task?.name}"?`}</h3>
      </div>
    </PopupWithForm>
  );
}

export default PopupRemoveTask;
