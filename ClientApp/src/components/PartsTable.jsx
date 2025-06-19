import React from 'react';

export default function PartsTable({ parts, onDelete }) {
  return (
    <table className="table-auto w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th>Name</th>
          <th>Category</th>
          <th>Supplier</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {parts.map(part => (
          <tr key={part.id}>
            <td>{part.name}</td>
            <td>{part.category}</td>
            <td>{part.supplier}</td>
            <td>{part.quantity}</td>
            <td>${part.price}</td>
            <td><button onClick={() => onDelete(part.id)} className="text-red-600">Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
