import React, {Component} from 'react';
export default class header extends Component{
    render() {
        return(
            <div class="container" >
                <div class="raw" style="position: absolute; vertical-align: middle;">
                    <div class="col-md-6">
                        <p align="center">
                            <img src="Webp.net-gifmaker.gif" width="50%" />
                        </p>
                        <br />
                        <img src="shopping.gif" width="100%" />
                    </div>
                    <div class="col-md-5" style="align-items: center;">
                        <br /><br /><br /><br /><br />
                        <form action="php/validation.php" method="POST" style="max-width:500px;margin:auto">
                        <h1 align="center">
                            <i class="fa fa-lock icon"></i>User Login
                        </h1>
                    <div class="input-container">
                        <i class="fa fa-user icon fa-lg"></i>
                        <input class="input-field1" type="text" placeholder="Username" name="usrnm" required />
                </div>
  
                <div class="input-container">
                    <i class="fa fa-key icon fa-lg"></i>
                    <input class="input-field1" type="password" placeholder="Password" name="psw" required />
                </div>

                <button type="submit" class="btn1">Login</button>
                <br/><br/>
                <p align="center">
		            <a href="reset.html">Lost your password?</a><br/>
                    <a href="php/register.php">Don't have an account?</a>
                </p>
    
            </form>
            
            </div>
        </div>
        </div>
        )
    }
}
