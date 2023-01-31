import classNames from 'classnames/bind';
import styles from './fieldsetOfForm.css';
const cx = classNames.bind(styles);

export const FieldsetOfForm = ({ children }) => {
  const className = cx({
    fieldsetOfForm: true
  });

  return <fieldset className={className}>{children}</fieldset>;
};
