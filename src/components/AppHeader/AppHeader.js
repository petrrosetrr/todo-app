import React from 'react';
import s from './AppHeader.module.css'

const AppHeader = React.memo(({todo = 0 , done = 0}) => {
    return (
        <header className={s.AppHeader}>
            <h1>Todo List</h1>
            <p>{todo} more to do, {done} done</p>
        </header>
    );
});

export default AppHeader;
