<<<<<<< HEAD
import React, {Component, useState} from 'react'; import {connect} from 'react-redux'; import {getNumbers} from "../../Actions/getActions";import{Link} from "react-router-dom";

const header = (props) => {
=======
import React, {Component, useState} from 'react'; import {connect} from 'react-redux'; import {getNumbers} from "../../Actions/getActions";

const header = (props) => {
  console.log(props)
>>>>>>> e3a68c0f16f2c54e547b679eb1af0a6ebcad8573
      return(
            <div>
            
            <header>

      <nav className="navbar fixed-top navbar-expand-lg navbar-dark  deep-purple darken-1 scrolling-navbar">
      <a className="navbar-brand" href="#"><strong>Faction Store</strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        <ul className="nav navbar-nav nav-flex-icons ml-auto"> <li className="nav-item"><a href="" className="nav-link waves-effect"><span className="badge red z-depth-1 mr-1"> 2 </span><i id="navbar-static-cart" alt="Cart" className="fas fa-list"></i><span className="sr-only"> Cart </span></a></li>
		
<<<<<<< HEAD
		 <li className="nav-item"><a href="" className="nav-link waves-effect"><Link to='/cartpage'> Click </Link>

             <span className="badge red z-depth-1 mr-1"> {props.basketProps.backetNumbers} </span><i id="navbar-static-cart" alt="Cart" className="fas fa-shopping-cart"></i><span className="sr-only"> Cart </span></a></li>
=======
		 <li className="nav-item"><a href="" className="nav-link waves-effect"> <span className="badge red z-depth-1 mr-1"> {props.basketProps.backetNumbers} </span><i id="navbar-static-cart" alt="Cart" className="fas fa-shopping-cart"></i><span className="sr-only"> Cart </span></a></li>
>>>>>>> e3a68c0f16f2c54e547b679eb1af0a6ebcad8573

        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"><i className="fas fa-user"> </i><span className="d-none d-xl-inline-block ml-1"></span></a>
          <div className="dropdown-menu dropdown-primary dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <div className="dropdown-item">UserName</div>
            <a className="dropdown-item" href="#">Profile</a>
            <a className="dropdown-item" href="#">SignOut</a>
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
basketProps: state.basketState
})

export default connect(mapStatetoProps, {getNumbers}) (header);