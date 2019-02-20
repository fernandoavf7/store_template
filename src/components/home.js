import React, { Component } from 'react';
import StoreItem from './store_item';
import { Link } from 'react-router-dom';


class Home extends Component {

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="form-group row">                       
                        {this.props.list.map(item => (<Link to={`/store_item/${item.itemId}`}><StoreItem onClick={this.renderTest} key={item.itemId} itemImage={item.itemImage} itemValue={item.itemValue} itemName={item.itemName} /></Link>))}
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;