import React, { Component } from 'react'

export class AddProduct extends Component {
    
   constructor(props) {
     super(props);

      this.OnChangedescription = this.OnChangedescription.bind(this);
      this.OnChangemaincatrgory = this.OnChangemaincatrgory.bind(this);
      this.OnChangesubcategory = this.OnChangesubcategory.bind(this);
      this.OnChangeprice = this.OnChangeprice.bind(this);
      this.OnChangequantity = this.OnChangequantity.bind(this);
      this.OnChangediscount = this.OnChangediscount.bind(this);
      this.OnChangestockmanagerid = this.OnChangestockmanagerid.bind(this);

     this.state = {
          description : '',  
          maincategory : '',
          subcategory : '',
          price  : 0,
          quantity : 0,
          dicount : 0 ,
          image  : '',
          stockmanagerid : '',
          maincategory : [],
          subcategory : [],
     }
   }

  componentDidMount(){
     this.setState({
          maincategory : ['Men'],
          subcategory : ['Shoes']
     })

  }



  OnChangedescription(e){
    this.setState({
       description : e.target.value
    });
  }

  OnChangemaincatrgory(e){
     this.setState({
       maincategory : e.target.value
     })
  }

  OnChangesubcategory(e){
   this.setState({
     subcategory : e.target.value
   })
  }

  OnChangeprice(e){
    this.setState({
      price : e.target.value
    })
   }
   OnChangequantity(e){
    this.setState({
      quantity : e.target.value
    })
   }

   OnChangediscount(e){
    this.setState({
      discount : e.target.value
    })
   }
    
   OnChangestockmanagerid(e){
    this.setState({
      stockmanagerid : e.target.value
    })
   }
    
   onSubmit(e)
   {
      e.preventDefault();

      const product = {
        description: this.state.description, 
        maincategory : this.state.maincategory,
        subcategory : this.state.subcategory,
        price : this.state.price,
        quantity : this.state.quantity,
        discount : this.state.dicount,
        stockmanagerid : this.state.stockmanagerid
      }
      
      console.log(product);
     
      window.location = '/';
   }

   
  render() {
    return (
      <div>
           <h2>Add Product</h2>
               




      </div>
    )
  }
}

export default AddProduct
