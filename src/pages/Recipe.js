import {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import styles from "../styles/Recipe.module.css";

import React from "react";

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=58d9ee76861142d19ae15d8da98f6abf`);
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return <DetailWrapper>
        <div>
            <h2 className={styles["h2-recipe"]}>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>
                Instructions
            </Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>
                Ingredients
            </Button>

            {activeTab === 'instructions' && (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                </div>
            )}

            {activeTab === 'ingredients' && (
                <ul className={styles["ul-recipe"]}>
                    {details.extendedIngredients.map((ingredient) => (
                        <li className={styles["li-recipe"]} key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
            )
            }
        </Info>
    </DetailWrapper>
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`

const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe;