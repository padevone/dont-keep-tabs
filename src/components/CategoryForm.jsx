import React, { useState } from 'react';

const CategoryForm = ({ onCreate }) => {
  const [name, setName] = useState('');

  const handleInput = ({ target }) => {
    setName(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} value={name} />
      <button type="submit">Create</button>
    </form>
  );
};

export default CategoryForm;
