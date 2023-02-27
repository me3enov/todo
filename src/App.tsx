import './main.global.less';
import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { Layout } from './shared/Layout';
import { Sidebar } from './shared/Sidebar';
import { Content } from './shared/Content';
import { itemsForContent } from './data/itemsForContent';

export const AppComponent = () => {
  return (
    <Layout>
      <Sidebar rubrics={itemsForContent}/>
        <Content itemsForContent={itemsForContent} />
    </Layout>
  );
};

export const App = hot(AppComponent);
