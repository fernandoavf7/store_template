import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { STORES_LIST } from '../constants/constants_reducer';


class GetStores extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stores: []
        };

    }

    componentDidMount() {
        this.getStores();
    }

    getStores = () => {
        // const api_weather = getUrlWeatherByCity(this.state.city);
        const url = "http://localhost:56910/api/stores";

        //trae todo el resultado (body, headers)
        fetch(url).then(resolve => {
            //crea una nueva promise transformando al json que se necesita
            return resolve.json();
        }).then(data => {
            this.setState({
                stores: data
            });
            this.props.saveStores(data);
        });
    }

  /*  render() {
        let stores = this.state.stores;
        return (
            <div>
                <h1>Profile</h1>
                {stores.length === 0 ? <CircularProgress size={50} /> : stores.map(store => (<h4 key={store.id_store}>{store.name}</h4>))}
            </div>
        );
    }*/
}

const mapStateToProps = (state, ownProps) => {
    return {
      module_stores: state.module_stores
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      saveStores: function (args) {
        dispatch({ type: STORES_LIST, args });
      }
    }
  }
  
  const GetStoresContainer = connect(mapStateToProps, mapDispatchToProps)(GetStores)
  export default (GetStoresContainer);