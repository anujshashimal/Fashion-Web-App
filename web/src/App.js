import React , {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import header from "./Components/CommonComponents/header.js";

// {/*Lahiru Import Here*/}
//
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
                    <Switch>
                        <Route path={'/'} exact component={sampleRoute}/>

                        {/*Access authorized for - (Everyone)*/}






                        {/*Access authorized for - (Anuj)*/}
                        <Route path = {'/cart'} exact component={cart} />




                        {/*Access authorized for - (Laka)*/}






                        {/*Access authorized for - (Ravindu)*/}






                        {/*Access authorized for - (Vishaka)*/}






                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
