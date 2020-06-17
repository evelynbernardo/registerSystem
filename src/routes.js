import React, {useContext} from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
//import { isAuthenticated } from "./services/auth";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn"
import Register from "./pages/Register"
import List from "./pages/List"

// const PrivateRoute = ({ component: Component, ...rest}) => {
//     const { token } = useContext(StoreContext);
  
//     return (
//       <Route
//         {...rest}
//         render={() => token
//           ? <Component {...rest} />
//           : <Redirect to="/" />
//         }
//       />
//     )
// }

const Routes = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          {/* COLOCAR PRIVATEROUTE */}
          <Route path="/register" component={Register} />
          <Route path="/list" component={List} />
          <Route path="*" component={() => <h1>Page not found</h1>} /> 
        </Switch>
    </BrowserRouter>
  );

export default Routes;