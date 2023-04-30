import { BrowserRouter, Switch } from "react-router-dom";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { ChakraProvider } from "@chakra-ui/react";
import Activities from "./Pages/Activities";
import GuiderProfile from "./Pages/GuiderProfile";
import Homepage from "./Pages/Homepage";
import TravelerProfile from "./Pages/TravelerProfile";
import AddStaySpace from "./Pages/AddStaySpace";
import PrivateTourRequest from "./Pages/PrivateTourRequest";
import Destinations from "./Pages/Destinations";
import Theme from "./Styles/Theme";
import { GlobalContextProvider } from "./Context/GlobalState";
import requireLogin from "./Utils/requireLogin";

import "./App.css";
import "./Server/server";

const App = () => (
  <GlobalContextProvider>
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <GuardProvider guards={[requireLogin]} error={Homepage}>
          <Switch>
            <GuardedRoute path="/activities" exact component={Activities} meta={{ auth: true }} />
            <GuardedRoute path="/t/:username" exact component={TravelerProfile} meta={{ auth: true }} />
            <GuardedRoute path="/g/:username" exact component={GuiderProfile} meta={{ auth: true }} />
            <GuardedRoute path="/add-stay-space" exact component={AddStaySpace} meta={{ auth: true }} />
            <GuardedRoute path="/private-tour-request" exact component={PrivateTourRequest} meta={{ auth: true }} />
            <GuardedRoute path="/destinations" exact component={Destinations} meta={{ auth: true }} />
            <GuardedRoute path="/" component={Homepage} exact />
            <GuardedRoute path="*" component={Homepage} />
          </Switch>
        </GuardProvider>
      </BrowserRouter>
    </ChakraProvider>
  </GlobalContextProvider>
);

export default App;
