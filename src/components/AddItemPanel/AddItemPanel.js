import React from 'react';
import s from './AddItemPanel.module.css'
const AddItemPanel = () => {
    return (
        <section className={s.AddItemPanel}>
            <input
                type='text'
                placeholder='What needs to be done?'
            />
            <button>Add</button>
        </section>
    );
};

export default AddItemPanel;
