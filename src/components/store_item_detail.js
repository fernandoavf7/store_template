import React, { Component } from 'react';
import './../App.css';

class StoreItem extends Component {
    state = {
        open: true,
      };
    render() {
        const name = this.props.itemName;
        const image = this.props.itemImage;
        const value = this.props.itemValue;
        //const 
        return (
            <div className="col-xs-12 col-sm-4 col-md-2" style={{marginTop:'10px'}}>        
                <div className="card">
                    <img src={image} className="card-img-top img-fluid" alt="..." height='200px' />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Price: </b>{value}</li>
                    </ul>
                </div>

            


            </div>

        );
    }
}

export default StoreItem;