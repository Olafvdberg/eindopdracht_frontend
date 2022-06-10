import React from "react";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components"
import Search from "../components/Search";
import {Splide, SplideSlide} from "@splidejs/react-splide";

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

    return (
        <div>
        <Search />
            <Wrapper>
                <h3>Hier zijn de gevonden resultaten.</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: "5rem"
                }}
                        >
        {searchedRecipes.map((item) => {
            return(
                <SplideSlide key={item.id}>
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
                </SplideSlide>
            )
        })}
                </Splide>
            </Wrapper>
        </div>
   );
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1rf));
grid-gap: 3rem;
`;

const Wrapper = styled.div`
  margin: 4rem 0rem;
`

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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