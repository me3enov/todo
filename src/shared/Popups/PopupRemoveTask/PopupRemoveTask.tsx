import React from 'react';
import styles from './popupRemoveTask.less';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { Button } from '../../Button';
import { TitleOfContainer } from '../../Form/TitleOfContainer';
import { preventDefault } from '../../../utils/react/preventDefault';

type Task = {
  id: string;
  text: string;
  checked: boolean;
};

type PopupRemoveTask = {
  task: Task;
  tasks: Array<Task>;
  isOpenPopup: boolean;
  onClosePopup: () => void;
  onSetTasks: (tasks: Task[]) => void;
};

export const PopupRemoveTask = ({ task, tasks, isOpenPopup, onClosePopup, onSetTasks }: PopupRemoveTask) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSetTasks(tasks.filter((itemOfTasks) => itemOfTasks.id !== task.id));
    onClosePopup();
  };

  return (
    <PopupWithForm
      styleForForm={styles.form}
      isOpenPopup={isOpenPopup}
      onClosePopup={onClosePopup}
      onSubmitForm={preventDefault(handleSubmit)}
    >
      <TitleOfContainer nameForTitleOfForm={task.text} />
      <Button className={styles.buttonRemove} type={'submit'} aria-label={'Remove Task'}>{'Remove Task'}</Button>
    </PopupWithForm>
  );
};
