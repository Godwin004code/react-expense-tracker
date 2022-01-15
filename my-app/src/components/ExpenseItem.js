import React from 'react'

import ExpenseMono from './ExpenseMono';

const ExpenseItem = (props) => {
    
    return (
        <div>
            <ExpenseMono item={props.item} />
            
        </div>
    )
}

export default ExpenseItem
