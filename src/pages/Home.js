import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import alle_recepten from "../assets/alle_recepten.jpg"
import cuisine from "../assets/cuisine.jpg"
import fridge from "../assets/fridge.jpg"
import mood_food from "../assets/mood-food.jpg"
import populair from "../assets/populair.jpg"
import styles from "../styles/Home.module.css"
import HomeCard from "../components/HomeCard";

function Home() {
    return (
        <>
            <main className={styles["homepage-container"]}>
                <section>
                    <NavLink to="/AllRecipes">
                        <HomeCard
                            image={alle_recepten}
                            title={"Alle recepten"}
                            />
                    </NavLink>
                </section>
                <section>
                    <NavLink to="/Popular">
                        <HomeCard
                            image={populair}
                            title={"Populair"}
                        />
                    </NavLink>
                </section>
                <section>
                    <NavLink to="/cuisine">
                        <HomeCard
                            image={cuisine}
                            title={"In welke keuken heeft u zin?"}
                        />
                    </NavLink>
                </section>
                <section>
                    <NavLink to="/questionrecipe">
                        <HomeCard
                            image={mood_food}
                            title={"In wat voor een soort recept heeft u zin?"}
                        />
                    </NavLink>
                </section>
                <section>
                    <NavLink to="/fridgerecipe">
                        <HomeCard
                            image={fridge}
                            title={"Recept aan de hand van ingredienten in de koelkast"}
                        />
                    </NavLink>
                </section>
            </main>
        </>
    );
}

export default Home;