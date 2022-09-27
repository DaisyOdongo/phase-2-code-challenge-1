import React from "react";

function Transaction({transaction, handleDeletions}){
  const {id,date,description, category, amount,}=transaction;
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
          <button onClick={() => handleDeletions(id)}></button>
    </tr>
  );
}

export default Transaction;
