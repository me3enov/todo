import { ButtonClosePopup } from '../../Buttons/ButtonClosePopup';
import { Form } from '../../Form';

import classNames from 'classnames/bind';
import styles from './popupWithForm.css';
const cx = classNames.bind(styles);

export const PopupWithForm = ({ isOpenPopup, onClosePopup, onSubmitForm, children }) => {
  const classNameForPopup = cx({
    popup: true,
    popupOpened: isOpenPopup
  });

  const classNameForContainer = cx({
    popupContainer: true
  });

  const handleClickClosePopup = (event) => {
    if (event.target === event.currentTarget) {
      onClosePopup();
    }
  };

  return (
    <div onClick={handleClickClosePopup} className={classNameForPopup}>
      <div className={classNameForContainer}>
        <ButtonClosePopup onClosePopup={handleClickClosePopup} />
        <Form onSubmitForm={onSubmitForm}>{children}</Form>
      </div>
    </div>
  );
};
