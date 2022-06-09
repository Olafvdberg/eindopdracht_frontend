import React from "react";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components"
import Search from "../components/Search";

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=58d9ee76861142d19ae15d8da98f6abf&query=${name}`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

    return <Grid>
        <Search />
        {searchedRecipes.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>;
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1rf));
grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;