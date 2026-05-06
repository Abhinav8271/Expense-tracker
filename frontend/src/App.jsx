import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseSummary from './components/ExpenseSummary'
import {useState, useEffect} from 'react'

function App() {
   const [expenses, setExpenses] = useState([]);


  async function getValue() {
    const response = await fetch('http://localhost:3000/api/expenses', {
      method: "GET",
    })
    const data = await response.json();
    setExpenses(data.lists);
  }

    useEffect(() => {
    getValue()
  }, [])
  
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm getValue={getValue} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} getValue={getValue}/>
    </div>
  )
}

export default App