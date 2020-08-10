import React, { Component } from 'react';

class ProductItem extends Component {

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
                            <button type="button" className="btn btn-success">Sua</button>
                                                &nbsp;
                        <button type="button" className="btn btn-danger">Xoa</button>
                        </td>
                    </tr>
                );
            }
        }

export default ProductItem;
