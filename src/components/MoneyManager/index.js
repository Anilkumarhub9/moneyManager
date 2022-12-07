import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    input: '',
    amount: '',
    type: '',
    transactionItems: [],
  }

  inputValue = event => {
    this.setState({input: event.target.value})
  }

  amountValue = event => {
    this.setState({amount: event.target.value})
  }

  selectValue = event => {
    this.setState({type: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()
    const {input, amount, type} = this.state
    const newItem = {
      id: uuidv4(),
      input,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionItems: [...prevState.transactionItems, newItem],
    }))

    if (type === 'Income') {
      this.setState(prevState => ({
        salary: prevState.salary + amount,
        income: prevState.income + amount,
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        expenses: prevState.expenses + amount,
        salary: prevState.salary - amount,
      }))
    }
  }

  onDelete = id => {
    const {transactionItems} = this.state
    const filtered = transactionItems.filter(eachItem => eachItem.id !== id)
    this.setState({transactionItems: filtered})
  }

  render() {
    const {transactionItems} = this.state
    let salary = 0
    let income = 0
    let expenses = 0

    const result = transactionItems.map(eachItem => {
      if (eachItem.type === 'Income') {
        salary += eachItem.amount
        income += eachItem.amount
      } else if (eachItem.type === 'Expenses') {
        expenses += eachItem.amount
        salary -= expenses
      }
      return eachItem
    })
    console.log(salary, income, expenses)
    return (
      <div className="container">
        <div className="card1">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your money manager</p>
        </div>
        <ul>
          <MoneyDetails salary={salary} income={income} expenses={expenses} />
        </ul>
        <div className="transaction-details">
          <div className="transaction">
            <h1>Add Transaction</h1>
            <form onSubmit={this.onAddButton}>
              <p className="title-text">TITLE</p>
              <input
                type="text"
                className="title-input"
                onChange={this.inputValue}
              />
              <p className="title-text">AMOUNT</p>
              <input
                type="text"
                className="amount-input"
                onChange={this.amountValue}
              />
              <p className="title-text">TYPE</p>
              <select onChange={this.selectValue}>
                <option>select</option>
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
              </select>
              <br />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="history">
            <h1>history</h1>
            <ul className="transaction-items">
              <li className="list-items">
                <p className="list-namess">Title</p>
                <p className="list-namess">Amount</p>
                <p className="list-namess">Type</p>
              </li>
              <li className="list-itemss">
                {transactionItems.map(eachItem => (
                  <TransactionItem
                    details={eachItem}
                    onDeleteButton={this.onDelete}
                    key={eachItem.id}
                  />
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
