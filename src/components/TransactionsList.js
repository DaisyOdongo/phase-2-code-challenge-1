import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transcations, handleDeletions}) {
      const handleDeletion = async (transactionId) =>{
        console.log(transactionId);
        try{
          const res = await fetch("http://localhost:8001/transactions/" + transactionId, {
            method: "DELETE",
          });
          handleDeletions(transactionId);
        }catch (error){
          console.log(error);
        }
      };
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map((transaction) =>
          <Transaction
            key={transaction.id}
            handleDeletion={handleDeletion}
            transaction={transaction} />)}
      </tbody>
    </table>
  );
}

export default TransactionsList;
