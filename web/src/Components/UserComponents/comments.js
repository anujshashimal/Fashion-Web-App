import React, { Component } from 'react'
import './Comments.css'
import axios from 'axios'

export class comments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Comments: [],
            comment:[],
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

    handleCommentsChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleCommentSubmit = event => {
        event.preventDefault();
        this.sendData();
        this.setState({
            comment:'',
        })
        window.location.reload(false);
    }

    async sendData () {
        const data ={
            username: this.props.username,
            productId: this.props.productid,
            Comment: this.state.comment,
        }
        try{
            const responce = await axios({
                method: 'post',
                url: 'http://localhost:5000/Comments/add',
                data: data,
              });
              console.log(responce);
        }catch(ex){
        }
    }

        

    render() {
        return (
            <div className="container" style={{width: '60%'}}>
                <h2>Comments</h2><hr/>
                {this.state.Comments.filter(Comments => Comments.productId === this.props.productid).map(Comments => (
                <div className="border border-primary" style={{marginTop: '2%'}}>
                    {(Comments.username === this.props.username) ? (
                    <div style={{marginLeft: '2%'}}>
                        <b>{Comments.username}</b><br/>
                        {Comments.Comment}
                        <br/>
                        <div style={{textAlign: 'right'}}>
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
                    ):(
                        <div style={{marginLeft: '2%'}}>
                        <b>{Comments.username}</b><br/>
                        {Comments.Comment}
                        <br/>
                        
                    </div>
                    )}
                    
                </div>
                 ))
                }
                <br/>
                <form onSubmit={this.handleCommentSubmit}>
                {(this.props.username !== '') ? (
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Enter Your Comment</label>
                        <textarea
                        className="form-control" 
                        id="exampleFormControlTextarea1"
                        onChange={this.handleCommentsChange} 
                        rows="3"
                        required>
                        </textarea>
                        <button type="submit" class="btn btn-primary btn-md">Post</button>
                    </div>
                ):(
                    <p></p>
                )}
                </form>
                    
            </div>
        )
    }
}

export default comments
