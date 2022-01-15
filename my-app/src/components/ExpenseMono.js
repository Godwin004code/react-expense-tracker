import React from 'react'
import  { FaTimes, FaTrash } from 'react-icons/fa'
import './ExpenseMono.css'
import './ExpenseMono.css'

const ExpenseMono = ({item}) => {

   
    
    
    return (
        <div>
            {
                item.map((temp) => {
                    const { id, todo, amount, date } = temp
                    const deleteItem = (e) => {
                        return e.target.parentElement.parentElement.remove()
                    }
                    return (
                        <div className="parent" key={id}>
                           
                            <div className="items">
                            <h3 className="date">{date}</h3>
                            <h2>{todo}</h2>
                            <h3>#{amount}</h3>
                            </div>
                            {<FaTrash className="trash" onClick={deleteItem} />}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExpenseMono
