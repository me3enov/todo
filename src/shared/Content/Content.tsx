import React from 'react';
import styles from './content.css';
import { ListOfBoards } from '../ListOfBoards';

interface IItemsForContentProps {
  itemsForContent: {
    [key: string]: {
      title: {
        text: string;
        color: string;
      };
      items: Array<{
        id: string;
        text: string;
        checked: boolean;
      }>;
    };
  };
}

export const Content = ({ itemsForContent }: IItemsForContentProps) => {
  return (
    <main className={styles.content}>
      <ListOfBoards boards={itemsForContent} />
    </main>
  );
};
