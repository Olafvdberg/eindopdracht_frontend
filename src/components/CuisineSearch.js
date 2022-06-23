import React, {useState} from 'react';
import styles from '../styles/CuisineSearch.module.css';

function SearchBar({setCuisineSearchHandler}) {
    const [cuisine, setCuisine] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setCuisineSearchHandler(cuisine);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Your favourite kitchen is..."
            />

            <button
                className={styles["button-design"]}
                type="submit">
                Search
            </button>
        </form>
    );
}

export default SearchBar;