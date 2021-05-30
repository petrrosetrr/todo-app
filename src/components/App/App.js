import React, {useState} from 'react';
import s from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import AddItemPanel from "../AddItemPanel/AddItemPanel";

const todoItems = [
    {
        value: 'Drink tee',
        done: true,
        important: false,
        id: new Date().getTime().toString(),
    },
    {
        value: 'Learn react',
        done: false,
        important: true,
        id: new Date().getTime().toString(),
    },
    {
        value: 'Build awesome apps',
        done: false,
        important: false,
        id: new Date().getTime().toString(),
    },
];

export const TodoContext = React.createContext(null);

function App() {
    const [items, setItems] = useState(todoItems);

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }

    const addItem = (value) => {
        const newItem = {
            done: false,
            important: false,
            id: new Date().getTime().toString(),
            value,
        }
        setItems([...items, newItem]);
    }

    const highlightItem = (id) => {
        setItems(items.map((item)=> {
            if(item.id === id) {
                item.important = true;
            }
            return item;
        } ));
    }

    const finishItem = (id) => {
        setItems(items.map((item) => {
            if (item.id === id)
                item.done = true;
            return item;
        }));
    }

    return (
    <TodoContext.Provider
        value={
            {
                todoItems,
                removeItem,
                highlightItem,
                finishItem,
                addItem,
            }
        }>
        <div className={s.App}>
            <div className={s.container}>
                <AppHeader
                    todo={todoItems.filter((todo) => !todo.done).length}
                    done={todoItems.filter((todo) => todo.done).length}
                />
                <SearchPanel />
                <TodoList />
                <AddItemPanel />
            </div>
        </div>
    </TodoContext.Provider>
  );
}

export default App;
