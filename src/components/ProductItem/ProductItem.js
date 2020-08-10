import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ProductItem extends Component {

    onDelete = id =>{
        if(confirm("Are you sure about that?")){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }

            render() {
                let {product, index} = this.props;
                let statusName = product.status ? "Con Hang" : "Het Hang";
                let statusClass = product.status ? "success" : "warning"
                return (
                    <tr>
                        <td >{index +1}</td>
                        <td >{product.id}</td>
                        <td >{product.name}</td>
                        <td >{product.price}</td>
                        <td className="text-center">
                            <span className={`badge badge-${statusClass}`}>{statusName}</span>
                        </td>
                        <td className="text-center">
                            <Link to={`product/${product.id}/edit`} className="btn btn-success" >Sua</Link>
                                                &nbsp;
                        <button type="button" className="btn btn-danger" onClick={ () => this.onDelete(product.id)}>Xoa</button>
                        </td>
                    </tr>
                );
            }
        }

export default ProductItem;
