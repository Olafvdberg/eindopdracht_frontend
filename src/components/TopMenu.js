import React from 'react';
import { NavLink } from "react-router-dom";

function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
                <h4>De Foodapp</h4>

                <ul>
                    <li>
                        <NavLink to="/Home" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/Popular" exact activeClassName="active-link">Popular</NavLink>
                    </li>

                    <li>
                        <NavLink to="/Veggie" exact activeClassName="active-link">Veggie</NavLink>
                    </li>

                    <li>
                        <NavLink to="/AllRecipes" exact activeClassName="active-link">AllRecipes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Profile" exact activeClassName="active-link">Profiel</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;