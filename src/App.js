import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import DefaultLayoutRoute from "./components/DefaultLayout/DefaultLayoutRoute";
import { NotificationContainer } from "react-notifications";
import { LayoutProvider } from "./context/layoutContext";
import { UserDataProvider } from "./context/userContext";
import Domain from "./components/pages/auth/domain";
import "react-responsive-modal/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { SocketDataProvider } from "./context/socket";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Orders from './components/pages/orders/orders.jsx'
const SiteRouter = () => {
  return (
    <BrowserRouter>
      {/* Scroll Restoration */}

      <Switch>
        <Route exact path="/" component={Dashboard} />

        {/* help pages end */}
        <UserDataProvider>
          <LayoutProvider>
            <SocketDataProvider>
              <DefaultLayoutRoute
                exact
                path="/home"
                pageName="Dashboard"
                component={Dashboard}
              />

<DefaultLayoutRoute
                exact
                path="/orders"
                pageName="Orders"
                component={Orders}
              />
            </SocketDataProvider>
          </LayoutProvider>
        </UserDataProvider>

        <Route>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <h1>404 - Not Found</h1>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

function App(props) {
  //DisableInspect()
  return (
    <div>
      <NotificationContainer />
      <SiteRouter />
    </div>
  );
}

export default App;
