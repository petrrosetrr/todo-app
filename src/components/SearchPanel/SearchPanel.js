import React from 'react';
import s from './SearchPanel.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeQuery, changeStatusFilter} from "../../redux/actions";
import {typeFilters} from "../../redux/reducer";

const SearchPanel = () => {
    const {query, type} = useSelector((state)=> state.filter);
    const dispatch = useDispatch();

    return (
        <section className={s.searchPanel}>
            <input
                type="text"
                placeholder='Type to search'
                className='input'
                value={query}
                onChange={(e) => dispatch(changeQuery(e.target.value))}
            />
            <ul>
                <li>
                    <button
                        type='button'
                        className='button'
                        disabled={type === typeFilters.ALL}
                        onClick={() => dispatch(changeStatusFilter(typeFilters.ALL))}
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        type='button'
                        className='button'
                        disabled={type === typeFilters.ACTIVE}
                        onClick={() => dispatch(changeStatusFilter(typeFilters.ACTIVE))}
                    >
                        Active
                    </button>
                </li>
                <li>
                    <button
                        type='button'
                        className='button'
                        disabled={type === typeFilters.COMPLETED}
                        onClick={() => dispatch(changeStatusFilter(typeFilters.COMPLETED))}
                    >
                        Done
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default SearchPanel;
