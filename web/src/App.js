import React , {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/CommonComponents/header.js";
import Footer from './Components/CommonComponents/footer';
import logo from './img/logo.gif'
// {/*Lahiru Import Here*/}
    import MainProductPage from './Components/StoreManagerComponents/MainProduct'

   
//
//
//
//
// {/*Vishaka Import Here*/}
import MainCategory from './Components/CategoryComponents/mainCategory';
import AddStoreManager from './Components/AdminComponents/AddStoreManager'
//
//
//
//
//
//
//
//
// {/*Ravindu Import Here*/}
 //User ----------------------------------------------------------------
 import Login from './Components/UserComponents/login';
 import Register from './Components/UserComponents/Register'
 import viewProduct from './Components/UserComponents/viewProduct'
 import ProductDetails from './Components/UserComponents/ProductDetails'
 //---------------------------------------------------------------------
//
//
//
//
//
//
//
// {/*Anuj Import Here*/}
import CartRoute from './Components/CartComponents/CartRoute';
import Cartpage from "./Components/CartComponents/CartPage";




{/*END*/}



//This is sample

const sampleRoute = () => {
    return(
        <div>
            <p>This is sample example</p>
        </div>
    )
}


class App extends React.Component {


    render() {

        //Anuj Route Here


        // const CartRoute = ({component: Component, ...rest}) => (
        //     <Route {...rest} render={(props) => (
        //         ()
        //             ? <Component {...props} />
        //             : <Redirect to={{
        //                 pathname: '/Cart',
        //                 state: {from: props.location}
        //             }}
        //             />
        //     )}/>
        // )









        //Laiya Route Here


        // const CartRoute = ({component: Component, ...rest}) => (
        //     <Route {...rest} render={(props) => (
        //         ()
        //             ? <Component {...props} />
        //             : <Redirect to={{
        //                 pathname: '/Cart',
        //                 state: {from: props.location}
        //             }}
        //             />
        //     )}/>
        // )











        //Vishaka Route Here


        // const CartRoute = ({component: Component, ...rest}) => (
        //     <Route {...rest} render={(props) => (
        //         ()
        //             ? <Component {...props} />
        //             : <Redirect to={{
        //                 pathname: '/Cart',
        //                 state: {from: props.location}
        //             }}
        //             />
        //     )}/>
        // )













        //Ravindu Route Here


        // const CartRoute = ({component: Component, ...rest}) => (
        //     <Route {...rest} render={(props) => (
        //         ()
        //             ? <Component {...props} />
        //             : <Redirect to={{
        //                 pathname: '/Cart',
        //                 state: {from: props.location}
        //             }}
        //             />
        //     )}/>
        // )













        return (
            <div>
                <BrowserRouter>
                    {/* <Header />
                    <br/><br/><br/>
                    <p align="center"><img src={logo} width="20%"/></p> */}
                    <Switch>
                        {/*Access authorized for - (Everyone)*/}





                        {/*Access authorized for - (Anuj)*/}
                        <Route path = {'/CartRoute'} exact component={CartRoute} />
                        <Route path = {'/cartpage'} exact component={Cartpage} />




                        {/*Access authorized for - (Laka)*/}
                        <Route  path = {'/Product'}  exact component={MainProductPage} />





                        {/*Access authorized for - (Ravindu)*/}
                        <Route path = {'/Login'} exact component={Login}/> 
                        <Route path = {'/Register'} exact component={Register}/>
                        <Route path = {'/viewProduct'} exact component={viewProduct}/>
                        <Route path = {'/ProductDetails'} exact component={ProductDetails}/>





                        {/*Access authorized for - (Vishaka)*/}






                    </Switch>
                    {/* <Footer/> */}
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
