import React, {useContext, useState} from 'react';
import s from './SearchPanel.module.css'
import {TodoContext} from "../App/App";

const SearchPanel = () => {
    const [value, setValue] = useState('');
    const {params: [params, setParams]} = useContext(TodoContext);
    return (
        <section className={s.searchPanel}>
            <input
                type="text"
                placeholder='Type to search'
                className='input'
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setParams({...params, query: e.target.value});
                }}
            />
            <ul>
                <li>
                    <button
                        type='button'
                        className='button'
                        disabled={params.done === null}
                        onClick={() => setParams({...params, done: null})}
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        type='button'
                        className='button'
                        disabled={params.done === false}
                        onClick={() => setParams({...params, done: false})}
                    >
                        Active
                    </button>
                </li>
                <li>
                    <button
                        type='button'
                        className='button'
                        disabled={params.done === true}
                        onClick={() => setParams({...params, done: true})}
                    >
                        Done
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default SearchPanel;
