import React from 'react';

export default function PartForm({ form, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="mb-4 grid gap-2 grid-cols-2 sm:grid-cols-3">
      <input name="name" value={form.name} onChange={onChange} placeholder="Name" required className="border p-2" />
      <select name="category" value={form.category} onChange={onChange} required className="border p-2">
        <option value="">Select Category</option>
        <option value="Engine">Engine</option>
        <option value="Transmission">Transmission</option>
        <option value="Brake">Brake</option>
      </select>
      <input name="supplier" value={form.supplier} onChange={onChange} placeholder="Supplier" required className="border p-2" />
      <input type="number" name="quantity" value={form.quantity} onChange={onChange} placeholder="Quantity" required className="border p-2" />
      <input type="number" step="0.01" name="price" value={form.price} onChange={onChange} placeholder="Price" required className="border p-2" />
      <button type="submit" className="bg-blue-600 text-white p-2 col-span-full sm:col-span-1">Add Part</button>
    </form>
  );
}
