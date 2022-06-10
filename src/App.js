import './App.css';
import './App.css';
import React, {useContext} from "react";
import Pages from "./pages/Pages";
import TopMenu from "./components/TopMenu";
import AuthContextProvider, {AuthContext} from "./context/Authentification";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Veggie from "./pages/Veggie";
import AllRecipes from "./pages/AllRecipes";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";
import {BrowserRouter, NavLink, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";


function App() {

    const { isAuth } = useContext(AuthContext);

  return (
      <>
          <BrowserRouter>
            <TopMenu />
          <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Popular" element={<Popular />} />
              <Route path="/Veggie" element={<Veggie />} />
              <Route path="/AllRecipes" element={<AllRecipes />} />
              <Route path="/searched/:search" element={<Searched />} />
              <Route path="/recipe/:name" element={<Recipe />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element= {isAuth ? <Profile /> : <Navigate to="/Home" />} />
          </Routes>
          </BrowserRouter>
          </>
  );
}

export default App;
