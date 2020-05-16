import React, { Component } from 'react'
import { FaStar } from "react-icons/fa"
import './Rating.css'

export class Rating extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      rating: null,
      hover: null,
    }
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
  
  render() {
    const {rating, hover} =this.state
        return (
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
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                        size={30} 
                        onMouseEnter={() => this.HandleHover(ratingValue)} 
                        onMouseLeave={() => this.HandleHover(null)} />
                    </label>
                );
            })}
            <p>The rating is {rating}.</p>
            </div>
        )
  }
}

export default Rating
