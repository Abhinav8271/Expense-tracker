

const ExpenseSummary = ({expenses}) => {
  let s = 0;
  expenses.forEach((expense) => {
    s = s+ expense.amount;
  }
  )
  return (
    <div>
      <p>Total Amount = {s}</p>
    </div>
  )
}

export default ExpenseSummary