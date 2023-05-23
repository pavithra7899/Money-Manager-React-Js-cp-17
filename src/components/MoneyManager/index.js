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

const List = []
// Write your code here
class MoneyManager extends Component {
  state = {
    moneyList: List,
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onDeleteItem = id => {
    const {moneyList} = this.state
    const result = moneyList.filter(eachList => eachList.id !== id)
    this.setState({moneyList: result})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  onAddMoney = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state
    const optionType = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )
    const {displayText} = optionType
    const newList = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevState => ({
      moneyList: [...prevState.moneyList, newList],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpensesAmount = () => {
    const {moneyList} = this.state
    let expensesAmount = 0
    moneyList.forEach(eachList => {
      if (eachList.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachList.amount
      }
    })
    return expensesAmount
  }

  getIncomeAmount = () => {
    const {moneyList} = this.state
    let incomeAmount = 0
    moneyList.forEach(eachList => {
      if (eachList.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachList.amount
      }
    })
    return incomeAmount
  }

  getBalanceAmount = () => {
    const {moneyList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    moneyList.forEach(eachList => {
      if (eachList.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachList.amount
      } else {
        expensesAmount += eachList.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    if (balanceAmount > 0) {
      return balanceAmount
    }
    return balanceAmount
  }

  render() {
    const {moneyList, title, amount, optionId} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()

    return (
      <div className="bg-container">
        <div className="header-card">
          <h1 className="heading">Hi,Richard</h1>
          <p className="text-line">
            Welcome back to your
            <span className="span-element"> Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails
            yourBalance={balanceAmount}
            yourIncome={incomeAmount}
            yourExpenses={expensesAmount}
          />
        </div>
        <div className="flex-two-boxes">
          <form onSubmit={this.onAddMoney}>
            <div className="transaction-card">
              <h1 className="card-heading">Add Transaction</h1>
              <label htmlFor="title" className="label-heading">
                TITLE
              </label>
              <br />
              <input
                placeholder="TITLE"
                id="title"
                className="input-box"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount" className="label-heading">
                AMOUNT
              </label>
              <br />
              <input
                placeholder="AMOUNT"
                id="amount"
                className="input-box"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <label htmlFor="select" className="label-heading">
                TYPE
              </label>
              <br />
              <select
                className="input-box"
                id="select"
                value={optionId}
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(eachType => (
                  <option key={eachType.optionId} value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit">Add</button>
            </div>
          </form>
          <div className="sub-transaction-card">
            <h1 className="card-heading">History</h1>
            <ul>
              <li className="list">
                <p>Title</p>
                <p className="amount-header">Amount</p>
                <p>Type</p>
              </li>
              {moneyList.map(eachList => (
                <TransactionItem
                  moneyDetails={eachList}
                  key={eachList.id}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
