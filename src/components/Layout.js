import React from "react";

import Navbar from "./navbar";

//para que el Layout funcione es necesario recibir y retornar los props
function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default Layout;
