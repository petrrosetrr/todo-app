import React, {useContext, useState} from 'react';
import s from './AddItemPanel.module.css'
import {TodoContext} from "../App/App";

const AddItemPanel = () => {
    const [value, setValue] = useState('');
    const {addItem} = useContext(TodoContext);

    return (
        <form className={s.AddItemPanel}>
            <input
                type='text'
                placeholder='What needs to be done?'
                value={value}
                className='input'
                autoFocus
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                className='button'
                type='submit'
                onClick={(e) => {
                    e.preventDefault()
                    if (value) {
                        addItem(value)
                        setValue('');
                    }
                    else {
                        // TODO: show modal
                    }
                }
                }>
                Add
            </button>
        </form>
    );
};

export default AddItemPanel;
