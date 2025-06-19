import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

export default function FilterInput({ filter, onFilterChange }) {
  const [value, setValue] = useState(filter);

  // Debounce filter updates by 300ms
  const debouncedChange = React.useMemo(() =>
    debounce(onFilterChange, 300)
  , [onFilterChange]);

  const handleChange = (e) => {
    setValue(e.target.value);
    debouncedChange(e.target.value);
  };

  useEffect(() => {
    setValue(filter); // keep local state in sync if filter changes externally
  }, [filter]);

  return (
    <input
      type="text"
      placeholder="Filter by name..."
      value={value}
      onChange={handleChange}
      className="border p-2 mb-4 w-full"
    />
  );
}
