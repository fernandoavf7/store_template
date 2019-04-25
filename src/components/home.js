import React, { Component } from 'react';
import StoreItem from './store_item';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GetProducts from './../services/get_products';
import { CircularProgress, Switch, Button, FormControl, Grid } from '@material-ui/core';
import Switches from './switch';
import Checkboxes from './checkboxes';
import Pagination from './pagination';

class Home extends Component {

    componentDidMount() {

    }



    render() {

        let products = [];
        products = this.props.module_products;
        return (
            <div>


                <Pagination />
                <div className="container">
                    <div className="form-group row">

                        {products != null ? products.map(item => (
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