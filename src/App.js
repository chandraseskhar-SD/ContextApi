import React from "react";
import LoginPage from "./components/LoginPage";
import {MyProvider} from "./components/myContext";
import OtherComponent from "./components/OtherComponent";
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <MyProvider>
      <div>
        <BrowserRouter>
        <Routes>
          <Route exact path = '/' element={<LoginPage/>}/>
          <Route path = '/OtherComponent' element={<OtherComponent/>}/>
        </Routes>
        
        </BrowserRouter>
      </div>
    </MyProvider>
  );
}

export default App;
