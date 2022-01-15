import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredDate, setEnteredDate] = useState('')
    const [enteredText, setEnteredText] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);

        
    }

    const textHandler = (event) => {
        setEnteredText(event.target.value);

    }

    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
        
    }

    const submitHandler = (event) => {
        event.preventDefault()
        

        const todoData = {
            date: enteredDate,
            todo: enteredText,
            amount: enteredAmount,
            id: Math.floor(Math.random() * 100).toString()
        }
        props.onSaveExpense(todoData);

        setEnteredText("")
        setEnteredAmount("")
        setEnteredDate("")
    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date"  value={enteredDate}  onChange={dateHandler} />
                </p>
                <p>
                    <label htmlFor="todo">Expense</label>
                    <input type="text" placeholder="Enter any item.." value={enteredText} onChange={textHandler} />
                </p>
                <p>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" placeholder="Enter any amount.." value={enteredAmount}  onChange={amountHandler} />
                </p>
                <button type="submit" className="add-btn-o">Add</button>
            </form>
        </div>
    )
}

export default ExpenseForm
