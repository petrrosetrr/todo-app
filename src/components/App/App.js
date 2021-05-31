import React, {useState} from 'react';
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import AddItemPanel from "../AddItemPanel/AddItemPanel";

export const TodoContext = React.createContext(null);

function App() {
    const [todoItems, setTodoItems] = useState([
        {
            value: 'Drink tee',
            done: true,
            important: false,
            id: new Date().getTime().toString()  + '1',
        },
        {
            value: 'Learn react',
            done: false,
            important: true,
            id: new Date().getTime().toString() + '2',
        },
        {
            value: 'Build awesome apps',
            done: false,
            important: false,
            id: new Date().getTime().toString() + '3',
        },
    ]);

    const params = useState({query: '', done: null});

    const removeItem = (id) => {
        setTodoItems(todoItems.filter((item) => item.id !== id))
    };

    const addItem = (value) => {
        const newItem = {
            done: false,
            important: false,
            id: new Date().getTime().toString(),
            value,
        }
        setTodoItems([...todoItems, newItem]);
    };

    const highlightItem = (id) => {
        setTodoItems(todoItems.map((item)=> {
            if(item.id === id) {
                item.important = !item.important;
            }
            return item;
        } ));
    };

    const finishItem = (id) => {
        setTodoItems(todoItems.map((item) => {
            if (item.id === id)
                item.done = !item.done;
            return item;
        }));
    };

    const filterItems = (todoItems, [params]) => {
        if (params.query.length === 0 && params.done === null) {
            return todoItems;
        }
        return todoItems.filter((item) => {
            const contains = item.value.toLowerCase()
                .includes(params.query.toLowerCase())
            return contains && (item.done === params.done || params.done === null);
        });
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
                params,
            }
        }>
        <div className='App'>
            <div className='AppContainer'>
                <AppHeader
                    todo={todoItems.filter((todo) => !todo.done).length}
                    done={todoItems.filter((todo) => todo.done).length}
                />
                <SearchPanel />
                <TodoList todoItems={filterItems(todoItems, params)} />
                <AddItemPanel />
            </div>
        </div>
    </TodoContext.Provider>
  );
}

export default App;
