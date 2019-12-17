import React, { Component } from 'react'
import './inputField.css'

const inputField = (props) => {
    const { type } = props
    return (
        <div className="input-field">
            <label className="input-label">{type}</label>
            <input className="input" type="number" name={type} />
        </div>
    )
}

export default inputField