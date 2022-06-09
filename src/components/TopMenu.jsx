import React from 'react';
import { NavLink } from "react-router-dom";

function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
                <h4>De Foodapp</h4>

                <ul>
                    <li>
                        <NavLink to="/HomePage" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/Page1" exact activeClassName="active-link">Page1</NavLink>
                    </li>

                    <li>
                        <NavLink to="/Page2" exact activeClassName="active-link">Page2</NavLink>
                    </li>

                    <li>
                        <NavLink to="/Page3" exact activeClassName="active-link">Page3</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Page4" exact activeClassName="active-link">Page4</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;