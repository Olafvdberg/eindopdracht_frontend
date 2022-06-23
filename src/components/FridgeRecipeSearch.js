import React, {useState} from 'react';
import styles from '../styles/FridgeRecipeSearch.module.css';

function SearchBarFridge({setFrigdeHandler}) {
    const [fridge, setFridge] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        setFrigdeHandler(fridge);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={fridge}
                onChange={(e) => setFridge(e.target.value)}
                placeholder="Wat is in je koelkast?"
            />

            <button
                className={styles["button-design"]}
                type="submit"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBarFridge;