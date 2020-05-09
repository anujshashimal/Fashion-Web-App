import React, { Component } from 'react'
import women from "../../img/women.jpg";
import  './Styles/style.css';
export class Addcategory extends Component {
    render() {
        return (
            <div><br/>

                <div className="conatainer">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="subcategory">
                            <div className="card">


                                <div className="view overlay">
                                    <div className="inner">
                                        <img className="card-img-top" src={women} alt="Card image cap"/>

                                        <a href="#!">
                                            <div className="mask rgba-white-slight "></div>
                                        </a>
                                    </div>
                                </div>


                                <div className="card-body">


                                    <h4 className="card-title">WOMEN</h4>

                                    <p className="card-text">Hey Sir, To add subcategories under the women category.</p>

                                    <a href="mainCategory.js" className="btn deep-purple darken-1"
                                       id="btnName">Women</a>

                                </div>

                            </div>
                        </div>



                            {/*<div className="subcategory">*/}
                            {/*    <div className="card" >*/}


                            {/*        <div className="view overlay">*/}
                            {/*            <div className="inner">*/}
                            {/*                <img className="card-img-top" src={women} alt="Card image cap"/>*/}

                            {/*                <a href="#!">*/}
                            {/*                    <div className="mask rgba-white-slight "></div>*/}
                            {/*                </a>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}


                            {/*        <div className="card-body">*/}


                            {/*            <h4 className="card-title">WOMEN</h4>*/}

                            {/*            <p className="card-text">Hey Sir, To add subcategories under the women category.</p>*/}

                            {/*            <a href="mainCategory.js" className="btn deep-purple darken-1"*/}
                            {/*               id="btnName">Women</a>*/}

                            {/*        </div>*/}

                            {/*    </div>*/}
                            {/*</div>*/}
<br/>


                            {/*<div class="card card-image"*/}
                            {/*     style="">*/}


                            {/*    <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">*/}
                            {/*        <div>*/}
                            {/*            <h5 class="pink-text"><i class="fas fa-chart-pie"></i> Marketing</h5>*/}
                            {/*            <h3 class="card-title pt-2"><strong>This is the card title</strong></h3>*/}
                            {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,*/}
                            {/*                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.*/}
                            {/*                Odit sed qui, dolorum!.</p>*/}
                            {/*            <a class="btn btn-pink"><i class="fas fa-clone left"></i> View project</a>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}

                            {/*</div>*/}




                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Addcategory