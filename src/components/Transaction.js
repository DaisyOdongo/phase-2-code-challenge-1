import React from "react";

function Transaction({transaction, handleDeletions}){
  const {id,date,description, category, amount,}=transaction;
  return (
    <tr onClick={() => handleDeletions(id)}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
