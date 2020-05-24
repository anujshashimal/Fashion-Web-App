import React, {Component, useState} from 'react'; import {connect} from 'react-redux'; import {getNumbers} from "../../Actions/getActions";import{Link} from "react-router-dom";
import './adminHome.css'
import Logo from "./img/logoHeader.gif";
const header = (props) => {
    console.log(props)
    return (
        <div>
            <header>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark  red darken-3  darken-1 scrolling-navbar">
                    <Link to={'/adminhome'} className=" nav-link" id="font"><strong><img src={Logo} width="100px" /></strong></Link>
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
                             <li className="nav-item">
                                <Link to={'/addstoremanager'} className=" nav-link" id="font">Add store Manager</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/showstoremanager'} className=" nav-link" id="font">View store Manager</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/mainCategory'} className=" nav-link" id="font">Category</Link>
                                </li>
                        </ul>
                        <ul className="nav navbar-nav nav-flex-icons ml-auto">
                            <li className="nav-item">
                                <div className="nav-link waves-effect">
                                    {(props.username != '' && props.username != undefined && props.username != "undefined") ?(
                                        <span>
                                                <i id="navbar-static-cart" alt="Cart" className="fas fa-user"></i>
                                            <b>{props.username}</b>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            {/* <Link to={"/viewProduct?username="+""} style={{color: "white"}}><i id="navbar-static-cart" alt="Cart" className="fas fa-sign-out-alt"></i>Logout</Link> */}
                                            <Link to={"/Storemanagerlogin"} style={{color: "white"}}><i id="navbar-static-cart" alt="Cart" className="fas fa-sign-out-alt"></i>Logout</Link>
                                            {/* <button className="btn btn-outline-white btn-sm my-0" type="">Logout</button> */}
                                            </span>
                                    ) : (
                                        <span>
                                            <Link to={'/Login'} style={{color: "white"}}><i id="navbar-static-cart" alt="Cart" className="fas fa-user"></i>Login</Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;

                                            <Link to={'/Register'} style={{color: "white"}}><i id="navbar-static-cart" alt="Cart" className="fas fa-user-plus"></i>Singup</Link>
                                            </span>
                                    )}
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