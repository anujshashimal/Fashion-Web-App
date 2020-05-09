import React, { Component } from 'react'
import { MDBContainer, MDBInputGroup ,MDBBtn} from "mdbreact";
import './Product.css';
import axios from 'axios'




class AddProduct extends Component {
    
   constructor(props) {
     super(props);

      this.OnChangedescription = this.OnChangedescription.bind(this);
      this.OnChangemaincatrgory = this.OnChangemaincatrgory.bind(this);
      this.OnChangesubcategory = this.OnChangesubcategory.bind(this);
      this.OnChangeprice = this.OnChangeprice.bind(this);
      this.OnChangequantity = this.OnChangequantity.bind(this);
      this.OnChangediscount = this.OnChangediscount.bind(this);
      this.OnChangeImage = this.OnChangeImage.bind(this);
      this.OnChangestockmanagerid = this.OnChangestockmanagerid.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
     

     this.state = {
          description : '',  
          maincategory : '',
          subcategory : '',
          price : 0,
          quantity : 0,
          discount : '' ,
          image  : null,
          stockmanagerid : '',
          maincategorys : [],
          subcategorys : [],
          formErrors: {}    
          
     }
   }

  componentDidMount(){

      axios.get('http://localhost:5000/category/:id')
      .then(response=>{
        if(response.data.length>0){
          this.setState({
            maincategorys : response.data.map(product=>product.CategoryName) ,
            maincategory : response.data[0].CategoryName,
            subcategorys :  response.data.map(product=>product.MainCategory),
            subcategory : response.data[0].MainCategory
       })
  
        }
      })   
  }

  increment() {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };
  
  decrement() {
    this.setState({
      quantity: this.state.quantity - 1
    });
  };

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
    
   OnChangeImage(e){

    console.log(e.target.files,"$$$$");

      let file = e.target.files[0]
      
       this.setState({
         image : file
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

     
      var  description = this.state.description; 
      var  maincategory = this.state.maincategory;
      var  subcategory = this.state.subcategory;
      var  price = this.state.price;
      var  quantity = this.state.quantity;
      var  discount = this.state.discount;
      var  image = this.state.image;
      var  stockmanagerid = this.state.stockmanagerid;
      
   if(this.handleFormValidation())    
  {   let formdata = new FormData();
      formdata.set('description',description);
      formdata.set('maincategory',maincategory);
      formdata.set('subcategory',subcategory);
      formdata.set('price',price);
      formdata.set('quantity',quantity);
      formdata.set('discount',discount);
      formdata.append('image',image);
      formdata.set('stockmanagerid',stockmanagerid);

      console.log(formdata);

      axios.post('http://localhost:5000/products/add',formdata)
       .then(res=>console.log(res.data));

    this.setState({
        description : '',  
        price  : '',
        quantity : 0,
        discount : '',
        image  : null,
        stockmanagerid : '',
       
    })
         window.location = '/';
  } 

   }


   handleFormValidation() {    
    const {  description,price,quantity,discount, image } = this.state;    
    let formErrors = {};    
    let formIsValid = true;    
    //var numberpattern =  '^[0-9]*$';

    //product description      
    if (!description) {    
        formIsValid = false;    
        formErrors["descriptionErr"] = "Description is required.";    
    }
    else if(description.length < 10)    
   {
        formIsValid = false;    
        formErrors["descriptionErr"] = "Description characters id more than 10 required."; 

   }
   if (image === null) {
    formIsValid = false;    
    formErrors["imageErr"] = "Please select image"; 
  }

    this.setState({ formErrors: formErrors });    
    return formIsValid;    
  }    



   
  render() {

    const { descriptionErr, priceErr, quantityErr, discountErr, imageErr } = this.state.formErrors;    

    return (
      <div className="jumbotron">
           <h2 className="header">Add Product</h2>
           <form  onSubmit={this.onSubmit}>
              <div >
                   <div className="jumbotron" >

                         <div className="texboxwidth">
                              <label htmlFor="exampleInput">Product Main Category</label>
                             <select ref = "userInput" required className="form-control" value ={this.state.maincategory} onChange={this.OnChangemaincatrgory} multiple= {false}>
                               {
                                 this.state.maincategorys.map(function(product){
                                 return <option key={product} value={product} >{product}</option>;
                                 })   
                               }
                              </select>    
                           </div>
                          <br/>
                             <h1></h1>
                          <div className="texboxwidth">
                              <label htmlFor="exampleInput">Product Sub Category</label>
                                 <select ref="userInput" required className="form-control" value = {this.state.subcategory} onChange = {this.OnChangesubcategory} multiple= {false}>
                                   {
                                      this.state.subcategorys.map(function(subcategorys){
                                           
                                      return <option key ={subcategorys} value={subcategorys}>{subcategorys}</option>

                                      })
                                   }
                                   
                               </select>   
                           </div>
                          <br/>

                          <div className="texboxwidth">
                          <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Product Description</label>
                           <textarea className="form-control ${descriptionErr ? 'showError' : ''}" id="exampleFormControlTextarea1"  value={this.state.description} onChange={this.OnChangedescription} rows="5"  />
                         </div>
                         {descriptionErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{descriptionErr}</div>    
                            }  
                           </div>
                          <br/>

                          <div className="texboxwidth">
                               <label htmlFor="exampleInput">Price</label>
                               <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                      <span className="input-group-text">$</span>
                                  </div>
                                  <input pattern ='^[0-9]{0,5}' type="text" className="form-control ${priceErr ? 'showError' : ''}" value={this.state.price}  onChange={this.OnChangeprice} aria-label="Amount (to the nearest dollar)" />
                                  <div className="input-group-append">
                                          <span className="input-group-text">.00</span>
                                   </div>
                                   {priceErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{priceErr}</div>    
                                  }  
                                 </div>
                          </div>
                          <br/>

                          <div className="texboxwidth">
                          <label htmlFor="exampleInput">Quantity</label> <br/>                              
                              <input  className="quantity" name="quantity" value = {this.state.quantity} onChange={(e)=>this.OnChangequantity(e)} type="number"/>
                          </div>
                          <br/>
                           <div className="texboxwidth">
                               <label htmlFor="exampleInput">Discount</label>
                                 <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                               <input pattern ='^[0-9]{0,2}' type="text" id="exampleInput" className="form-control" value ={this.state.discount} onChange={this.OnChangediscount} placeholder=" Enter Discount" />
                                   <div className="input-group-append">
                                          <span className="input-group-text">%</span>
                                   </div>
                                  </div>
                                  </div>
                          </div>
                          <br/>

                          <div className="texboxwidth">
                          <label htmlFor="exampleInput">Image</label>
                           <input type="file" className="form-control-file ${imageErr ? 'showError' : ''}" id="exampleFormControlFile1"  onChange={(e)=>this.OnChangeImage(e)} />
                           {imageErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{imageErr}</div>    
                                  }  
                          </div>
                          <br/>
                          
                          <div className="texboxwidth">
                              <label htmlFor="exampleInput">Stock Manager Id</label>
                             <input type="text" id="exampleInput" className="form-control" value={this.state.stockmanagerid} onChange={this.OnChangestockmanagerid} placeholder="Stock Manager Id" />
                           </div>
                          <br/>

                          <div className="text-center mt-4">
                            <MDBBtn color="#5e35b1 deep-purple darken-1" type="submit">
                              Add Product
                            </MDBBtn>
                        </div>

                   </div>
              </div>
           </form>
      </div>
    )
  }
}

export default AddProduct
