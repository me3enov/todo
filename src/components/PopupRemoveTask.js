import PopupWithForm from './PopupWithForm';

function PopupRemoveTask({ task, isOpen, onClose, handleRemoveTask }) {
  /**
   * 1)Просто для информации - многие разработчики не приветствуют сокращение названий. Нет никаких мировых требований. Это всегда решается на уровне команды.
   * 2)Подумай над целесообразностью создавать сабмит тут, а не на уровень выше
   *   */
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
