import React from 'react';
import s from './AppHeader.module.css'

const AppHeader = ({todo, done}) => {

    return (
        <header className={s.AppHeader}>
            <h1>Todo List</h1>
            <p>{todo} more to do, {done} done</p>
        </header>
    );
};

export default AppHeader;
