import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'
import {connect} from 'react-redux'
import callApi from './../../utils/apiCaller'
import {Link} from 'react-router-dom'


class ProductListPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            products : [],
        }
    }
    componentDidMount(){
        callApi('products', 'GET', null).then(res =>{
            this.setState({
                products: res.data
            })
        })
    }
    render() {
        var {products} = this.state;
        return (
            <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">
                <Link to='/product/add' className="btn btn-primary mb-2">Them san pham</Link>
                <div className="card">
                    <div className="card-header">
                        Danh sach san pham
                    </div>
                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList>
                </div>
            </div>
        );
    }
    showProducts(products){
        let result = null;
        if(products.length >0){
            result = products.map((product, index) =>{
                return <ProductItem 
                    key={index}
                    product={product}
                    index={index}
                />
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps,null)(ProductListPage);