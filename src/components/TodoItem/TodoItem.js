import React, {useContext} from 'react';
import s from './TodoItem.module.css'
import {TodoContext} from "../App/App";

const TodoItem = ({value, done, important, id}) => {
    const {removeItem, highlightItem, finishItem} = useContext(TodoContext);
    return (
        <div className={s.TodoItem}>
            <p
                onClick={() => finishItem(id)}
                className={`${done && s.done} ${important && s.important}`}
            >
                {value}
            </p>
            <div className={s.btnContainer}>
                <button
                    className={`${s.btn} ${s.btnDelete}`}
                    onClick={() => removeItem(id)}
                >
                    🗑️
                </button>
                <button
                    className={`${s.btn} ${s.btnImportant}`}
                    onClick={() => highlightItem(id)}
                >
                    ❗
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
