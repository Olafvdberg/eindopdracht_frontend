import './App.css';
import './App.css';
import React, {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import AllRecipes from "./pages/AllRecipes";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import TopMenu from "./components/TopMenu";
import QuestionRecipe from "./pages/QuestionRecipe";
import FridgeRecipe from "./pages/FridgeRecipe";
import Cuisine from "./pages/Cuisine";

function App() {

    const { isAuth } = useContext(AuthContext);

  return (
      <BrowserRouter>
          <TopMenu/>
          <Switch>
              <Route exact path="/"> <Home /></Route>
              <Route path="/Popular"> <Popular/></Route>
              <Route path="/AllRecipes"> <AllRecipes/></Route>
              <Route path="/searched/:search"> <Searched/></Route>
              <Route path="/recipe/:name"><Recipe/></Route>
              <Route path="/login"> <Login/></Route>
              <Route path="/cuisine"> <Cuisine/></Route>
              <Route path="/signup" ><Signup/> </Route>
              <Route path="/questionrecipe" ><QuestionRecipe/> </Route>
              <Route path="/fridgerecipe" ><FridgeRecipe/> </Route>
              <Route path="/profile"> {isAuth ? <Profile /> : <Redirect to="/" />} </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
