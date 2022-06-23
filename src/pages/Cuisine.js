import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from '../styles/Cuisine.module.css';
import CousineSearch from "../components/CuisineSearch";

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
                <section className={styles["kitchen-names"]}>
                    <p className={styles.region}>Do you want a recipe from your favourite kitchen? Or rather try
                        something completey new?
                        You can choose from the following kitchens: </p>
                    <p className={styles.region}>African, Caribbean, Chinese, Eastern European, European, French,
                        German,
                        Greek, Indian, Irish, Italian, Japanese, Jewish, Korean, Latin American, Mediterranean, Middle
                        Eastern, Nordic, Spanish, Thai, Vietnamese
                    </p>
                </section>
                <section className={styles["kitchen-names"]}>
                    <CousineSearch setCuisineSearchHandler={setCuisine}/>
                </section>
                {error && <>
                    <div className={styles["kitchen-names"]}><p className="error">No recipes found, try again</p></div>
                </>}


                {cuisineData && <>
                    <section className={styles["kitchen-names"]}><p className="region">We
                        found {cuisineData.results.length} recipes</p></section>
                    <section className={styles["choose-kitchen"]}>{cuisineData.results.map((cuisineList) => {
                        return (<article key={cuisineList.id}>
                                <p>{cuisineList.title}</p>
                                <img src={cuisineList.image}/>
                                <section>Ready in: {cuisineList.readyInMinutes} minutes</section>
                                <section
                                    className={styles["ingredients"]}>{cuisineList.analyzedInstructions[0].steps[0].ingredients.map((ingredients) => {
                                    return (
                                        <article key={ingredients.name}>
                                            <div>{ingredients.name}</div>
                                        </article>
                                    );
                                })}
                                </section>
                                <section
                                    className={styles["instructions"]}>{cuisineList.analyzedInstructions[0].steps.map((instructions) => {

                                    return (
                                        <article key={instructions.step}>
                                            <div>{instructions.step}</div>
                                        </article>
                                    );
                                })}
                                </section>
                            </article>
                        );
                    })}
                    </section>
                </>
                }

            </main>


        </>
    );
}

export default ChooseCuisine;