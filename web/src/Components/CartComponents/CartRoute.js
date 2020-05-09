import React, {component} from "react";
import {BrowserRouter as Router, Route, } from "react-router-dom";
import NavBar from "../CommonComponents/header";
import Footer from '../CommonComponents/footer';
import Cartpage from "./CartPage";
import Cartsample from './CartSample';


function CartRoute() {
    return(
        <Router>
            <div  className="container"></div>
            <NavBar />
            <Cartsample />
            <Route path = 'cartpage' exact component={Cartpage} ></Route>
            <Route path = 'cartsample' exact component={Cartsample} ></Route>
            <Footer />
        </Router>
    )
}

export default CartRoute
