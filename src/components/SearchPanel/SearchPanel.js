import React from 'react';
import s from './SearchPanel.module.css'

const SearchPanel = () => {
    return (
        <section className={s.SearchPanel}>
            <input type="text" placeholder='Type to search' />
            <ul>
                <li>
                    <button type='button'>All</button>
                </li>
                <li>
                    <button type='button'>Active</button>
                </li>
                <li>
                    <button type='button'>Done</button>
                </li>
            </ul>
        </section>
    );
};

export default SearchPanel;
