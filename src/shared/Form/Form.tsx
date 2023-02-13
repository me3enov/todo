import React from 'react';
import { FieldsetOfForm } from './FieldsetOfForm';

import classNames from 'classnames/bind';
import styles from './form.css';
const cx = classNames.bind(styles);

type PopupAddTask = {
  styleForForm: string;
  onSubmitForm: any; // какой сюда тип? 0o
  children: React.ReactNode;
};

export const Form = ({ styleForForm, onSubmitForm, children }: PopupAddTask) => {
  const className = cx(
    {
      form: true
    },
    styleForForm
  );

  return (
    <form className={className} noValidate onSubmit={onSubmitForm}>
      <FieldsetOfForm> {children} </FieldsetOfForm>
    </form>
  );
};
