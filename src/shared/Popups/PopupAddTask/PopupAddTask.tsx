import React from 'react';
import { useForm } from 'react-hook-form';
import uuid from 'uuid/v4';

import { Form } from '../../Form';
import { ErrorOfForm } from '../../Form/ErrorOfForm';
import { Button } from '../../Button';

import classNames from 'classnames/bind';
import styles from './popupAddTask.less';
const cx = classNames.bind(styles);

interface ITaskProps {
  id: string;
  text: string;
  checked: boolean;
}

type Data = {
  task: string;
};

type PopupAddTask = {
  isOpenPopup: boolean;
  onAddTask: (task: ITaskProps) => void;
  onClosePopup: () => void;
};

export const PopupAddTask = ({ isOpenPopup, onAddTask, onClosePopup }: PopupAddTask) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm<Data>({
    mode: 'onBlur'
  });

  const styleForForm = cx({
    popupAddTask: true,
    popupAddTaskDisabled: isOpenPopup
  });

  const styleForSubmitButton = cx({
    buttonDefault: true,
    buttonSubmit: true
  });

  const onSubmit = (data: Data) => {
    onAddTask({
      id: uuid(),
      text: data?.task || 'Untitled',
      checked: false
    });
    onClosePopup();
    reset();
  };

  return (
    <Form className={styleForForm} noValidate onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.inputOfForm}
        {...register('task', {
          required: 'Required field',
          minLength: {
            value: 3,
            message: 'Minimum 3 characters'
          },
          maxLength: {
            value: 50,
            message: 'Maximum 50 characters'
          }
        })}
      />
      <ErrorOfForm isDisabledButton={!isValid} errorOfInput={errors.task} />
      <div className={styles.buttonsContainer}>
        <Button
          className={styleForSubmitButton}
          type={'submit'}
          aria-label={'Add Task'}
          disabled={!isValid}
        >
          {'Add Task'}
        </Button>
        <Button
          className={styles.buttonDefault}
          type={'button'}
          aria-label={'Cancel add task'}
          onClick={onClosePopup}
        >
          {'Cancel'}
        </Button>
      </div>
    </Form>
  );
};
