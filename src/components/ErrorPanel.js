import React from 'react'

import '../styles/ErrorPanel.css'

const ErrorPanel = props => {
    return (
        <span>{ props.errorMsg } </span>
    )
}

export default ErrorPanel