import { Content } from '../Content';
import { itemsForContent } from '../../utils/itemsForContent';

import classNames from 'classnames/bind';
import styles from './app.css';
const cx = classNames.bind(styles);

export const App = () => {
  const className = cx({
    app: true
  });

  return (
    <div className={className}>
      <Content itemsForContent={itemsForContent} />
    </div>
  );
};
