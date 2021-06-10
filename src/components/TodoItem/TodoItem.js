import React from 'react';
import s from './TodoItem.module.css'
import {useDispatch} from "react-redux";
import {finishItem, highlightItem, removeItem} from "../../redux/actions";
import {typeFilters} from "../../redux/reducer";

const TodoItem = ({value, type, important, id}) => {

    const dispatch = useDispatch();
    return (
        <div className={s.TodoItem}>
            <p
                onClick={() => dispatch(finishItem(id))}
                className={`${type === typeFilters.COMPLETED && s.done} ${important && s.important}`}
            >
                {value}
            </p>
            <div className={s.btnContainer}>
                <button
                    className={`${s.btn} ${s.btnDelete}`}
                    onClick={() => dispatch(removeItem(id))}
                >
                    🗑️
                </button>
                <button
                    className={`${s.btn} ${s.btnImportant}`}
                    onClick={() => dispatch(highlightItem(id))}
                >
                    ❗
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
