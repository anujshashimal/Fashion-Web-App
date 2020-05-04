import React , {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
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
import cart from './Components/CartComponents/Cart';
import cartpage from './Components/CartComponents/CartPage';
import cartsample from './Components/CartComponents/CartSample';




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
                        <Route path = {'/cart'} exact component={cart} />
                        <Route path = {'/cartpage'} exact component={cartpage} />
                        <Route path = {'/cartsample'} exact component={cartsample} />


                        {/*Access authorized for - (Laka)*/}
                        <Route  path = {'/Product'}  exact component={MainProductPage} />





                        {/*Access authorized for - (Ravindu)*/}
                        <Route path = {'/Login'} exact component={Login}/> 
                        <Route path = {'/Register'} exact component={Register}/>
                        <Route path = {'/viewProduct'} exact component={viewProduct}/>
                        <Route path = {'/ProductDetails'} exact component={ProductDetails}/>





                        {/*Access authorized for - (Vishaka)*/}
                        <Route  path = {'/maincategory'}  exact component={MainCategory} />
                        <Route  path = {'/addstoremanager'}  exact component={AddStoreManager} />






                    </Switch>
                    {/* <Footer/> */}
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
