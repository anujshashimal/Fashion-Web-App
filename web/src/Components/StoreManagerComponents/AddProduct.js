import React, { Component } from 'react'
import Footer from '../CommonComponents/footer';
import { MDBContainer, MDBInputGroup ,MDBBtn} from "mdbreact";
import './css/Product.css';
import '../UserComponents/LoginRegister.css'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import swal from 'sweetalert';
const queryString = require('query-string');




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
          categorys : [],
          description : '',  
          maincategory : 'Men',
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

  //  var values = queryString.parse(this.props.location.search)
  //  console.log(values.storenamagerusername)
  //  console.log(values.storemanagerid)

     this.setState({
      stockmanagerid : this.props.match.params.storemanagerid,
     
       })


      axios.get('http://100.24.72.11:5000/category/:id')
      .then(response=>{
        if(response.data.length>0){
          this.setState({
            categorys  : response.data.map(categorys =>categorys),
           // maincategorys : response.data.map(product=>product.MainCategory) ,
           // maincategory : response.data[0].MainCategory,
           // subcategorys :  response.data.map(product=>product.CategoryName),
           // subcategory : response.data[0].CategoryName
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

      axios.post('http://100.24.72.11:5000/products/add',formdata)
       .then(res=>console.log(res.data));

    this.setState({
        description : '',  
        price  : '',
        quantity : 0,
        discount : '',
        image  : null,
       
    })

        // window.location = '/';
       // alert('Product Details Added Successfully')
        NotificationManager.success('Product Added Successfully', 'Success');
  } 

   }
    
   /// Form  Validation Section

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
    else if(description.length < 2)    
   {
        formIsValid = false;    
        formErrors["descriptionErr"] = "Description characters id more than 2 required."; 

   }
   if (image === null) {
    formIsValid = false;    
    formErrors["imageErr"] = "Please select image"; 
  }
  if(quantity < 0)
  {
    formIsValid = false;    
    formErrors["quantityErr"] = "Please Enter Valid quantity"; 
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
                   <div className="jumbotron" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",fontSize:"medium"}}>

                         <div className="texboxwidth">
                              <label htmlFor="exampleInput">Product Main Category</label>
                              <div className="icons">
                              <i class="fas fa-list-ol fa-lg"></i>
                              </div>
                              <select ref = "userInput" required className="form-control" value ={this.state.maincategory} onChange={this.OnChangemaincatrgory} multiple= {false}>
                                <option key ="Men" value="Men">Men</option>
                                <option key ="Women" value="Women">Women</option>
                                <option key ="Kid" value="Kids">Kids</option>
                                <option key ="Other" value="Other">Other</option>
                              </select>   
                           </div>
                          <br/>
                             <h1></h1>
                          <div className="texboxwidth">
                              <label htmlFor="exampleInput">Product Sub Category</label> <b style={{ color: "red",marginLeft:"1%"}}>[Please select a subcategory]</b>
                              <div className="icons">
                              <i class="fas fa-list fa-lg"></i>
                              </div>
                                 <select ref="userInput" required className="form-control" value = {this.state.subcategory} onChange = {this.OnChangesubcategory} multiple= {false}>
                                   {
                                      this.state.categorys.filter(categorys => categorys.MainCategory === this.state.maincategory).map(function(categorys){
                                           
                                      return <option key ={categorys.CategoryName} value={categorys.CategoryName}>{categorys.CategoryName}</option>

                                      })
                                   }
                                   
                               </select>   
                           </div>
                          <br/>

                          <div className="texboxwidth">
                          <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Product Description</label>
                            <div className="icons">
                            <i class="fas fa-pen fa-lg"></i>
                            </div>
                           <textarea className="form-control ${descriptionErr ? 'showError' : ''}" id="exampleFormControlTextarea1"  value={this.state.description} onChange={this.OnChangedescription} rows="5"  />
                         </div>
                         {descriptionErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{descriptionErr}</div>    
                            }  
                           </div>
                          <br/>

                          <div className="texboxwidth">
                               <label htmlFor="exampleInput">Price</label>
                               <div className="icons">
                               <i class="fas fa-dollar-sign fa-lg"></i>
                                </div>
                               <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                     
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
                          <div className="icons">
                             <i class="fa">&#xf067;</i>
                                </div>                            
                              <input  className="quantity ${quantityErr ? 'showError' : ''}" name="quantity" value = {this.state.quantity} onChange={(e)=>this.OnChangequantity(e)} type="number"/>
                               <div>
                                   {quantityErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{quantityErr}</div>    
                                  }  
                                 </div>
                          </div>
                          <br/>
                           <div className="texboxwidth">
                               <label htmlFor="exampleInput">Discount</label>
                               <div className="icons">
                                <i class="fas fa-percent"></i>
                               </div>
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
                          <div className="icons">
                          <i class="fas fa-image fa-lg"></i>
                                </div>
                           <input type="file" className="form-control-file ${imageErr ? 'showError' : ''}" id="exampleFormControlFile1"  onChange={(e)=>this.OnChangeImage(e)} />
                           {imageErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{imageErr}</div>    
                                  }  
                          </div>
                          <br/>
                          
                          <div className="texboxwidth">
                              <label htmlFor="exampleInput">Stock Manager Id</label>
                              <div className="icons">
                                 <i class="fas fa-id-badge fa-lg"></i>
                                </div>
                             <input type="text" id="exampleInput" className="form-control" value={this.state.stockmanagerid} onChange={this.OnChangestockmanagerid}  disabled/>
                           </div>
                          <br/>

                          <div className="text-center mt-4">
                            <MDBBtn color="#c62828 red darken-3" type="submit">
                              Add Product
                            </MDBBtn>
                        </div>

                   </div>
              </div>
           </form>
           
           <NotificationContainer/>
      </div>
    )
  }
}

export default AddProduct
