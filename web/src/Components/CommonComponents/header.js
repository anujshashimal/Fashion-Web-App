import React, {Component, useState} from 'react'; import {connect} from 'react-redux'; import {getNumbers} from "../../Actions/getActions";import{Link} from "react-router-dom";

    const header = (props) => {
        console.log(props)
        return (
            <div>
                <header>
                    <nav className="navbar fixed-top navbar-expand-lg navbar-dark  deep-purple darken-1 scrolling-navbar">
                        <a className="navbar-brand" href="#"><strong>Faction Store</strong></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Opinions</a>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav nav-flex-icons ml-auto">
                                <li className="nav-item"><a href="" className="nav-link waves-effect"><span
                                    className="badge red z-depth-1 mr-1"> 2 </span><i id="navbar-static-cart" alt="Cart"
                                                                                      className="fas fa-list"></i><span
                                    className="sr-only"> Cart </span></a></li>

                                <li className="nav-item"><a href="" className="nav-link waves-effect"><Link
                                    to='/cartpage'> Click </Link>

                                    <span
                                        className="badge red z-depth-1 mr-1"> {props.basketProps.backetNumbers} </span><i
                                        id="navbar-static-cart" alt="Cart" className="fas fa-shopping-cart"></i><span
                                        className="sr-only"> Cart </span></a></li>
                                <li className="nav-item"><a href="" className="nav-link waves-effect"> <span
                                    className="badge red z-depth-1 mr-1"> {props.basketProps.backetNumbers} </span><i
                                    id="navbar-static-cart" alt="Cart" className="fas fa-shopping-cart"></i><span
                                    className="sr-only"> Cart </span></a></li>


                                <li className="nav-item">
                                    <div className="nav-link waves-effect"> 
                                        <i id="navbar-static-cart" alt="Cart" className="fas fa-user"></i>
                                        {props.username}
                                        <span className="sr-only"> Cart </span></div></li> 
                            </ul>
                        </div>
                    </nav>

                </header>


            </div>
        )


    }
    const mapStatetoProps = (state) => ({
        basketProps: state.basketState
    })

export default connect(mapStatetoProps, {getNumbers}) (header);