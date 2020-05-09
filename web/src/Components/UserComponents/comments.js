import React, { Component } from 'react'
import './Comments.css'
import axios from 'axios'

export class comments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Comments: [],
        }
    }
    

    componentDidMount(){
    
        axios.get('http://localhost:5000/Comments/find')
        .then(response=>{
          if(response.data.length>0){
            this.setState({
                Comments :  response.data.map(Comments=>Comments),
         })}
        })
        
        
        console.log('Comments', this.state.Comments);
    }

    render() {
        return (
            <div className="container" style={{width: '60%'}}>
                <h2>Comments</h2><hr/>
                {this.state.Comments.map(Comments => (
                <div className="border border-primary" style={{marginTop: '2%'}}>
                
                    <div style={{marginLeft: '2%'}}>
                        <b>{Comments.username}</b><br/>
                        {Comments.Comment}
                        <br/>
                        <button 
                        type="button" 
                        class="btn btn-success btn-sm">
                            <i class="fa fa-edit"></i>
                        </button>

                        <button 
                        type="button" 
                        class="btn btn-danger btn-sm">
                            <i class="fa fa-trash"></i>
                        </button>

                    </div>
                   
                </div>
                 ))
                }
                <br/>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Enter Your Comment</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="button" class="btn btn-primary btn-md">Submit</button>
                </div>
                
                        
            </div>
        )
    }
}

export default comments
