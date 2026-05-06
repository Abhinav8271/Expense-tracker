


const ExpenseList = ({expenses, getValue}) => {
 
  async function deleteExpense(id) {
    await fetch(`http://localhost:3000/api/expenses/${id}`,
      {
        method: "DELETE"
      }
    );
    console.log(id);
    getValue();
  }









  return (
    <div>
      {
        expenses.map((expense) => {
          return (
            <div key={expense._id}>
              <p>{expense.title} {expense.amount} {expense.category}</p>
              <button onClick={() => deleteExpense(expense._id)}>Delete</button>
            </div>
          )
        }
        )
      }
    </div>

  )

}


export default ExpenseList