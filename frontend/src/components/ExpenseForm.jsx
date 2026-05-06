import { useState } from "react";

const ExpenseForm = ({getValue}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  async function sendValue() {
    try {
      const response = await fetch("http://localhost:3000/api/expenses", {
        method: "POST",
        body: JSON.stringify({ title, amount, category }),
        headers: { "Content-Type": "application/json" }
      });
      const data = await response.json();
      console.log(data);
      setTitle("");
      setAmount("");
      setCategory("");
      getValue();
    } catch (error) {
      console.log("Error", error);
    }

  }

  return (
    <div>
      <p>Enter title:</p>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <p>Enter amount:</p>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <p>Enter category:</p>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      <button onClick={sendValue}>Submit</button>
    </div>
  )
}

export default ExpenseForm