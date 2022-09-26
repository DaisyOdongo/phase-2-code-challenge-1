import React from "react";

function Transaction({transaction, handleDeletion}){
  const {id,date,description, category, amount,}=transaction;
  return (
    <tr onClick={() => handleDeletion(id)}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
