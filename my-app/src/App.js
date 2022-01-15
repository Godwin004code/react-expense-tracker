import React, { useState } from 'react'
import ExpenseItem from './components/ExpenseItem';
import ExpenseFormContainer from './components/ExpenseFormContainer'
import './App.css'

const App = () => {

  const [clicked, setClicked] = useState(<div className="add-btn-container"><button className="add-btn" onClick={showForm}>Add Expense</button></div>)

  const Data = [
    {
      id: 1,
      todo: "Example",
      amount: 2000,
      date: "2022-10-01"
    }
  ]


  

  const [expenses, setExpense] = useState(Data)

  const saveEachExpense = (expense) => {
    setExpense((prev) => {
      return [expense, ...prev]
    })
  }
  function showForm() {
    setClicked(<div className="form-container"><ExpenseFormContainer onAddedExpense={saveEachExpense} cancel={cancelExpense} /> </div>)
  }

  function cancelExpense() {
    setClicked(clicked)
  }

  

  return (
    <div>
      <div className="button-container">
      {
        clicked
      }
      </div>
      <ExpenseItem item={expenses} />
      
    </div>
  )
}

export default App
