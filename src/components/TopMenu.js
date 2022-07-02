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
                        <NavLink to="/AllRecipes" exact activeClassName="active-link">Alle recepten</NavLink>
                    </li>
                    <li className={styles["links"]}>
                        <NavLink to="/Popular" exact activeClassName="active-link">Populair</NavLink>
                    </li>

                    <li className={styles["links"]}>
                        <NavLink to="/cuisine" exact activeClassName="active-link">Verschillende keukens</NavLink>
                    </li>
                    <li className={styles["links"]}>
                        <NavLink to="/questionrecipe" exact activeClassName="active-link">Recept mood</NavLink>
                    </li>
                    <li className={styles["links"]}>
                        <NavLink to="/fridgerecipe" exact activeClassName="active-link">In de koelkast</NavLink>
                    </li>
                    <li className={styles["links"]}>
                        <NavLink to="/signup" exact activeClassName="active-link">Signup</NavLink>
                    </li>
                    <li className={styles["links"]}>
                        <NavLink to="/login" exact activeClassName="active-link">Login</NavLink>
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