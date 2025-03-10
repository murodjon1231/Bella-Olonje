import React from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/Footer";
<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-brands/css/uicons-brands.css'></link>

function App() {
  return (
    <div className="bg-dark">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;