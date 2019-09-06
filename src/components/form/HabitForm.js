import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HabitForm = ({ handleSubmit }) => {
  const [habitInput, updateHabitInput] = useState('');
  const [descInput, updateDescInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(habitInput, descInput);
  };

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        value={habitInput} 
        onChange={({ target }) => updateHabitInput(target.value)} 
      />
      <input 
        type="text" 
        value={descInput} 
        onChange={({ target }) => updateDescInput(target.value)} 
      />
      <button>Submit</button>
    </form>
  );

};

HabitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default HabitForm;
