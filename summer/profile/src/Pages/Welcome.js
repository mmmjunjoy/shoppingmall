

import React from "react";
import {Route} from "react-router-dom";

const Welcome = () => {
    return (
      <div >
        <section>
          <h1>The Welcome page</h1>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2><h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <Route path ="/welcome/new-user">
            <p>Welcome. new user!</p>
          </Route>
        </section>
  
      </div>
    );
  }

export default Welcome;