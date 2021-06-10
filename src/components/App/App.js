import React, {useMemo} from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import AddItemPanel from '../AddItemPanel/AddItemPanel';
import {useSelector} from 'react-redux';
import {typeFilters} from '../../redux/reducer';

function App() {
    const todoItems = useSelector(state => state.todo);
    const filter = useSelector(state => state.filter);

    const filteredItems = useMemo( () => {
        if(filter.query.length === 0 && filter.type === typeFilters.ALL) {
            return todoItems;
        }

        return todoItems.filter((item) => {
            const contains = item.value.toLowerCase()
                .includes(filter.query.toLowerCase())
            return contains && (item.type === filter.type || filter.type === typeFilters.ALL);
        });
    }, [filter, todoItems]);

    return (
        <div className='App'>
            <div className='AppContainer'>
                <AppHeader
                    todo={todoItems.filter((item) => item.type === typeFilters.ACTIVE).length}
                    done={todoItems.filter((item) => item.type === typeFilters.COMPLETED).length}
                />
                <SearchPanel />
                <TodoList todoItems={filteredItems} />
                <AddItemPanel />
            </div>
        </div>
  );
}

export default App;
