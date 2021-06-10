import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import s from './TodoList.module.css'

const TodoList = React.memo(({todoItems}) => {
    if (todoItems.length > 0) {
        return (
            <section className={s.TodoList}>
                {todoItems.map((item) => <TodoItem key={item.id} {...item} />)}
            </section>
        );
    }
    else {
        return (<></>);
    }
});

export default TodoList;
