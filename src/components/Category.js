import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


function Category() {
    return(
        <List>
            <NavLink to={'/Page1'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/Page2'}>
                <FaHamburger/>
                <h4>American</h4>
            </NavLink>
            <NavLink to={'/Searched'}>
                <GiNoodles/>
                <h4>Thai</h4>
            </NavLink>
        </List>
    )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`

export default Category
