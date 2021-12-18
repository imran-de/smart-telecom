import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExploreProduct from './Pages/Home/ExploreProduct/ExploreProduct';
import PurchaseOrder from './Pages/PurchasePage/PurchaseOrder/PurchaseOrder';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Review from './Pages/Home/Review/Review';
import PayMethod from './Pages/Dashboard/PayMethod/PayMethod';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/explore">
              <ExploreProduct></ExploreProduct>
            </Route>
            <Route path="/add-review">
              <Review></Review>
            </Route>
            <Route path="/payment">
              <PayMethod></PayMethod>
            </Route>
            <PrivateRoute path="/purchase">
              <PurchaseOrder />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
