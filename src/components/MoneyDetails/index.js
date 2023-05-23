// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {yourBalance, yourIncome, yourExpenses} = props
  return (
    <div className="container">
      <div className="flex-container flex-container-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt=" balance"
          className="image"
        />
        <div>
          <p className="cards-heading">Your Balance</p>
          <p className="count-money" data-testid="balanceAmount">
            Rs {yourBalance}
          </p>
        </div>
      </div>
      <div className="flex-container flex-container-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p className="cards-heading">Your Income</p>
          <p className="count-money" data-testid="incomeAmount">
            Rs {yourIncome}
          </p>
        </div>
      </div>
      <div className="flex-container flex-container-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p className="cards-heading">Your Expenses</p>
          <p className="count-money" data-testid="expensesAmount">
            Rs {yourExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
