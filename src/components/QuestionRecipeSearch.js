import React, {useState} from "react";
import styles from '../styles/QuestionRecipeSearch.module.css'

function QuestionRecipeSearch({setQuestionHandler}) {

    const [question, setQuestion] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setQuestionHandler(question);
    };

    return (
        <form onSubmit={submitHandler}>
            <input

                type="text"
                name="search"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ik heb zin in..."
            />

            <button
                className={styles["button-design"]}
                type="submit">
                Search
            </button>
        </form>
    )
}

export default QuestionRecipeSearch