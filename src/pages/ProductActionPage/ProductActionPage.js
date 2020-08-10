import React, { Component } from 'react';
import callApi from './../../utils/apiCaller'
import { Link } from 'react-router-dom';


class ProductActionPage extends Component {

    constructor(props){
      super(props)
      this.state = {
        id: '',
        txtName: '',
        txtPrice: '',
        chkbStatus: ''
      }
    }

    onChange = e =>{
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }

    onSave = e =>{
        e.preventDefault();
        var {id, txtName, txtPrice, chkbStatus} = this.state
        var {history} = this.props
        if(id){
          callApi(`products/${id}`, "PUT", {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
          }).then(res =>{
            history.goBack()
          })
        }
        else(
          callApi('products',"POST", {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }).then(res => {
            history.goBack()
        })
        )
    }

    componentDidMount(){
      var {match} = this.props;
      if(match){
      var id = match.params.id;
      callApi(`products/${id}`, "GET", null).then(res =>{
        var data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status
        })
      })
      }
    }

    render() {
        var {txtPrice, txtName, chkbStatus} = this.state
        return (
            <div className="col-xs-6 col-lg-6 col-md-6 col-sm-6">
                <form onSubmit={this.onSave}>
                <div className="form-group">
                  <label>Ten San Pham</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="txtName"
                    value={txtName}
                    onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                  <label>Gia San Pham</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="txtPrice"
                    value={txtPrice}
                    onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                  <label>Trang Thai</label>
                </div>
                <div className="form-check mb-2">
                  <label className="form-check-label">
                    <input 
                      type="checkbox" 
                      className="form-check-input"
                      name="chkbStatus"
                      value={chkbStatus}
                        onChange={this.onChange}
                        checked={chkbStatus}
                      />
                    Con Hang
                  </label>
                </div>
                <Link to='/product-list' className="btn btn-danger mr-3" >
                    Tro Lai
                </Link>
                  <button type="submit" className="btn btn-primary">Luu Lai</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;
