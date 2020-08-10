import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard from './components/dashboard';
import { renderButton, checkSignedIn } from './googleAuthentication/googleAuth';
import styled from "styled-components";
const img = require('./assets/pictures/dashboarddd.png');

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const updateSignin = (signedIn) => { 
    setIsSignedIn(signedIn);
    if (!signedIn) {
      renderButton();
    }
  };

  const init = () => { 
    checkSignedIn()
      .then((signedIn) => {
        updateSignin(signedIn);
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignin);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    window.gapi.load("auth2", init); 
  });

  return (
    <div className="App">
      {!isSignedIn ? (
        <>
          <div className="Left">
            <Title>GOOGLE ANALYTICS DASHBOARD<br/></Title>
            <Text>
              This dashboard is implemented from the Google Analytics API<br/>
              Just you must log in to your google count <br/>
              And enter your View ID<br/><br/><br/><br/>
            </Text>
              <div id="signin-button"></div>
          </div>
          <div className="Right">
              <img src={img}/>
           </div>
      </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;



const Title = styled.div`
  font-size: 3em;
  padding-top: 5vmin;
  color: #4169E1;
`;

const Text = styled.h5`
  color : #191970;
`;

const Image = styled.div`
  width : 500px;
`;