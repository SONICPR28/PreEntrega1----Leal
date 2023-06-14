import { useState } from "react";
import Header from "../components/Header";
import "./App.css";
import ItemListContainer from '../components/ItemsListContainer';
import Compra from "../components/botones"

  function App() {

    return (
        <div>
          <Header />
          <hr/>
          <ItemListContainer />
          <Compra />
          
        </div>
    )
  }

  export default App