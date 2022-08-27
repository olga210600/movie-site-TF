import React from 'react';
// import ContentMain from "./components/ContentMain";
import './App.css'
// import MainPage from "./components/pages/Main";
import PublicRoutes from "./router";

function App(props) {
    // console.log('app props: ', props)
  return (
    <div className="App">

        <PublicRoutes/>
        {/*<MainPage/>*/}
    </div>
  );
}

export default App;
