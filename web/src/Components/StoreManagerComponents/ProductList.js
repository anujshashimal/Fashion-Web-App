import React, { Component } from 'react'
import  {Link}  from  'react-router-dom'
import axios from 'axios'
import editimage from './edit.png'
import deleteimage from './delete.png'

const Product = props =>(
      <tr>
        <td className="tabletext">{props.product.description}</td>
        <td className="tabletext">{props.product.maincategory}</td>
        <td className="tabletext">{props.product.subcategory}</td>
        <td className="tabletext">{props.product.price}</td>
        <td className="tabletext">{props.product.quantity}</td>
        <td className="tabletext">{props.product.discount}</td>
        <td className="tabletext"><img src={'http://localhost:5000/uploads/'+props.product.image} alt="Product" style={{width: "25%" , marginTop: "2.5%" , marginBottom: "2.5%" }} /></td>
        <td className="tabletext">{props.product.stockmanagerid}</td>
        <td>
         <Link  to= {'/Product/edit/'+props.product.productid}><button  className ="productlistbuttoncolor"><img  src={editimage} alt="logo"/></button></Link>
        </td>  
        <td>
         <button className ="productlistbuttoncolor"><img  src={deleteimage} alt="logo" onClick ={()=>{if(window.confirm('Delete the Item?')){props.deletedproduct(props.product.productid)}}}/></button>
        </td>
      </tr>

)


export class ProductList extends Component {
  
    constructor(props)
    {   super(props)

        this.state = {

           Products : [],
        }

        this.deleteproduct = this.deleteproduct.bind(this);
    }
 
   componentDidMount()
   {
      axios.get('http://localhost:5000/products/find/'+this.props.match.params.id)
      .then(response =>{
          this.setState({Products : response.data})
      }).catch(error =>{
         console.log(error)
      });
      

   }    
   
  deleteproduct(product_id)
  {
    axios.delete('http://localhost:5000/products/delete/'+product_id)
    .then(res=>console.log(res.data))
    this.setState({
      Products : this.state.Products.filter(product=>product.productid != product_id)
    })

  }

  

   ProductList()
   {
      return this.state.Products.map(currentproduct=>{
        return <Product product ={currentproduct}  key={currentproduct.productid} deletedproduct ={this.deleteproduct} ></Product>

      })

   }

  render() {



    return (
      <div className="jumbotron">
        <h3 className="header">Product List</h3>
        <br></br>
           <div className="jumbotron" >
             <table id="dtBasicExample" className="table table-striped table-bordered table-responsive-md" cellSpacing="0" width="100%">
              <thead className="thead-light">
                <tr>
                  <th className="tabletext">Description</th>
                  <th className="tabletext">MainCategory</th>
                  <th className="tabletext">SubCategory</th>
                  <th className="tabletext">Price</th>
                  <th className="tabletext">Quantity</th>
                  <th className="tabletext">Discount</th>
                  <th className="tabletext">Image</th>
                  <th className="tabletext">Stock Manager Id</th>
                  <th className="tabletext">Edit</th>
                  <th className="tabletext">Delete</th>
                </tr>
               </thead>
              <tbody>
              {this.ProductList()}
             </tbody>
            </table>
          </div>  
        
      </div>
    )
  }
}

export default ProductList
