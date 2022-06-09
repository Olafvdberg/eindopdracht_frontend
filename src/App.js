import './App.css';
import './App.css';
import React from "react";
import Pages from "./pages/Pages";
import {BrowserRouter} from 'react-router-dom'
import TopMenu from "./components/TopMenu";


function App() {
  return (
      <div>
        <BrowserRouter>
          <TopMenu />
          <Pages/>
        </BrowserRouter>
      </div>
  );
}

export default App;
