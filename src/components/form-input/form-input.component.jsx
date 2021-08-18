import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
    <input className='form-input' onchange={handleChange}{...otherProps}/>
    {
        label ? 
        // This means that it always has the class, but if user types, we add the shrink property
        (<label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>
        {label}
        </label>)
        : null
    }
    </div>
)

export default FormInput;