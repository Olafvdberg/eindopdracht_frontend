import React, {useState, useEffect} from 'react';
import axios from "axios";
import styles from '../styles/QuestionRecipe.module.css';
import TopMenu from "../components/TopMenu";
import QuestionRecipeSearch from "../components/QuestionRecipeSearch";

function QuestionRecipe() {
    const [questionData, setQuestionData] = useState(null);
    const [question, setQuestion] = useState('');

    useEffect(() => {
        async function getQuestionData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&type=${question}&addRecipeInformation=true&apiKey=58d9ee76861142d19ae15d8da98f6abf`);
                console.log(result.data);
                setQuestionData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        if (question)
            getQuestionData();
    }, [question]);


    return (
        <>
            <header>
                <TopMenu/>
            </header>

            <main>
                <section className={styles["mood-names"]}>
                    <p className={styles.region}>What are you in the mood for?
                        Choose from: dessert, bread, breakfast, soup beverage, sauce, marinade, fingerfood snack, drink.
                        And get a recipe according to your mood for food</p>
                </section>
                <section className={styles["mood-names"]}>
                    <QuestionRecipeSearch setQuestionHandler={setQuestion}/>
                </section>
                {questionData && <>
                    <section className={styles["choose-mood"]}>{questionData.results.map((questionList) => {
                        return (<article key={questionList.id}>
                                <p>{questionList.title}</p>
                                <img src={questionList.image}/>
                                <section>Ready in: {questionList.readyInMinutes} minutes</section>
                                <section
                                    className={styles["ingredients"]}>{questionList.analyzedInstructions[0].steps[0].ingredients.map((ingredients) => {
                                    return (
                                        <article key={ingredients.name}>
                                            <div>{ingredients.name}</div>
                                        </article>
                                    );
                                })}
                                </section>
                                <section className={styles["instructions"]}>{questionList.analyzedInstructions[0].steps.map((instructions) => {

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

export default QuestionRecipe;