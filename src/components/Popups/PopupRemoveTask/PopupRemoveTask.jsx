import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { ButtonRemove } from '../../Buttons/ButtonRemove';
import { TitleOfContainer } from '../../Form/TitleOfContainer';

export const PopupRemoveTask = ({ task, tasks, isOpenPopup, onClosePopup, onSetTasks }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSetTasks(tasks.filter((itemOfTasks) => itemOfTasks.id !== task.id));
    onClosePopup();
  };

  return (
    <PopupWithForm
      isNamePopup={'removeTask'}
      isOpenPopup={isOpenPopup}
      onClosePopup={onClosePopup}
      onSubmitForm={handleSubmit}>
      <TitleOfContainer isNameForTitleOfForm={task.text} />
      <ButtonRemove
        isTypeForButton={'submit'}
        isLabelForButton={'Remove Task'}
        isDisabled={false}
        isTextForButton={'Remove Task'}
      />
    </PopupWithForm>
  );
};
