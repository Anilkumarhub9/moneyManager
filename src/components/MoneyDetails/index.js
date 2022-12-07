import './index.css'

const MoneyDetails = props => {
  const {salary, income, expenses} = props
  const salar = parseInt(salary)
  const incom = parseInt(income)
  const expense = parseInt(expenses)

  return (
    <div className="cards-3">
      <li className="list">
        <div className="money-card">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <div className="name-balance">
            <p className="balance">Your Balance</p>
            <p className="number">Rs {salar}</p>
          </div>
        </div>
      </li>
      <li className="list">
        <div className="money-card">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="balance"
          />
          <div className="name-balance">
            <p className="balance">Your Income</p>
            <p className="number">Rs {incom}</p>
          </div>
        </div>
      </li>
      <li className="list">
        <div className="money-card">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="balance"
          />
          <div className="name-balance">
            <p className="balance">Your Expenses</p>
            <p className="number">Rs {expense}</p>
          </div>
        </div>
      </li>
    </div>
  )
}
export default MoneyDetails
