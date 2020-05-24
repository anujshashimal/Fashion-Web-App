import React, { Component } from 'react'
import axios from 'axios'
import { FaStar } from "react-icons/fa"

export class AvgRating extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            AvgRate: '',
        }
    }

    // componentDidUpdate(){
    //     axios.get('http://localhost:5000/Comments/finds/'+this.props.productid)
    //     .then(response=>{

    //         this.setState({
    //             AvgRate : response.data.avg,
    //     })
    //     console.log('avg', this.state.AvgRate)
    //   })
    // }

    AvarageRate = () =>{
        axios.get('http://100.24.72.11:5000/Comments/finds/'+this.props.productid)
        .then(response=>{

            this.setState({
                AvgRate : response.data.avg,
        })
      })
    }
    
    render() {
        return (
            <div>
                {this.AvarageRate()}


{(this.state.AvgRate == 0 || this.state.AvgRate == null) ? (
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
                        color={ratingValue <= (this.state.AvgRate || (5 - this.state.AvgRate)) ? "#ffc107" : "#e4e5e9"} 
                        size={20}  
                        />
                    </label>
                );
            })}
            
            </div>
                        )}
            </div>
        )
    }
}

export default AvgRating
