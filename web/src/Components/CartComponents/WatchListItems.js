import React,{Component} from "react";
import axios from 'axios';
import Hea from '../CommonComponents/NavbarPage'
import Foo from '../CommonComponents/footer'
import {MDBBtn, MDBCloseIcon, MDBTable, MDBTableHead,MDBTableBody} from "mdbreact";
import {removeItem} from "../../Actions/addActions";
import img from "../../img/sample1.jpg";
import {connect} from "react-redux";
import {removeItemFromWathList} from "../../Actions/addWatchList";
import {productQuntity} from '../../Actions/ProductQuantity'
import swal from "sweetalert";
import './Styles/Style..css';

const queryString = require('query-string');

class WatchListItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: '',
            avaliable: '',
            product_ID: '',
            price: '',
            name: '',
            image: '',
            discount: '',
            Items: [],
            Items1:[],
            username: '',
            productid: ''

        }
        console.log(props)
    }

componentDidUpdate() {
    var values = queryString.parse(this.props.location.search)

    axios({
        method: 'get',
        url: 'http://100.24.72.11:5000/cart/findWatchlistItems/' + values.username,
    }).then(response => {
        this.setState({
            Items: response.data.map(Items => Items)
        })
    })

}

    componentDidMount() {

        var values = queryString.parse(this.props.location.search)
        console.log(this.props.location.search)
        console.log(values.username)
        this.setState({
            username: values.username,
        })

        const data = {
            watchID: this.state.watchID,
            avaliable: this.state.avaliable,
            product_ID: this.state.productID,
            price: this.state.price,
            name: this.state.name,
            image: this.state.image,
            discount: this.state.discount

        }
        try {
            const responce = axios({
                method: 'get',
                url: 'http://100.24.72.11:5000/findWatchlistItems/' + values.username,
                data: data,
            }).then(response => {
                this.setState({
                    Items: response.data.map(Items => Items)
                })
            })
        } catch (ex) {

        }

        this.removeItemFromWatch()

    }




    removeItemFromWatch = (id) => {
        axios({
            method: 'delete',
            url: 'http://100.24.72.11:5000/cart/deleteItem/' + id,
        })

    }

    removeItemFromWatchPage = (id) => {
        this.props.watchListProps.backetNumbers = this.props.watchListProps.backetNumbers -1
        axios({
            method: 'delete',
            url: 'http://100.24.72.11:5000/cart/deleteItem/' + id,
        })

    }

    render() {

            const addToCartForPayment = () => {

                console.log(this.props.basketProps)
                this.state.Items.map((item, index) => {
                    console.log(item)
                    item.counter = 0
                    console.log(this.props.basketProps.cartCost)
                    this.props.basketProps.items.push(item)
                    this.props.watchListProps.backetNumbers = this.props.watchListProps.backetNumbers -1
                    this.removeItemFromWatch(item._id)
                })
            }
            let arr = [];
        arr = this.state.Items.reduce((acc, current) => {
            const x = acc.find(item => item.productID === current.productID);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, [])
                arr = arr.map( (product, index) => {
                console.log(product)
                return(

                    <tr>
                        <button type="button" className="close" aria-label="Close" onClick={() => this.removeItemFromWatchPage(product._id)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <img src={product.image} alt="Product" style={{height: "100px" }} />
                        <td className="tabletext">{product.name}</td>
                        <td className="tabletext">
                            {product.counter}&nbsp;&nbsp;
                        </td>
                        <td className="tabletext">{product.avaliable}</td>
                        <td className="tabletext">{product.discount} %</td>
                        <td className="tabletext">{product.price}</td>
                    </tr>
                )})




            const data = () =>{
            return(
                    <tr>
                        <img src={this.state.image} alt="Product" style={{height: "100px" }} />
                        <td className="tabletext">{this.state.name}</td>
                        <td className="tabletext">
                            {this.state.counter}
                        </td>
                        <td className="tabletext">{this.state.avaliable}</td>
                        <td className="tabletext">{this.state.discount}</td>
                        <td className="tabletext">{this.state.price}</td>
                    </tr>
                )
            }
            return (
                <div>
                    <Hea username={this.state.username}/>
                    <div className='container'>
                        <header >
                            <div className='product-header'>
                                Watch-list Items
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
                                    {arr}
                                </MDBTableBody>
                            </MDBTable>
                                <hr/>
                            <div className='basketTotalTitle'>
                                <button type="button" className='btn red lighten-2 btn-block' onClick={() => {addToCartForPayment() ; swal({
                                    title: "Your all item is added to the cart",
                                    icon: "warning",
                                    dangerMode: true,
                                })}}> Add Product To Cart
                                </button>
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

export default connect(mapStateToPropss, {removeItemFromWathList,productQuntity})(WatchListItems);
