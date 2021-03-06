import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class Profile extends Component {

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
            //console.log(this.state.stores);
        });
    }

    render() {
        let stores = this.state.stores;
        return (
            <div>
                <h1>Profile</h1>
                {stores.length === 0 ? <CircularProgress size={50} /> : stores.map(store => (<h4 key={store.id_store}>{store.name}</h4>))}
            </div>
        );
    }
}

export default Profile;