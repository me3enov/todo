import React from 'react';
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
      namePopup={'removeTask'}
      isOpenPopup={isOpenPopup}
      onClosePopup={onClosePopup}
      onSubmitForm={handleSubmit}
    >
      <TitleOfContainer nameForTitleOfForm={task.text} />
      <ButtonRemove
        typeForButton={'submit'}
        labelForButton={'Remove Task'}
        isDisabled={false}
        textForButton={'Remove Task'}
      />
    </PopupWithForm>
  );
};
