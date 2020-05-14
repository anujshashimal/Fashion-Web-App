import React, { Component } from 'react'
import women from "../../img/women.jpg";
import  './Styles/style.css';
import  './Styles/AddCategory.css';
import axios from "axios";
export class Addcategory extends Component {

    constructor(props) {
        super(props);
        this.state={
            CategoryID:"",
            CategoryName:"",
            MainCategory:"",
            Admin:"",
            SubCategoryNames:[]

        }
    }
    componentDidUpdate() {
        axios.get('http://localhost:5000/category/findCategory/men/Vishaka')
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        SubCategoryNames : response.data.map(storeManager=>storeManager)




                    })



                }
            })
    }
    componentDidMount() {
        axios.get('http://localhost:5000/category/findCategory/men/Vishaka')
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        SubCategoryNames : response.data.map(storeManager=>storeManager)





                    })



                }
            })
    }

    deleteCategory =(e,categoryID)=>{

        console.log(categoryID);

        e.preventDefault();
        axios.delete('http://localhost:5000/category/deletecategory/'+categoryID)
            .then(res=>console.log(res.data));

    }


    saveCategory =(e)=> {
        e.preventDefault();

        this.state.CategoryName = this.refs.SubCategory.value;
        this.state.MainCategory = this.refs.MainCategory.value;
        this.state.Admin = this.refs.AdminName.value;

        if(this.state.CategoryName != "" ){
            if(this.state.MainCategory !=""){
                if(this.state.Admin != ""){

                    axios.get('http://localhost:5000/categoryID/CategoryID')
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


                            axios.post('http://localhost:5000/category/addCategory',Category)
                                .then(res=>console.log(res.data));

                            const CategoryID ={
                                "Category_ID":this.state.CategoryID+1

                            }
                            axios.post('http://localhost:5000/categoryID/updateCategoryID',CategoryID)
                                .then(res=>console.log(res.data));



                            this.setState({
                                CategoryID: "",
                                CategoryName: "",
                                MainCategory: "",
                                Admin: ""

                            } )

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
            <div><br/>
                <div className="conatainer">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="row">
                                <div className="col-5">

                                    <div class="row" id="row">
                                        <h4 id="section1"><strong className="head">Sub Categories of Women</strong></h4>
                                            <div class="card example-1 scrollbar-ripe-malinka" >
                                                <div class="card-body">




                                                    {this.state.SubCategoryNames.map(function(SubCategoryNames){

                                                        return <li>

                                                            <div className="chip chip-lg" id="tag">
                                                                {SubCategoryNames.CategoryName}
                                                                <i className="close fas fa-trash-alt" id="delete"
                                                                   onClick={(e) =>this.deleteCategory(e,SubCategoryNames.Category_ID)} ></i>

                                                                <i className="close fas far fa-edit" id="delete"></i>
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
                                    <div className="card">
                                        <div className="card-body" id="row">
                                            <form ref="myform">
                                                <p className="h4 text-center py-4" id="topic">Sub Category Adding </p>

                                                <div className="md-form">
                                                    <i className="fa fa-id-card prefix grey-text"></i>
                                                    <input type="text" id="materialFormCardEmailEx" className="form-control" placeholder="Sub Category" ref="SubCategory" name="SubCategory"/>
                                                    {/*<label for="materialFormCardEmailEx" class="font-weight-light" id="placeholder">Enter  email</label>*/}
                                                </div>

                                                <div className="md-form">
                                                    <i className="fa fa-american-sign-language-interpreting prefix grey-text"></i>
                                                    <input type="text" id="materialFormCardPasswordEx" className="form-control" placeholder="Main Category" ref="MainCategory" name="MainCategory"/>
                                                    {/*<label for="materialFormCardPasswordEx" class="font-weight-light" id="placeholder">password</label>*/}
                                                </div>
                                                <div className="md-form">
                                                    <i className="fa fa-user prefix grey-text"></i>
                                                    <input type="text" id="materialFormCardNameEx" className="form-control" placeholder="Admin Name" ref="AdminName" name="AdminName"/>
                                                    {/*<label for="materialFormCardNameEx" class="font-weight-light" id="placeholder">Stock Manager Name</label>*/}
                                                </div>


                                                <div className="text-center py-4 mt-3">

                                                    <button className="btn" id="btn" type="submit"
                                                            onClick={(e) => this.saveCategory(e)}>Save
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
                </div>
            </div>
        )
    }
}

export default Addcategory




