import React, { Component } from 'react'
import './Comments.css'
import axios from 'axios'
import { FaStar } from "react-icons/fa"
import './Rating.css'

export class comments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Comments: [],
            rating: null,
            hover: null,
            edit: false,
            comment: '',
            editid: '',
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
            rate: this.state.rating,
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

    deleteComment(comment_id) {
        axios.delete('http://localhost:5000/Comments/delete/'+comment_id)
        .then(res=>console.log(res.data))
        // this.setState({
        // Products : this.state.Products.filter(product=>product.productid != product_id)
        // })
        window.location.reload(false);
    }

    EditComments() {
        
    }

    HandleRateing = ratingValue => {
        this.setState({
          rating: ratingValue,
        })
    }
    
    HandleHover = ratingValue => {
      this.setState({
        hover: ratingValue,
      })
    }

    HandleEdit = (id, comment, rate) => {
        this.setState({
            editid: id,
            comment: comment,
            rating: rate,
            edit: true,
        })
        console.log('id',this.state.id);
        console.log('comment',this.state.comment);
        console.log('editrate',this.state.editrate);
    }

    HandleUpdate = () => {
        console.log(this.state.editid)
        const Comments ={
            Comment: this.state.comment,
            rate: this.state.rating,
        }

        axios.post('http://localhost:5000/Comments/update/'+this.state.editid,Comments)
       .then(res=>console.log(res.data));

       window.location.reload(false);
    }

    HandleCancel = () => {
        window.location.reload(false);
    }

    render() {
        const {rating, hover} =this.state
        return (
            <div className="container" style={{width: '60%'}}>
                <br />
                <h2>Comments</h2><hr/>

                <div>
                <form onSubmit={this.handleCommentSubmit}>
                {(this.props.username !== '' && this.props.username !== 'undefined') ? (
                <div>
                    <div>
                    {[...Array(5)].map((star, i) =>{
                    const ratingValue = i + 1;
                    return (
                        <label>
                            <input type="radio"
                             name="rating" 
                             value={ratingValue} 
                             onClick={()=>this.HandleRateing(ratingValue)} 
                             style={{display : 'none'}}/>
    
                            <FaStar 
                            className="star" 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#ffffff"} 
                            size={30} 
                            onMouseEnter={() => this.HandleHover(ratingValue)} 
                            onMouseLeave={() => this.HandleHover(null)} />
                        </label>
                    );
                })}
                <p>The rating is {rating}.</p>
                </div>


                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Enter Your Comment</label>
                        <textarea
                        className="form-control" 
                        id="exampleFormControlTextarea1"
                        onChange={this.handleCommentsChange}
                        value={this.state.comment} 
                        rows="3"
                        required>
                        </textarea>
                        {(this.state.edit) ? (
                            <div>
                            <button type="button" class="btn btn-warning btn-md" onClick={()=>this.HandleUpdate()}>Update</button>
                            <button type="button" class="btn btn-danger btn-md" onClick={()=>this.HandleCancel()}>Cancel</button>
                            </div>
                        ) : (
                            <button type="submit" class="btn btn-primary btn-md">Post</button>
                        )}
                        
                    </div>
                    </div>
                ):(
                    <p></p>
                )}
                </form>
                </div>

                {this.state.Comments.filter(Comments => Comments.productId === this.props.productid).map(Comments => (
                <div className="border border-primary" style={{marginTop: '2%', backgroundColor: "white"}}>
                    {(Comments.username === this.props.username) ? (
                    <div style={{marginLeft: '2%'}}>
                        <b>{Comments.username}</b><br/>
                        &nbsp;{Comments.Comment}
                        {/* {Comments._id} */}
                        {(Comments.rate == 0) ? (
                            <div>
                            {[...Array(5)].map((star, i) =>{
                            const ratingValue = i + 1;
                            return (
                                <label>
                                    <input type="radio"
                                     name="rating" 
                                     value={4}
                                     style={{display : 'none'}}/>
            
                                    <FaStar 
                                    className="star" 
                                    color={ratingValue <= (0 || 0) ? "#ffc107" : "#e4e5e9"} 
                                    size={20}  
                                    />
                                </label>
                            );
                        })}
                        
                        </div>
                        ) : (
                            <div>
                {[...Array(5)].map((star, i) =>{
                const ratingValue = i + 1;
                return (
                    <label>
                        <input type="radio"
                         name="rating" 
                         value={4}
                         style={{display : 'none'}}/>

                        <FaStar 
                        className="star" 
                        color={ratingValue <= (Comments.rate || (5 - Comments.rate)) ? "#ffc107" : "#e4e5e9"} 
                        size={20}  
                        />
                    </label>
                );
            })}
            
            </div>
                        )}
                        
                    
                        <div style={{textAlign: 'right'}}>
                        <button 
                        type="button"
                        onClick={()=>this.HandleEdit(Comments._id, Comments.Comment, Comments.rate)}
                        class="btn btn-success btn-sm">
                            <i class="fa fa-edit"></i>
                        </button>

                        <button
                        onClick ={()=>{if(window.confirm('Delete the Comment?')){this.deleteComment(Comments._id)}}}
                        // onClick={() => this.deleteComment(Comments._id)}
                        type="button"
                        class="btn btn-danger btn-sm">
                            <i class="fa fa-trash"></i>
                            
                        </button>
                        </div>
                    </div>
                    ):(
                        <div style={{marginLeft: '2%'}}>
                        <b>{Comments.username}</b><br/>
                        &nbsp;{Comments.Comment}
                        
                        {(Comments.rate == 0) ? (
                            <div>
                            {[...Array(5)].map((star, i) =>{
                            const ratingValue = i + 1;
                            return (
                                <label>
                                    <input type="radio"
                                     name="rating" 
                                     value={4}
                                     style={{display : 'none'}}/>
            
                                    <FaStar 
                                    className="star" 
                                    color={ratingValue <= (0 || 0) ? "#ffc107" : "#e4e5e9"} 
                                    size={20}  
                                    />
                                </label>
                            );
                        })}
                        
                        </div>
                        ) : (
                            <div>
                {[...Array(5)].map((star, i) =>{
                const ratingValue = i + 1;
                return (
                    <label>
                        <input type="radio"
                         name="rating" 
                         value={4}
                         style={{display : 'none'}}/>

                        <FaStar 
                        className="star" 
                        color={ratingValue <= (Comments.rate || (5 - Comments.rate)) ? "#ffc107" : "#e4e5e9"} 
                        size={20}  
                        />
                    </label>
                );
            })}
            
            </div>
                        )}

                        <br/>
                        
                    </div>
                    )}
                    
                </div>
                 ))
                }
                <br/>
                
                    
            </div>
        )
    }
}

export default comments
