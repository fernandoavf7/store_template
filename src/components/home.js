import React, { Component } from 'react';
import StoreItem from './store_item';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GetProducts from './../services/get_products';
import { CircularProgress, Switch } from '@material-ui/core';
import Switches from './switch';
import Checkboxes from './checkboxes';



class Home extends Component {

    render() {
        let products = [];
        products = this.props.module_products;
        return (
            <div>
                <GetProducts />
                <br></br>
                <div className="container">
                    <div className="form-group row">
                  
                    <Checkboxes/>
                    <Switches/>

                        {products.lenght !== 0 ? products.map(item => (
                            <Link key={item.id_product} to={`/store_item/${item.id_product}`}>
                                <StoreItem key={item.id_product} itemImage={item.image} itemValue={item.value} itemName={item.name} />
                            </Link>)) : <CircularProgress size={50} /> 
                        }

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

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default (HomeContainer);