import "../styles/globals.css";
import React, { useMemo } from "react";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
