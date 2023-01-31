import { TitleOfForm } from './TitleOfForm';

import classNames from 'classnames/bind';
import styles from './titleOfContainer.css';
const cx = classNames.bind(styles);

export const TitleOfContainer = ({ isNameForTitleOfForm }) => {
  const className = cx({
    titleOfContainer: true
  });

  return (
    <div className={className}>
      <TitleOfForm isNameForTitleOfForm={isNameForTitleOfForm} />
    </div>
  );
};
