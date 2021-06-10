import React, {useState} from 'react';
import s from './AddItemPanel.module.css'
import {useDispatch} from "react-redux";
import {addItem} from "../../redux/actions";

const AddItemPanel = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

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
                        dispatch(addItem(value));
                        setValue('');
                    }
                }}>
                Add
            </button>
        </form>
    );
};

export default AddItemPanel;
