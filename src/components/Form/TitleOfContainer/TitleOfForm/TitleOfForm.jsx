import classNames from 'classnames/bind';
import styles from './titleOfForm.css';
const cx = classNames.bind(styles);

export const TitleOfForm = ({ isNameForTitleOfForm }) => {
  const className = cx({
    titleOfForm: true
  });

  return <h3 className={className}>{`Do you want to remove "${isNameForTitleOfForm}"?`}</h3>;
};
