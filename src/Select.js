import React from 'react'

const Select = ({onAgeChange}) => {
    return (
        <select onChange = {onAgeChange}>
            <option value="all">All</option>
            <option value="less18">Less than 18</option>
            <option value="more18">Greater than 18</option>
        </select>
    )
}

export default Select