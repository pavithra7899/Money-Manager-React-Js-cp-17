// Write your code here
import './index.css'

const TransactionItem = props => {
  const {moneyDetails, onDeleteItem} = props
  const {id, title, amount, type} = moneyDetails
  const onDelete = () => onDeleteItem(id)
  return (
    <li className="li-sub">
      <p>{title}</p>
      <p className="amount-style">{amount}</p>
      <p>{type}</p>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
