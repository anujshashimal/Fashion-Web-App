import React, {Component} from 'react';
import './LoginRegister.css';
import back from './shopping.gif'
import logo from './logo.gif'
export default class header extends Component{
    render() {
        return(
            <div className="container" >
                <div className="raw">
                    <div className="rowalign">
                        <div className="col-md-6">
                            <p align="center">
                                <img src={logo} width="50%" />
                            </p>
                            <br />
                            {/* <img src={back} width="100%"/> */}
                        </div>

                        <div className="col-md-5">
                            <div className="centeralign">
                                <br /><br /><br /><br /><br />

                                <form>
                                    <div className="formalign">
                                        <h1 align="center">
                                            <i class="fa fa-lock icon"></i> User Login
                                        </h1>

                                        <div className="input-container">
                                            <i className="fa fa-user icon fa-lg"></i>
                                            <input className="input-field1" type="text" placeholder="Username" name="username" required />
                                        </div>

                                        <div className="input-container">
                                            <i className="fa fa-key icon fa-lg"></i>
                                            <input className="input-field1" type="password" placeholder="Password" name="password" required />
                                        </div>

                                        <button type="submit" className="btn1">Login</button>

                                        <br /><br />

                                        <p align="center">
                                            {/* <a href="reset.html">Lost your password?</a><br/> */}
                                            <a href="php/register.php">Don't have an account?</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
