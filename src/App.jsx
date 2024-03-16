import React, { useState } from "react";
/* import "./App.css"; */
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Container } from "./styled";

function App() {

  return (
    <div>
      <Container>
         <Header />
         <Main />
         <Footer />
      </Container>
    </div>
  );
}

export default App;
