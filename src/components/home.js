import React, { Component } from 'react';
import StoreItem from './store_item';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GetProducts from './../services/get_products';
import { CircularProgress, Switch, Button, FormControl, Grid } from '@material-ui/core';
import Switches from './switch';
import Checkboxes from './checkboxes';
import Pagination from './pagination';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0,
            currentPage: 1,
            lastPage: 5,
            icon: 0
        };
    }

    componentDidMount() {

    }

    changeIcon(icon) {
        this.setState({
            icon: icon
        });
    }


    render() {

        let products = [];
        products = this.props.module_store;
        return (
            <div>

                {this.state.icon === 0 ?
                    <button className="btn btn-primary" onClick={()=>this.changeIcon(1)}><FaSortAmountDown /></button>
                    :
                    <button className="btn btn-danger" onClick={()=>this.changeIcon(0)}><FaSortAmountDown /></button>
                }


                <Pagination lastPage={10} />
                <div className="container">
                    <div className="form-group row">

                        {products != null ? products.map(item => (
                            <Link key={item.id_product} to={`/store_item/${item.id_product}`}>
                                <StoreItem key={item.id_product} itemImage={item.image} itemValue={item.value} itemName={item.name} />
                            </Link>)) :

                            <Grid container spacing={8} justify="center" style={{ marginTop: '5px' }}>
                                <Grid item>
                                    <CircularProgress size={50} />
                                </Grid>
                            </Grid>

                        }

                    </div>
                </div>
                <Pagination lastPage={10} />
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