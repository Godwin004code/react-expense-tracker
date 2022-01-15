import React from 'react'
import ExpenseForm from './ExpenseForm'

const ExpenseFormContainer = (props) => {

    const addExpense = (expenseItem) => {
        const todoData = {
            ...expenseItem
        }
        props.onAddedExpense(todoData)
    }

    return (
        <div>
            <ExpenseForm onSaveExpense={addExpense} />
            <button type="button" onClick={props.cancel} className="cancel-btn">Cancel</button>
        </div>
    )
}

export default ExpenseFormContainer
