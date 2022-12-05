import ButtonSubmit from "./ButtonSubmit";
import {useState} from "react";
import {nanoid} from "nanoid";

function PopupAddTask({ isOpen, handleAddTask, handleTogglePopupOpen }) {
  const [task, setTask] = useState('');

  function handleTaskText(evt) {
    setTask(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    handleAddTask({
      id: nanoid(10),
      name: task,
      disabled: false,
      checked: false,
    });
    setTask('');
    handleTogglePopupOpen();
  }

  return (
    <form
      id='form_add-task'
      className={(!isOpen ? 'form form_add-task form_disabled' :
        'form form_add-task')}
      name='form_add-task'
      noValidate
      onSubmit={handleSubmit}
    >
      <fieldset className="form__input-container">
        <input
          id="form__input_task-name"
          className="form__input form__input_task-name"
          name="name"
          type="text"
          placeholder="Task text"
          minLength="2"
          maxLength="50"
          required
          value={task ? task : ''}
          onChange={handleTaskText}/>
        <span
          id="form__input_name-error"
          className="form__input-error"/>
        <div className="form__buttons-container">
          <ButtonSubmit
            text="Add Task"
            name="submit"
            nabel="Add Task"
            tabIndex={0}
          />
          <button
            className="form__button form__button_cancel"
            type="button"
            aria-label="Cansel Add Task"
            onClick={handleTogglePopupOpen}
          >
            Cancel
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export default PopupAddTask;