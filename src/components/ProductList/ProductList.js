
import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="card-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Ma</th>
                            <th className="text-center">Ten</th>
                            <th className="text-center">Gia</th>
                            <th className="text-center">Trang Thai</th>
                            <th className="text-center">Hanh Dong</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductList;

