import React, { Component } from 'react'
import InputField from './../InputFields/InputField'

import './mainContent.css'

class MainContent extends Component {
    state = {
        weight: null,
        height: null,
        bmi: null,
        previouslyMeasuredBMI: []
    }

    render() {
        return (
            <div className="input-fields">
                    <InputField type="weight"/>
                    <InputField type="height"/>
            </div>
        )
    }


}

export default MainContent