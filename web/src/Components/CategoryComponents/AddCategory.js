import React, { Component } from 'react'
import women from "../../img/women.jpg";
import Header from '../CommonComponents/adiminHeader';
import Footer from "../CommonComponents/footer";
import  './Styles/style.css';
import  './Styles/AddCategory.css';
import axios from "axios";
import swal from 'sweetalert';
const queryString = require('query-string');


export class Addcategory extends Component {

    constructor(props) {
        super(props);
        this.state={
            CategoryID:"",
            CategoryName:"",
            MainCategory:"",
            Admin:"admin",
            SaveBtnName:"Save",
            SubCategoryNames:[]

        }

    }
    componentDidUpdate() {
        axios.get('http://167.172.155.186:5000/category/findCategory/'+this.state.MainCategory+'/'+this.state.Admin)
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        SubCategoryNames : response.data.map(storeManager=>storeManager)




                    })



                }
            })
    }
    componentDidMount() {

        var values = queryString.parse(this.props.location.search)
        // console.log(this.props.location.search)
        // console.log(values.item)
        // console.log(values.username)
        this.setState({
            MainCategory: values.mainCategory,

        })
        console.log(this.state.MainCategory);
        axios.get('http://167.172.155.186:5000/category/findCategory/'+this.state.MainCategory+'/'+this.state.Admin)
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        SubCategoryNames : response.data.map(storeManager=>storeManager)





                    })



                }
            })
    }




    saveCategory =(e)=> {
        e.preventDefault();

        this.state.CategoryName = this.refs.SubCategory.value;
        this.state.MainCategory = this.refs.MainCategory.value;
        this.state.Admin = this.refs.AdminName.value;

        if(this.state.CategoryName != "" ){
            if(this.state.MainCategory !=""){
                if(this.state.Admin != ""){

                    axios.get('http://167.172.155.186:5000/category/findCategorybyname/'+this.state.MainCategory+'/'+this.state.CategoryName)
                        .then(response=> {
                            if (response.data.length == 0) {

                                axios.get('http://167.172.155.186:5000/categoryID/CategoryID')
                                    .then(response=>{
                                        if(response.data.length>0){
                                            this.setState({
                                                CategoryID : response.data[0].Category_ID
                                            })
                                        }
                                        const Category ={
                                            "Category_ID":this.state.CategoryID,
                                            "CategoryName":this.state.CategoryName,
                                            "MainCategory":this.state.MainCategory,
                                            "Admin":this.state.Admin
                                        }


                                        axios.post('http://167.172.155.186:5000/category/addCategory',Category)
                                            .then(res=>console.log(res.data));

                                        const CategoryID ={
                                            "Category_ID":this.state.CategoryID+1

                                        }
                                        axios.post('http://167.172.155.186:5000/categoryID/updateCategoryID',CategoryID)
                                            .then(res=>console.log(res.data));



                                        this.setState({
                                            CategoryID: "",
                                            CategoryName: "",



                                        } )
                                        swal({
                                            title: "Success!",
                                            text: "You added new category!",
                                            icon: "success",
                                            button: "Done",
                                        });
                                        this.refs.myform.reset();

                                    })


                            }else{
                                swal({
                                    title: "Failed !",
                                    text: "You entered category already exist !",
                                    icon: "warning",
                                    button: "OK",
                                });
                            }
                        })


                }else{
                    this.refs.AdminName.focus();
                }

            }else{
                this.refs.MainCategory.focus();
            }

        }else{
            this.refs.SubCategory.focus();
        }


    }

    render() {
        return (
            <div>
                <Header username="admin" />
                <br/> <br/> <br/> <br/>
                <div className="conatainer">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="row">
                                <div className="col-5">

                                    <div class="row" id="row">
                                        <h4 id="section1"><strong className="head">Sub Categories of {this.state.MainCategory}</strong></h4>
                                            <div class="card example-1 scrollbar-ripe-malinka" >
                                                <div class="card-body">




                                                    {this.state.SubCategoryNames.map(function(SubCategoryNames){



                                                        return <li key={SubCategoryNames.Category_ID} value={SubCategoryNames.Category_ID}>

                                                            <div className="chip chip-lg" id="tag">
                                                                {SubCategoryNames.CategoryName}
                                                                <i className="close fas fa-trash-alt" id="delete"
                                                                   onClick={() =>{

                                                                       swal({
                                                                           title: "Do you want to remove "+SubCategoryNames.CategoryName,
                                                                           text: "Once deleted, you will not be able to recover !",
                                                                           icon: "warning",
                                                                           buttons: true,
                                                                           dangerMode: true,
                                                                       })
                                                                           .then((willDelete) => {
                                                                               if (willDelete) {
                                                                                   swal("Poof! "+SubCategoryNames.CategoryName+" has been deleted!", {
                                                                                       icon: "success",


                                                                                   });
                                                                                   axios.delete('http://167.172.155.186:5000/category/deletecategory/'+SubCategoryNames.Category_ID)
                                                                                       .then(res=>console.log(res.data));
                                                                               } else {
                                                                                   swal("Category is safe!");
                                                                               }
                                                                           });




                                                                   }} ></i>

                                                                {/*<i className="close fas far fa-edit" id="delete" onClick={()=>this.updateBt(SubCategoryNames.Category_ID,SubCategoryNames.CategoryName)}></i>*/}
                                                            </div> <br/>

                                                        </li>

                                                    })
                                                    }

                                                </div>
                                            </div>

                                    </div>


                                </div>
                                <div className="col-2"></div>
                                <div className="col-5">
                                    <div className="card" >
                                        <div className="card-body" id="row">
                                            <form ref="myform">
                                                <p className="h4 text-center py-4" id="topic">Sub Category Adding </p>

                                                <div className="md-form">
                                                    
                                                    {/*<i className="fa fa-id-card prefix grey-text" id="icon"></i>*/}
                                                    <input type="text" id="materialFormCardEmailEx" className="form-control" placeholder="Sub Category" ref="SubCategory" name="SubCategory"/>
                                                    {/*<label for="materialFormCardEmailEx" class="font-weight-light" id="placeholder">Enter  email</label>*/}
                                                </div>

                                                <div className="md-form">
                                                    {/*<i className="fa fa-american-sign-language-interpreting prefix grey-text"></i>*/}
                                                    <input type="text" id="materialFormCardPasswordEx" className="form-control" value={this.state.MainCategory} disabled="disabled" contentEditable="false" ref="MainCategory" name="MainCategory"/>
                                                    {/*<label for="materialFormCardPasswordEx" class="font-weight-light" id="placeholder">password</label>*/}
                                                </div>
                                                <div className="md-form">
                                                    {/*<i className="fa fa-user prefix grey-text"></i>*/}
                                                    <input type="text" id="materialFormCardNameEx" className="form-control" value={this.state.Admin} disabled="disabled" ref="AdminName" name="AdminName"/>
                                                    {/*<label for="materialFormCardNameEx" class="font-weight-light" id="placeholder">Stock Manager Name</label>*/}
                                                </div>


                                                <div className="text-center py-4 mt-3">

                                                    <button className="btn" id="btn" type="submit"
                                                            onClick={(e) => this.saveCategory(e)}>{this.state.SaveBtnName}
                                                    </button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div><br/><br/><br/>
<Footer/>

            </div>
        )
    }
}

export default Addcategory




