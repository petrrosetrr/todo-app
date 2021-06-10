import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import App from './components/App/App';
import rootReducer, {typeFilters} from "./redux/reducer";

const initalState = {
    todo: [
        {
            value: 'Drink tee',
            type: typeFilters.ACTIVE,
            important: false,
            id: new Date().getTime().toString()  + '1',
        },
        {
            value: 'Learn react',
            type: typeFilters.ACTIVE,
            important: true,
            id: new Date().getTime().toString() + '2',
        },
        {
            value: 'Build awesome apps',
            type: typeFilters.COMPLETED,
            important: false,
            id: new Date().getTime().toString() + '3',
        },
    ],
    filter: {
        query: '',
        type: typeFilters.ALL,
    }
};
const store = createStore(rootReducer, initalState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
