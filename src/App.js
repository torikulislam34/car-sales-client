import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from './components/About/About';
import AddItem from "./components/AddItem/AddItem";
import Blog from './components/Blog/Blog';
import Booktour from "./components/Booktour/Booktour";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageOrder from "./components/ManageOrder/ManageOrder";
import Myorder from "./components/Myorder/Myorder";
import NotFound from './components/NotFound/NotFound';
import Register from "./components/Register/Register";
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services';
import Specials from "./components/Specials/Specials";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path ='/'>
            <Home></Home>
          </Route>
          <Route path ='/home'>
            <Home></Home>
          </Route>
          <Route path ='/about'>
            <About></About>
          </Route>
          <Route path ='/specials'>
            <Specials></Specials>
          </Route>
          <Route path ='/services'>
            <Services></Services>
          </Route>
          <PrivateRoute path='/service/:id'>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path ='/perces'>
            <Booktour></Booktour>
          </Route>
          <Route path ='/myorder'>
            <Myorder></Myorder>
          </Route>
          <PrivateRoute path ='/manageOrder'>
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <Route path ='/addItem'>
            <AddItem></AddItem>
          </Route>
          <Route path ='/blog'>
            <Blog></Blog>
          </Route>
          <Route path ='/login'>
             <Login></Login>
          </Route>
          <Route path ='/register'>
             <Register></Register>
          </Route>
          <Route path ='*'>
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
