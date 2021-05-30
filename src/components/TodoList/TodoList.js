import React, {useContext, useEffect} from 'react';
import TodoItem from "../TodoItem/TodoItem";
import s from './TodoList.module.css'
import {TodoContext} from "../App/App";

const TodoList = () => {
    const {todoItems} = useContext(TodoContext);
    useEffect(() => console.log(todoItems), [todoItems]);
    return (
        <section className={s.TodoList}>
            {todoItems.map((item) => <TodoItem key={item.id} {...item} />)}
        </section>
    );
};

export default TodoList;
