import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PartForm from './components/PartForm';
import PartsTable from './components/PartsTable';
import FilterInput from './components/FilterInput';

function App() {
  const [parts, setParts] = useState([]);
  const [form, setForm] = useState({ name: '', category: '', supplier: '', quantity: 0, price: 0 });
  const [filter, setFilter] = useState('');

  const fetchParts = async (searchTerm = '') => {
  try {
    const res = await axios.get(`/api/parts${searchTerm ? `?name=${searchTerm}` : ''}`);
    setParts(res.data);
  } catch (err) {
    console.error('Error fetching parts:', err);
  }
};


  useEffect(() => { fetchParts(); }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/parts', form);
      setForm({ name: '', category: '', supplier: '', quantity: 0, price: 0 });
      fetchParts();
    } catch (err) {
      console.error('Error adding part:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/parts/${id}`);
      fetchParts();
    } catch (err) {
      console.error('Error deleting part:', err);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="ttext-4xl font-extrabold text-gray-900 dark:text-white mb-8 border-b-8 border-blue-600 inline-block pb-2 drop-shadow-md">Parts Inventory Manager</h1>

	<FilterInput filter={filter} onFilterChange={(val) => {
  	setFilter(val);
  	// Fetch parts as user types with debounce
  	fetchParts(val);
	}} />

      <PartForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
      <PartsTable parts={parts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
