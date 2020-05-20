import React,{Component} from "react";
import axios from 'axios';
import Hea from '../CommonComponents/header'
import Foo from '../CommonComponents/footer'
import {MDBBtn, MDBCloseIcon, MDBTable, MDBTableHead,MDBTableBody} from "mdbreact";
import {removeItem} from "../../Actions/addActions";
import img from "../../img/sample1.jpg";
import {connect} from "react-redux";
import {removeItemFromWathList} from "../../Actions/addWatchList";
const queryString = require('query-string');

class WatchListItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID : '',
            avaliable: '',
            product_ID:'',
            price: '',
            name:'',
            image:'',
            discount:'',
            Items : [],
            username :'',
            productid:''

        }
    console.log(props)

    }


    componentDidMount() {

        var values = queryString.parse(this.props.location.search)
        console.log(this.props.location.search)
        console.log(values.username)
        this.setState({
            username: values.username,
        })

            const data ={
                userID : this.state.userID,
                avaliable: this.state.avaliable,
                product_ID:this.state.productID,
                price: this.state.price,
                name:this.state.name,
                image:this.state.image,
                discount:this.state.discount

            }
            try{
                const responce = axios({
                    method: 'get',
                    url: 'http://localhost:5000/cart/findWatchlistItems/' + values.username,
                    data: data,
                }).then(response => {
                    this.setState({
                        Items: response.data.map(Items=>Items)
                    })
                })
            }catch(ex){

            }
        }



        render() {

            const addToCartForPayment = () => {

                // Object.keys(this.state.Items).forEach( function (item) {
                //     console.log(item)
                //     this.props.basketProps.items.push(this.state.Items[item])
                    this.props.basketProps.backetNumbers = this.props.basketProps.backetNumbers+1
                    this.props.basketProps.cartCost = this.props.watchListProps.cartCost
                //     console.log(this.props.basketProps)
                // })
                console.log('hello')


                this.state.Items.map((item, index) => {
                    this.props.basketProps.items.push(this.state.Items[index])
                    this.props.basketProps.backetNumbers = this.props.basketProps.backetNumbers+1
                    this.props.basketProps.cartCost = this.props.watchListProps.cartCost

                })
            }

            const  removeItemFromWatch = (id) =>{
                const responce = axios({
                    method: 'delete',
                    url: 'http://localhost:5000/cart/deleteItem/' + id,
                    data: data,
                })
            }

            let filteredArr = [];
            filteredArr = this.state.Items.map( (product, index) => {
                console.log(product)

                return(

                    <tr>
                        <button type="button" className="close" aria-label="Close" onClick={() => removeItemFromWatch(product._id)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        {/*{this.setState({productid: product._id})}*/}
                        <img src={product.image} alt="Product" style={{height: "100px" }} />
                        <td className="tabletext">{product.name}</td>
                        <td className="tabletext">
                            {/*<i onClick={() =>productQuntity("DECREASE", product.productID, product.price)} className="fas fa-angle-left"></i>*/}
                            {product.qty}
                            {/*<i onClick={() =>productQuntity("INCREASE",product.productID,product.price)} className="fas fa-angle-right"></i>*/}
                        </td>
                        <td className="tabletext">{product.avaliable}</td>
                        <td className="tabletext">{product.discount}</td>
                        <td className="tabletext">{product.price}</td>
                    </tr>
                )})




            const data = () =>{
            return(
                    <tr>
                        {/*<button type="button" className="close" aria-label="Close" onClick={() => removeItem(index, this.state.price)}>*/}
                        {/*    <span aria-hidden="true">&times;</span>*/}
                        {/*</button>*/}
                        <img src={this.state.image} alt="Product" style={{height: "100px" }} />
                        <td className="tabletext">{this.state.name}</td>
                        <td className="tabletext">
                            {/*<i onClick={() =>productQuntity("DECREASE", product.productID, product.price)} className="fas fa-angle-left"></i>*/}
                            {this.state.avaliable}
                            {/*<i onClick={() =>productQuntity("INCREASE",product.productID,product.price)} className="fas fa-angle-right"></i>*/}
                        </td>
                        <td className="tabletext">{this.state.avaliable}</td>
                        <td className="tabletext">{this.state.discount}</td>
                        <td className="tabletext">{this.state.price}</td>
                    </tr>
                )
            }
            return (
                <div>
                    {/*{*/}
                    {/*filteredArr.map( (product, index) => {*/}

                    {/*    this.state.userID = product.user,*/}
                    {/*        this.state.avaliable = product.avaliable,*/}
                    {/*        this.state.Product_ID = product.productID,*/}
                    {/*        this.state.price = product.price,*/}
                    {/*        this.state.name = product.name,*/}
                    {/*        this.state.image = product.image,*/}
                    {/*        this.state.discount = product.discount*/}
                    {/*})}*/}
                    <Hea username={this.state.username}/>
                    <div className='container'>
                        <header >
                            <div className='product-header'>
                                Cart Page
                            </div>
                            <MDBTable>
                                <MDBTableHead color="red darken-3" textWhite>
                                    <tr>
                                        <th className="tabletext">Image</th>
                                        <th className="tabletext">Name</th>
                                        <th className="tabletext">Quantity</th>
                                        <th className="tabletext">Avaliable</th>
                                        <th className="tabletext">Discount</th>
                                        <th className="tabletext">Price</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {filteredArr}

                                </MDBTableBody>
                            </MDBTable>
                            <div className='basketTotalContainer'>
                                <hr/>
                                <h4 className='basketTotalTitle'>Total Amount to Pay: </h4>
                                <button type="button" className='btn red darken-3' onClick={() => addToCartForPayment()}>
                                    {/*<span aria-hidden="true">&times;</span>*/}
                                </button>

                                {/*<h4 className='basketTotal'>Rs. {basketProps.cartCost},00 </h4>*/}
                                {/*<Link type="button" className="btn red darken-3" onClick={() => addToCartForPayment()} >Add to Cart*/}
                                {/*</Link>*/}
                            </div>
                        </header>
                    </div>
                    <Foo />
                </div>
            )
        }


}
const mapStateToPropss = state => ({
    watchListProps : state.watchListState,
    basketProps : state.basketState,
})

export default connect(mapStateToPropss, {removeItemFromWathList})(WatchListItems);
