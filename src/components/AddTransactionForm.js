import React, {useState} from "react";

function AddTransactionForm(handleAddTransaction) {
  const [formData, setFormData] = useState({
    date:"",
    description:"",
    category:"",
    amount:"null",
  });
  const handlePostTransaction = async (event) => {
		event.preventDefault();
		console.log(formData);
		try {
			const response = await fetch("http://localhost:8001/transactions", {
				method: "POST",
				headers: {
					      "Content-Type": "application/json",
				},
				body: JSON.stringify({
					date: formData.date,
					description: formData.description,
					category: formData.category,
					amount: formData.amount,
				}),
  });
			const jsonResponse = await response.json();
			handleAddTransaction(jsonResponse);
			setFormData({
				date: "",
				description: "",
				category: "",
				amount: null,
			});
		} catch (err) {
			console.log(err);
		}
	};
  const handleDataChange =(event) =>{
    setFormData({...formData, [event.target.name]:event.tartget.value})
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handlePostTransaction}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleDataChange} />
          <input type="text" name="description" placeholder="Description" onChange={handleDataChange} />
          <input type="text" name="category" placeholder="Category" onChange={handleDataChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleDataChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
