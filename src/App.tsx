import './main.global.css';
import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { Content } from './shared/Content';
import { itemsForContent } from './data/itemsForContent';

export const AppComponent = () => {
    return (
        <div className={'app'}>
            <Content itemsForContent={itemsForContent} />
        </div>
    );
};

export const App = hot(AppComponent);
