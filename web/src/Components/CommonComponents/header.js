import React, {Component} from 'react';
export default class header extends Component{
    render() {
        return(
            <div>
            <header>

    <nav class="navbar fixed-top navbar-expand-lg navbar-dark  deep-purple darken-1 scrolling-navbar">
	
      <a class="navbar-brand" href="#"><strong>Faction Store</strong></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Opinions</a>
          </li>
        </ul>
        <ul class="nav navbar-nav nav-flex-icons ml-auto">
        <li class="nav-item"><a href="" class="nav-link waves-effect"><span class="badge red z-depth-1 mr-1"> 2 </span><i id="navbar-static-cart" alt="Cart" class="fas fa-list"></i><span class="sr-only"> Cart </span></a></li>
		
		 <li class="nav-item"><a href="" class="nav-link waves-effect"><span class="badge red z-depth-1 mr-1"> 3 </span><i id="navbar-static-cart" alt="Cart" class="fas fa-shopping-cart"></i><span class="sr-only"> Cart </span></a></li>

        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"><i class="fas fa-user"></i><span class="d-none d-xl-inline-block ml-1"></span></a>
          <div class="dropdown-menu dropdown-primary dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <div class="dropdown-item">UserName</div>
            <a class="dropdown-item" href="#">Profile</a>
            <a class="dropdown-item" href="#">SignOut</a>
          </div>
        </li>
      </ul>
      </div>
    </nav>
  
  </header>
  </div>
        )
    }
}
