import React, { useState } from "react";
import "./App.css";
import "./dark.css";
import "./responsive.css";
import { hasRole } from "./auth";

import Home from "./home";
import MyLink1 from "./myLink1";
import MyLink2 from "./myLink2";
import MyLink3 from "./myLink3";
import MyLink4 from "./myLink4";

import { Switch, Route } from "react-router-dom";

const userA = {
  name: "User A",
  pages: ["myLink1", "myLink2"],
  rights: ["can_view_myLink1", "can_view_myLink2", "can_view_headline"]
};
const userB = {
  name: "User B",
  pages: ["myLink2", "myLink3", "myLink4"],
  rights: [
    "can_view_myLink2",
    "can_view_myLink3",
    "can_view_myLink4",
    "can_view_headline"
  ]
};
const userC = {
  name: "User C",
  pages: ["myLink1", "myLink2", "myLink3", "myLink4"],
  rights: [
    "can_view_myLink1",
    "can_view_myLink2",
    "can_view_myLink3",
    "can_view_myLink4"
  ]
};

const admin = {
  name: "Admin",
  pages: ["myLink1", "myLink2", "myLink3", "myLink4"],
  rights: [
    "can_view_myLink1",
    "can_view_myLink2",
    "can_view_myLink2",
    "can_view_myLink3",
    "can_view_myLink4",
    "can_view_headline"
  ]
};

function App() {
  let [user, setUser] = useState(null);
  let [theme, setTheme] = useState("light");

  if (user) {
    return (
      <div className={`appWrapper ${theme}`}>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Home {...props} theme={setTheme} user={user} />}
          />
          {hasRole(user, ["myLink1"]) && (
            <Route path="/mylink1" component={MyLink1} />
          )}
          {hasRole(user, ["myLink2"]) && (
            <Route path="/mylink2" component={MyLink2} />
          )}
          {hasRole(user, ["myLink3"]) && (
            <Route path="/mylink3" component={MyLink3} />
          )}
          {hasRole(user, ["myLink4"]) && (
            <Route path="/mylink4" component={MyLink4} />
          )}
        </Switch>
      </div>
    );
  } else
    return (
      <div className="landingWrapper">
        <div className="landing">
          <button onClick={() => setUser(userA)}>Login As UserA</button>
          <button onClick={() => setUser(userB)}>Login As UserB</button>
          <button onClick={() => setUser(userC)}>Login As UserC</button>
          <button onClick={() => setUser(admin)} className="btn">
            Login As Admin
          </button>
        </div>
      </div>
    );
}

export default App;
