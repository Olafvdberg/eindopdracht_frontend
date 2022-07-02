import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from '../styles/Cuisine.module.css';
import CousineSearch from "../components/CuisineSearch";
import Search from "../components/Search";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Link, useParams} from "react-router-dom";
import CuisineSearch from "../components/CuisineSearch";
import styled from "styled-components";

function ChooseCuisine() {
    const [cuisineData, setCuisineData] = useState(null);
    const [cuisine, setCuisine] = useState('');
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function getCuisineData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&addRecipeInformation=true&apiKey=58d9ee76861142d19ae15d8da98f6abf`);
                console.log(result.data);
                setCuisineData(result.data);

                if (result.data.results.length === 0) {
                    throw new SyntaxError(error);
                }

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        if (cuisine)
            getCuisineData();
    }, [cuisine]);


    return (
        <>

            <main>
                <section>
                    <p>Je kunt uit de volgende keukens kiezen: </p>
                    <p>African, Caribbean, Chinese, Eastern European, European, French,
                        German,
                        Greek, Indian, Irish, Italian, Japanese, Jewish, Korean, Latin American, Mediterranean, Middle
                        Eastern, Nordic, Spanish, Thai, Vietnamese
                    </p>
                </section>
                <section>
                    <CousineSearch setCuisineSearchHandler={setCuisine}/>
                </section>
                {error && <>
                    <div><p>No recipes found, try again</p></div>
                </>}

                {cuisineData && <>

                            <div>
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
                                        {cuisineData.results.map((kitchenList) => {
                                            return(
                                                <SplideSlide key={kitchenList.id}>
                                                    <Card key={kitchenList.id}>
                                                        <Link to={'/recipe/' + kitchenList.id}>
                                                            <p className={styles["p-cuisine"]}>{kitchenList.title}</p>
                                                            <img className={styles["img-cuisine"]} src={kitchenList.image} alt="" />

                                                        </Link>
                                                    </Card>
                                                </SplideSlide>
                                            )
                                        })}
                                    </Splide>
                                </Wrapper>
                            </div>
                </>
                }

            </main>


        </>
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
`;

export default ChooseCuisine;