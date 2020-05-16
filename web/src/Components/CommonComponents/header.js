import React, {Component, useState} from 'react'; import {connect} from 'react-redux'; import {getNumbers} from "../../Actions/getActions";import{Link} from "react-router-dom";
import Logo from './img/logoHeader.gif'
    const header = (props) => {
        console.log(props)
        return (
            <div>
                <header>
                    <nav className="navbar fixed-top navbar-expand-lg navbar-dark  red darken-3 scrolling-navbar">
                        <a className="navbar-brand" href="#"><img src={Logo} width="7%" /></a>
                        <button
                        className="navbar-toggler"
                        type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                {/* <li className="nav-item active">
                                    <a className="nav-link"
                                     href="#">Home 
                                     <span className="sr-only">(current)</span>
                                     </a>
                                </li> */}
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Opinions</a>
                                </li> */}
                            </ul>
                            <ul className="nav navbar-nav nav-flex-icons ml-auto">

                                <li className="nav-item"><a  className="nav-link waves-effect"><span
                                    className="badge red z-depth-1 mr-1"> {props.WatchListState.backetNumbers} </span>
                                    <Link to= '/watchlist' style={{color: "white"}}> <i id="navbar-static-cart" alt="Cart" className="fas fa-heart"></i><span
                                    className="sr-only"> Cart </span>  </Link> </a> </li>

                                <li className="nav-item"><a  className="nav-link waves-effect">
                                    <span
                                        className="badge red z-depth-1 mr-1"> {props.basketProps.backetNumbers} </span><Link to='/cartpage' style={{color: "white"}}><i
                                        id="navbar-static-cart" alt="Cart" className="fas fa-shopping-cart"></i></Link><span
                                        className="sr-only"> Cart </span></a></li>

                                {/* <li className="nav-item"><a href="" className="nav-link waves-effect"> <span
                                    className="badge red z-depth-1 mr-1"> {props.basketProps.backetNumbers} </span><i
                                    id="navbar-static-cart" alt="Cart" className="fas fa-shopping-cart"></i><span
                                    className="sr-only"> Cart </span></a></li> */}


                                <li className="nav-item">
                                    <div className="nav-link waves-effect"> 
                                        
                                        {(props.username != '' && props.username != undefined && props.username != "undefined") ?(
                                            <span>
                                                <i id="navbar-static-cart" alt="Cart" className="fas fa-user"></i>
                                            <b>{props.username}</b>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            {/* <Link to={"/viewProduct?username="+""} style={{color: "white"}}><i id="navbar-static-cart" alt="Cart" className="fas fa-sign-out-alt"></i>Logout</Link> */}
                                            <Link to={"/Login"} style={{color: "white"}}><i id="navbar-static-cart" alt="Cart" className="fas fa-sign-out-alt"></i>Logout</Link>

                                            {/* <button className="btn btn-outline-white btn-sm my-0" type="">Logout</button> */}
                                            </span>
                                        ) : (
                                            <span>
                                            <Link to={'/Login'} style={{color: "white"}}><i id="navbar-static-cart" alt="Cart" className="fas fa-user"></i>Login</Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            
                                            <Link to={'/Register'} style={{color: "white"}}><i id="navbar-static-cart" alt="Cart" className="fas fa-user-plus"></i>Singup</Link>
                                            </span>
                                        )}
                                        {/* {props.username}
                                            <button class="btn btn-outline-white btn-sm my-0" type="submit">Logout</button>
                                        <span className="sr-only"> Cart </span></div></li>  */}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )

    }
    const mapStatetoProps = (state) => ({
        basketProps: state.basketState,
        WatchListState : state.watchListState
    })


export default connect(mapStatetoProps, {getNumbers}) (header);