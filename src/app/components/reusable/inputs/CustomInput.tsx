import React from 'react'
import { InputProps } from "../../../types";

const Input = ({
    type,
    label,
    value,
    name,
    placeholder,
    disabled,
    onChange,
}: InputProps) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />

        </div>
    )
}

export default Input