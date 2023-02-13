import React from 'react';
import { ButtonClosePopup } from '../../Buttons/ButtonClosePopup';
import { Form } from '../../Form/ts';

import classNames from 'classnames/bind';
import styles from './popupWithForm.css';
const cx = classNames.bind(styles);

type PopupWithForm = {
  styleForForm: string;
  isOpenPopup: boolean;
  onClosePopup: () => void;
  onSubmitForm: any; // и тут??
  children: React.ReactNode;
};

export const PopupWithForm = ({ styleForForm, isOpenPopup, onClosePopup, onSubmitForm, children }: PopupWithForm) => {
  const classNameForPopup = cx({
    popup: true,
    popupOpened: isOpenPopup
  });

  const handleClickClosePopup = (event: any) => { // тут??
    if (event.target === event.currentTarget) {
      onClosePopup();
    }
  };

  return (
    <div onClick={handleClickClosePopup} className={classNameForPopup}>
      <div className={styles.popupContainer}>
        <ButtonClosePopup onClosePopup={handleClickClosePopup} />
        <Form className={styleForForm} noValidate onSubmit={onSubmitForm}>{children}</Form>
      </div>
    </div>
  );
};