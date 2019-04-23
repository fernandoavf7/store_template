import React, { Component } from 'react';
import './../App.css';
import { getCurrentUrl } from './../services/url_location';
import CurrencyFormat from 'react-currency-format';
import { connect } from 'react-redux';
import GetProducts from './../services/get_products';
import { CircularProgress } from '@material-ui/core';


class StoreItemDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: { id_product: 0, name: "none", value: 0, image: "", description: "lorem ipsum" }
        };
       console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
        console.log(this.props.module_products); 
    }

    openUrl(url) {
        window.open('http://' + url);
    }

    componentWillReceiveProps(nextprops){
        console.log("componentWillReceiveProps");
        console.log(nextprops);
        let url = getCurrentUrl();
        let itemId = url.split('/')[2];

        let products = [];
        products = this.props.module_products;
        if(products != null)
        products.forEach(function (item) {
            //just use ==, === doesnt work
            if (item.id_product == itemId) {
                this.setState({
                    product: item
                });
                return;
            }
        });
        console.log(this.state.product);
    }

    render() {
        //const 
        console.log("render");
        let product = this.state.product;
        return (

            <div className="col-xs-12 col-sm-4 col-md-2" style={{ marginTop: '10px' }}>
                <div className="card">

                    <img src={product.image} className="card-img-top img-fluid" alt="..." height='200px' />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                    </div>
                    <div className="card-footer text-muted">{product.description}</div>
                    <div style={{ cursor: 'pointer' }} className="card-footer" onClick={() => this.openUrl(product.url)}>{product.name}
                        <div style={{ float: 'right' }}>
                            <CurrencyFormat displayType={'text'} thousandSeparator={true} prefix={'$'} value={product.value} />
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        module_products: state.module_products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const StoreItemDetailContainer = connect(mapStateToProps, mapDispatchToProps)(StoreItemDetail)
export default (StoreItemDetailContainer);