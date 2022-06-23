import React, {useState, useEffect} from 'react';
import axios from "axios";
import styles from '../styles/FridgeRecipe.module.css';
import FridgeRecipeSearch from "../components/FridgeRecipeSearch.js";
import TopMenu from "../components/TopMenu";

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
            <header>
                <TopMenu/>
            </header>

            <main>
                <section className={styles["kitchen-names"]}>
                    <p className={styles.region}>No clue what to make with the ingredients that are left in your fridge?
                        Fill them in and find out what delicious recipes you still can make, or have to buy in order to make that tasty meal.</p>
                </section>
                <section className={styles["kitchen-names"]}>
                    <FridgeRecipeSearch setFrigdeHandler={setFridge}/>
                </section>

                {error && <><div className={styles["kitchen-names"]}><p className="error">No recipes found, please try again</p></div></> }




                {frigdeData && <>
                    <section className={styles.fridge}>{frigdeData.map((fridgeList) => {
                        return (<article key={fridgeList.id}>
                                <p>{fridgeList.title}</p>
                                <img src={fridgeList.image}/>
                                <section className={styles["ingredients-titel"]}><strong>Ingredients in your fridge:</strong></section>
                                <section className={styles["ingredients"]}>{fridgeList.usedIngredients.map((ingredients) => {
                                    return (
                                        <article key={fridge.name}>
                                            <div>{fridge.name}</div>
                                        </article>
                                    );
                                })}
                                </section>
                                <section className={styles["ingredients-titel"]}><strong>Ingredients you need to buy:</strong></section>
                                <section className={styles["ingredients"]}>{fridgeList.missedIngredients.map((ingredients) => {
                                    return (
                                        <article key={fridge.name}>
                                            <div>{fridge.name}</div>
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

export default FridgePage;