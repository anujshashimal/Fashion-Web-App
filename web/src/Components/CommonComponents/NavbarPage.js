import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from './img/logoHeader.gif'
import{Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {getNumbers} from "../../Actions/getActions";

class NavbarPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      login: false,
      register: false,
      cart: false,
      watch: false,
      logout: false,
    };
    console.log(props)
  }


toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

loginF =()=>{
  this.setState({login: true});
}

registerF =()=>{
  this.setState({register: true});
}

cartF =()=>{
  this.setState({cart: true});
}

watchF =()=>{
  this.setState({watch: true});
}

logoutF =()=>{
  this.setState({logout: true});
}

render() {
  if(this.state.login){
    return(
      <Redirect to={"/Login"}></Redirect>
    )
  }

  if(this.state.register){
    return(
      <Redirect to={"/Register"}></Redirect>
    )
  }

  if(this.state.cart){
    return(
      <Redirect to={'/cartpage?username=' + this.props.username}></Redirect>
    )
  }

  if(this.state.watch){
    return(
      <Redirect to={'/watchlistItems?username=' + this.props.username}></Redirect>
    )
  }

  if(this.state.logout){
    return(
      <Redirect to={'/Login'}></Redirect>
    )
  }

  return (
    <Router>
      <MDBNavbar color="red darken-3" dark expand="md" fixed="top">
        <MDBNavbarBrand>
          {/* <strong className="white-text"><img src={Logo} width="7%" /></strong> */}
          
    <img src={Logo} height="30" alt="mdb logo"/>
  
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          {/* <MDBNavbarNav left> */}
            {/* <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem> */}
            {/* <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem> */}
            {/* <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem> */}
            {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          {/* </MDBNavbarNav> */}
          

          {(this.props.username != '' && this.props.username != undefined && this.props.username != "undefined") ? (
            <MDBNavbarNav right>
            <MDBNavItem onClick={() => {this.watchF()}}>
            <MDBNavLink className="waves-effect waves-light" to="">
            <span className="badge red z-depth-1 mr-1">{this.props.WatchListState.backetNumbers}</span>
            <MDBIcon icon="heart" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem onClick={() => {this.cartF()}}>
            <MDBNavLink className="waves-effect waves-light" to="">
            <span className="badge red z-depth-1 mr-1">{this.props.basketProps.backetNumbers}</span>
            <MDBIcon icon="shopping-cart" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="">
              <MDBIcon icon="user" /> {this.props.username}
            </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={() => {this.logoutF()}}>
            <MDBNavLink className="waves-effect waves-light" to="">
            <MDBIcon icon="sign-out-alt" /> Logout
            </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          ) : (
            <MDBNavbarNav right>
              <MDBNavItem onClick={() => {this.loginF()}}>
              <MDBNavLink className="waves-effect waves-light" to={""} >
              
              {/* <Link to={"/Login"} style={{color: "white"}}>  */}
                <MDBIcon icon="user" /> Login
                {/* </Link> */}
              </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem onClick={() => {this.registerF()}}>
              <MDBNavLink className="waves-effect waves-light" to={""}>
                <MDBIcon icon="user-plus" /> Register
              </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>



          )}

            

              {/* <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> */}
            
          
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}


const mapStatetoProps = (state) => ({
  basketProps: state.basketState,
  WatchListState : state.watchListState
})


export default connect(mapStatetoProps, {getNumbers}) (NavbarPage);