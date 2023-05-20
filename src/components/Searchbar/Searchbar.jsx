import { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ getInputValue, onSearch }) => {
  const [input, setInput] = useState('');
  // state = {
  //   input: '',
  // };

  const search = e => {
    if (input.trim() === '') {
      alert('Please enter something');
      return;
    }
    e.preventDefault();

    getInputValue(input);
     
    setInput('');
      
  };

  const handleChange = e => {
    setInput(`${e.target.value}`);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={search}>
        <button type="submit" className={css.button}>
          <span className={css.label}>Search</span>
        </button>

        <input
          name="input"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          value={input}
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
      </form>
    </header>
  );
};
