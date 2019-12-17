import React from 'react'
import './layout.css'

const layout = (props) => {
    return (
    <div className="layout">
        <h1 className="title">BMI Tracker</h1>
        {props.children}
    </div>
    )
}

export default layout