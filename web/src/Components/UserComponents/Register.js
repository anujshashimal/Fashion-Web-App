import React, {Component} from 'react';
import '../Css/';
export default class header extends Component{
    render() {
        return(
            <div class="container" >
                <div class="raw" style="position: absolute; vertical-align: middle;">
                    <div class="col-md-6"><br/>
                        <p align="center">
                            <img src="Webp.net-gifmaker.gif" width="50%" />
                        </p>
                        <img src="shop2.gif" width="100%" />
                    </div>

                    <div class="col-md-5" style="align-items: center;">
                        <br />
                        <form action="" method="" >
                            <h2 align="center">
                                <i class="fa fa-user-plus icon"></i>User Register
                            </h2>

                            <div class="input-container">
                                <i class="fa fa-user icon fa-lg"></i>
                                <input class="input-field1" type="text" placeholder="Username" name="username" required/>
                            </div>
    
                        {/* <div class="input-container">
                                <i class="fa fa-suitcase icon"></i>
                                <input class="input-field1" type="text" placeholder="Occupation" name="occupation" required/>
                        </div> */}
    
                            <div class="input-container">
                                <i class="fa fa-envelope icon fa-lg"></i>
                                <input class="input-field1" type="email" placeholder="Email" name="email" required/>
                            </div>
    
                            <div class="input-container">
                                <i class="fa fa-phone icon fa-lg"></i>
                                <input class="input-field1" type="text" placeholder="Telephone No" name="telephone" maxlength="10" required pattern="[0]{1}[0-9]{9}"/>
                            </div>
    
                            <div class="input-container">
                                <i class="fa fa-map-marker icon fa-lg"></i>
                                <input class="input-field1" type="text" placeholder="Address" name="address" required/>
                            </div>
      
                            <div class="input-container">
                                <i class="fa fa-key icon fa-lg"></i>
                                <input class="input-field1" type="password" placeholder="Password" name="password" required/>
                            </div>
    
                            <div class="input-container">
                                <i class="fa fa-key icon fa-lg"></i>
                                <input class="input-field1" type="password" placeholder="Confirm Password" name="confirmPassword" required/>
                            </div>
    
                            {/* <p id="demo"></p> */}
    
                            <div class="radio-container">
                                <i class="fa fa-male icon fa-lg"></i> &nbsp;&nbsp;
                                <input class="with-gap" type="radio" value="male" name="gender" required />
                    
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                                <i class="fa fa-female icon fa-lg"></i> &nbsp;&nbsp;
                                <input class="custom-control-input" type="radio" value="female" name="gender" required/>
                            </div>
                            <br/>
                            <button type="submit" class="btn1" onclick="javascript: return myFunction();">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
