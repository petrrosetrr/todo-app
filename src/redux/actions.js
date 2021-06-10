import * as types from './types'
import {typeFilters} from "./reducer";

export const addItem = (value) => {
    return {
        type: types.ADD_ITEM,
        payload: {
                type: typeFilters.ACTIVE,
                important: false,
                id: new Date().getTime().toString(),
                value,
        }
    }
};

export const removeItem = (id) => {
    return {
        type: types.REMOVE_ITEM,
        payload: {
            id,
        }
    }
};

export const highlightItem = (id) => {
    return {
        type: types.HIGHLIGHT_ITEM,
        payload: {
            id,
        }
    }
};

export const finishItem = (id) => {
    return {
        type: types.FINISH_ITEM,
        payload: {
            id,
        }
    }
};

export const changeStatusFilter = (type) => {
    return {
        type: types.CHANGE_TYPE,
        payload: {
            type,
        }
    }
};

export const changeQuery = (query) => {
    return {
        type: types.CHANGE_QUERY,
        payload: {
            query,
        }
    }
};
