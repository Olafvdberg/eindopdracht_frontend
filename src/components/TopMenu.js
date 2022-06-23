import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "../styles/TopMenu.module.css"

function TopMenu() {
    return (
        <nav>
            <div className="nav-container">

                <ul className={styles["topmenu"]}>
                    <li className={styles["links"]}>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li className={styles["links"]}>
                        <NavLink to="/Popular" exact activeClassName="active-link">Popular</NavLink>
                    </li>

                    <li className={styles["links"]}>
                        <NavLink to="/cuisine" exact activeClassName="active-link">Cuisine</NavLink>
                    </li>

                    <li className={styles["links"]}>
                        <NavLink to="/AllRecipes" exact activeClassName="active-link">AllRecipes</NavLink>
                    </li>
                    <li className={styles["links"]}>
                        <NavLink to="/Profile" exact activeClassName="active-link">Profiel</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;