import * as types from './types';
import {combineReducers} from "redux";

const todoReducer = (state, action) => {
    if (!state) {
        return null;
    }
    switch (action.type) {
        case types.ADD_ITEM:
            return [...state, action.payload];
        case types.REMOVE_ITEM:
            return state.filter((item) => item.id !== action.payload.id)
        case types.HIGHLIGHT_ITEM:
            return (state.map((item) => {
                if (action.payload.id === item.id) {
                    item.important = !item.important;
                }
                return item;
            }));
        case types.FINISH_ITEM:
            return (state.map((item) => {
                if (action.payload.id === item.id) {
                    if (item.type === typeFilters.COMPLETED)
                        item.type = typeFilters.ACTIVE;
                    else
                        item.type = typeFilters.COMPLETED;

                }
                return item;
            }));
        default:
            return state
    }
};


export const typeFilters = {
    ALL: null,
    ACTIVE: true,
    COMPLETED: false,
};

const filterReducer = (state, action) => {
    if (!state) {
        return null;
    }
    switch (action.type) {
        case types.CHANGE_QUERY:
            return {
                ...state,
                query: action.payload.query,
            }
        case types.CHANGE_TYPE:
            return {
                ...state,
                type: action.payload.type,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    todo: todoReducer,
    filter: filterReducer,
});

export default rootReducer;
