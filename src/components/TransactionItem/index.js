import './index.css'

const TransactionItem = props => {
  const {details, onDeleteButton} = props
  const {id, input, amount, type} = details

  const onClicked = () => {
    onDeleteButton(id)
  }

  return (
    <div className="list-row">
      <p className="list-names">{input}</p>
      <p className="list-names">Rs {amount}</p>
      <p className="list-names">{type}</p>
      <button type="button" className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
          onClick={onClicked}
        />
      </button>
    </div>
  )
}

TransactionItem.defaultProps = {
  type: 'Income',
}

export default TransactionItem
