import React, {useState, useEffect} from 'react';
import axios from "axios";
import styles from '../styles/FridgeRecipe.module.css';
import FridgeRecipeSearch from "../components/FridgeRecipeSearch.js";
import TopMenu from "../components/TopMenu";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Link} from "react-router-dom";
import styled from "styled-components";

function FridgePage() {
    const [frigdeData, setFridgeData] = useState(null);
    const [fridge, setFridge] = useState('');
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function getFridgeData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${fridge}&number=9&apiKey=58d9ee76861142d19ae15d8da98f6abf`);
                console.log(result.data);
                setFridgeData(result.data);

                if (result.data.length === 0) {
                    throw new SyntaxError(error);
                }

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        if (fridge)
            getFridgeData();
    }, [fridge]);


    return (
        <>

            <main>
                <section>
                    <p>Wat heeft u nog over in de koelkast?</p>
                </section>
                <section>
                    <FridgeRecipeSearch setFrigdeHandler={setFridge}/>
                </section>

                {error && <><div><p>Geen recepten gevonden. Probeer het opnieuw.</p></div></> }




                {frigdeData && <>
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
                                {frigdeData.map((fridgelist) => {
                                    return(
                                        <SplideSlide key={fridgelist.id}>
                                            <Card key={fridgelist.id}>
                                                <Link to={'/recipe/' + fridgelist.id}>
                                                    <p className={styles["p-fridge"]}>{fridgelist.title}</p>
                                                    <img className={styles["img-fridge"]} src={fridgelist.image} alt="" />

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

export default FridgePage;