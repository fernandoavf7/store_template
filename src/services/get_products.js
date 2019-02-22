import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCTS_LIST } from './../constants/constants_reducer';


class GetProducts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        // const api_weather = getUrlWeatherByCity(this.state.city);
        const url = "http://localhost:56910/api/products";

        //trae todo el resultado (body, headers)
        fetch(url).then(resolve => {
            //crea una nueva promise transformando al json que se necesita
            return resolve.json();
        }).then(data => {
            this.setState({
                products: data
            });
            this.props.saveProducts(data);
        });
    }
    render() {
        return (
            <div>
                
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
    return {
      saveProducts: function (args) {
        dispatch({ type: PRODUCTS_LIST, args });
      }
    }
  }
  
  const GetProductsContainer = connect(mapStateToProps, mapDispatchToProps)(GetProducts)
  export default (GetProductsContainer);