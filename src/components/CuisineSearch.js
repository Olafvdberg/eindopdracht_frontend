import React, {useState} from 'react';
import styles from '../styles/CuisineSearch.module.css';
import styled from "styled-components";

function SearchBar({setCuisineSearchHandler}) {
    const [cuisine, setCuisine] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');
        setCuisineSearchHandler(cuisine);
    }

    return (
        <FormStyle onSubmit={onFormSubmit}>
            <div className={styles["div-cuisine"]}>
                <input className={styles["input-cuisine"]} onChange={(e) => setCuisine(e.target.value)} type="text" value={cuisine} placeholder="Welke keuken wilt u hebben?" />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  `

export default SearchBar;