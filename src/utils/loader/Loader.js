import React from 'react';
import Spiner from "../../app/assests/images/loader.gif";

const Loader = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <img src={Spiner} height="70px" alt='spiner' />
    </div>
  )
}

export default Loader;