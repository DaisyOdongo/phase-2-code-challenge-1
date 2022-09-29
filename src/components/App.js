import React, {useState, useEffect} from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		fetchTransactions();
	}, []);

	const fetchTransactions = async () => {
		try {
			const response = await fetch("http://localhost:8001/transactions");
			const jsonResponse = await response.json();
			setTransactions(jsonResponse);
		} catch (error) {
			console.log(error);
		}
	};
	const handleAddTransaction = (transactions) => {
		setTransactions([...transactions, transactions]);
	};
	const handleDeletions = (transId) => {
		const filterTransactions = transactions.filter(
			(trans) => transactions.id !== transId
		);

		setTransactions(filterTransactions);
	};
	const handleSearch = (searchTerm) => {
		if (searchTerm) {
			const filteredTransactions = transactions.filter((trans) => {
				if (trans.description.toLowerCase().match(searchTerm.toLowerCase())) {
					return true;
				} else {
					return false;
				}
			});
			setTransactions(filteredTransactions);
		} else {
			fetchTransactions();
		}
	};
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer 
	  handleAddTransaction={handleAddTransaction}
	  transactions={transactions}
	  handleSearch={handleSearch}
	  handleDeletions={handleDeletions}
	  />
    </div>
  );
}

export default App;
