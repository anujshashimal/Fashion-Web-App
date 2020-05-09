import React, { Component } from 'react'
import './Home.css'

export class Home extends Component {
    render() {
        // $('.carousel').carousel({
        //     interval: 3000
        // })
         
        //  $( document ).ready(function() {
        //   new WOW().init();
        // });
        
        // $( ".wow" ).addClass( "flipInY" );
        
        return (
            <div>
                <br/><br/><br/>
                {/* <p align="center"><img src="img/Webp.net-gifmaker.gif" width="20%"/></p> */}


                <div style={{margin: '10px'}}>
                    <div className="row">

                        <div className="column">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="Men.gif" alt="Avatar" style={{width:'100%', height:'100%'}}/>
                                    </div>
                                    <div className="flip-card-back1">
                                        <br/><br/><br/><br/><br/><br/><br/>
                                        <h2>Men's Collection</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="Women.gif" alt="Avatar" style={{width:'100%', height:'100%'}}/>
                                    </div>
                                    <div className="flip-card-back2">
                                        <br/><br/><br/><br/><br/><br/><br/>
                                        <h2>Women's Collection</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="Kids.gif" alt="Avatar" style={{width:"100%",height:"100%"}}/>
                                    </div>
                                    <div className="flip-card-back3">
                                        <br/><br/><br/><br/><br/><br/><br/>
                                        <h2>Kid's Collection</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="Other.gif" alt="Avatar" style={{width:"100%",height:"100%"}}/>
                                    </div>
                                    <div className="flip-card-back4">
                                        <br/><br/><br/><br/><br/><br/><br/>
                                        <h2>Other Collection</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <br/><br/>

                <h4 align="center">Brands Available</h4>
                <div>
                
                <!--Section: Content-->
                <section className="text-center dark-grey-text">

                    <!-- Grid row -->
                    <div className="row">

                    <!-- Grid column -->
                    <div className="col-md-12 mb-4">

                        <div className="wrapper-carousel-fix">
                        
                        <!-- Carousel Wrapper -->
                        <div id="carousel-example-1" className="carousel no-flex testimonial-carousel slide" data-ride="carousel width"
                            data-interval="false">
                            <!--Slides-->
                            <div className="carousel-inner" role="listbox">
                            <!--First slide-->
                            <div className="carousel-item active">
                                
                                <div className="view card-img-100 mx-auto mt-0 mb-0">
                                <img src="Amani_Fashion_Bug_Logo.png" className="img-fluid z-depth-1" alt="smaple image"/>
                                </div>
                                
                            </div>

                            <!--First slide-->
                            <!--Second slide-->
                            <div className="carousel-item">
                                
                                <div className="view card-img-100 mx-auto mt-0 mb-0">
                                <img src="amante_Fashion_Bug_Logo.png" className="img-fluid z-depth-1" alt="smaple image">
                                </div>
                                
                            </div>
                            
                            <div className="carousel-item">
                                
                                <div className="view card-img-100 mx-auto mt-0 mb-0">
                                <img src="Bigg-Boss_Fashion_Bug_Logo.png" className="img-fluid z-depth-1" alt="smaple image">
                                </div>
                                
                            </div>
                            <!--Second slide-->
                            <!--Third slide-->
                            <div className="carousel-item">
                                
                                <div className="view card-img-100 mx-auto mt-0 mb-0">
                                <img src="Amazing-Lanka_Fashion_Bug_Logo.png" className="img-fluid z-depth-1" alt="smaple image">
                                </div>
                                
                            </div>
                            <!--Third slide-->
                            </div>
                            <!--Slides-->
                            <!--Controls-->
                            <a className="carousel-control-prev left carousel-control" href="#carousel-example-1" role="button"
                            data-slide="prev">
                            <span className="icon-prev" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next right carousel-control" href="#carousel-example-1" role="button"
                            data-slide="next">
                            <span className="icon-next" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                            </a>
                            <!--Controls-->
                        </div>
                        <!-- Carousel Wrapper -->
                        
                        </div>
                        
                    </div>
                    <!-- Grid column -->

                    </div>
                    <!-- Grid row -->
                    
                </section>
                <!--Section: Content--> */}


                {/* </div>      
            </div>
        )
    }
}

export default Home
