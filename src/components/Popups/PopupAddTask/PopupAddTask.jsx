import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { Form } from '../../Form';
import { ErrorOfForm } from '../../Form/ErrorOfForm';
import { ButtonsContainer } from '../../Form/ButtonsContainer';
import { ButtonSubmit } from '../../Buttons/ButtonSubmit';
import { ButtonDefault } from '../../Buttons/ButtonDefault';

import classNames from 'classnames/bind';
import styles from './popupAddTask.css';
const cx = classNames.bind(styles);

export const PopupAddTask = ({ isOpenPopup, onAddTask, onClosePopup }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  });

  const isStyleForForm = cx({
    popupAddTask: true,
    popupAddTaskDisabled: isOpenPopup
  });

  const classNameForInput = cx({
    inputOfForm: true
  });

  const onSubmit = (data) => {
    onAddTask({
      id: nanoid(10),
      text: data?.task || 'Untitled',
      disabled: false,
      checked: false
    });
    onClosePopup();
    reset();
  };

  return (
    <Form isStyleForForm={isStyleForForm} onSubmitForm={handleSubmit(onSubmit)}>
      <input
        className={classNameForInput}
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
      <ErrorOfForm isDisabledButton={!isValid} isErrorOfInput={errors.task} />
      <ButtonsContainer>
        <ButtonSubmit
          isTypeForButton={'submit'}
          isLabelForButton={'Add Task'}
          isDisabledButton={!isValid}
          isTextForButton={'Add Task'}
          tabIndex={0}
        />
        <ButtonDefault
          isTypeForButton={'button'}
          isLabelForButton={'Cancel add task'}
          onClickOnButton={onClosePopup}
          isTextForButton={'Cancel'}
          tabIndex={0}
        />
      </ButtonsContainer>
    </Form>
  );
};
