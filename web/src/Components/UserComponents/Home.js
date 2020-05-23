import React, { Component } from 'react'
import './Home.css'
import Men from './img/Men.gif'
import Women from './img/Women.gif'
import Kids from './img/Kids.gif'
import Other from './img/Other.gif'
import logo from './logo.gif'
import Header from "../CommonComponents/header.js";
import Footer from '../CommonComponents/footer';
import  {Link}  from  'react-router-dom'
import Page from 'react-page-loading'
import Nav from '../CommonComponents/NavbarPage'

const queryString = require('query-string');

export class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',

        }
    }

    componentDidMount(){

        var values = queryString.parse(this.props.location.search)
        console.log(this.props.location.search)
        console.log(values.username)
        this.setState({
            username: values.username,
        })
    }
    
    render() {
        
        
        return (
            <div>
                <Page loader={"bubble-spin"} color={"#c62828"} size={20} duration={2}>
                <Nav username={this.state.username}/>
                {/* <Header username={this.state.username} /> */}
                <br/><br/>
                <div style={{textAlign: 'center'}}>
                <img src={logo} alt="Avatar" style={{width:'20%'}}/>
                </div>
                <div style={{margin: "10px"}}>
                    <div className="row">

                        <div className="column">
                            <Link to={'/viewProduct?maincategory=Men&username='+this.state.username}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <img src={Men} alt="Avatar" style={{width:'100%', height:'100%'}}/>
                                    </div>
                                    <div className="flip-card-back1">
                                        <br/><br/><br/><br/><br/><br/><br/>
                                        <h2>Men's Collection</h2>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div className="column">
                            <Link to={'/viewProduct?maincategory=Women&username='+this.state.username}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <img src={Women} alt="Avatar" style={{width:'100%', height:'100%'}}/>
                                    </div>
                                    <div className="flip-card-back2">
                                        <br/><br/><br/><br/><br/><br/><br/>
                                        <h2>Women's Collection</h2>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div className="column">
                            <Link to={'/viewProduct?maincategory=Kids&username='+this.state.username}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <img src={Kids} alt="Avatar" style={{width:'100%', height:'100%'}}/>
                                    </div>
                                    <div className="flip-card-back3">
                                        <br/><br/><br/><br/><br/><br/><br/>
                                        <h2>Kid's Collection</h2>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div className="column">
                            <Link to={'/viewProduct?maincategory=Other&username='+this.state.username}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <img src={Other} alt="Avatar" style={{width:'100%', height:'100%'}}/>
                                    </div>
                                    <div className="flip-card-back4">
                                        <br/><br/><br/><br/><br/><br/><br/>
                                        <h2>Other Collection</h2>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>


                    </div>
                </div>
                <Footer />
                </Page>
            </div>
        )
    }
}

export default Home
