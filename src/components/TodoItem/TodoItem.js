import React from 'react';
import s from './TodoItem.module.css'

const TodoItem = ({value = 0, done = false, important = false}) => {
    return (
        <div className={s.TodoItem}>
            <p>{value}</p>
            <div className={s.btnContainer}>
                <button className={`${s.btn} ${s.btnDelete}`}>🗑️</button>
                <button className={`${s.btn} ${s.btnImportant}`}>❗</button>
            </div>
        </div>
    );
};

export default TodoItem;
