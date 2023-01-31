import { FieldsetOfForm } from './FieldsetOfForm';

import classNames from 'classnames/bind';
import styles from './form.css';
const cx = classNames.bind(styles);

export const Form = ({ isStyleForForm, onSubmitForm, children }) => {
  const className = cx(
    {
      form: true
    },
    isStyleForForm
  );

  return (
    <form className={className} noValidate onSubmit={onSubmitForm}>
      <FieldsetOfForm> {children} </FieldsetOfForm>
    </form>
  );
};
