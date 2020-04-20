import React , {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/CommonComponents/header.js";import Footer from './Components/CommonComponents/footer'; import logo from './img/logo.gif'
// {/*Lahiru Import Here*/}
    import MainProductPage from './Components/StoreManagerComponents/MainProduct'
//
//
//
//
// {/*Vishaka Import Here*/}
//
//
//
//
//
//
//
//
// {/*Ravindu Import Here*/}
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
                    <Header />
                    <br/><br/><br/>
                    <p align="center"><img src={logo} width="20%"/></p>
                    <Switch>
                        {/*Access authorized for - (Everyone)*/}





                        {/*Access authorized for - (Anuj)*/}
                        <Route path = {'/cart'} exact component={cart} />
                        <Route path = {'/cartpage'} exact component={cartpage} />
                        <Route path = {'/cartsample'} exact component={cartsample} />


                        {/*Access authorized for - (Laka)*/}
                        <Route  path = {'/Product'}  exact component={MainProductPage} />





                        {/*Access authorized for - (Ravindu)*/}






                        {/*Access authorized for - (Vishaka)*/}






                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
