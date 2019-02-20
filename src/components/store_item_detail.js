import React, { Component } from 'react';
import './../App.css';
import { getCurrentUrl } from './../services/url_location';
import { list_detail } from './../constants/json';

let storeItem;
class StoreItemDetail extends Component {

    constructor() {
        super();
        let url = getCurrentUrl();
        let itemId = url.split('/')[2];


        list_detail.forEach(function (item) {
            if (item.itemId == itemId) {
                storeItem = item;
                 return;
            }
        });
        console.log(storeItem);
    }

    componentDidMount() {

    }

    render() {
        //const 
        return (
            <div className="col-xs-12 col-sm-4 col-md-2" style={{ marginTop: '10px' }}>
                <div className="card">
                    <img src={storeItem.itemImage} className="card-img-top img-fluid" alt="..." height='200px' />
                    <div className="card-body">
                        <h5 className="card-title">{storeItem.itemName}</h5>
                    </div>
                    <div className="card-footer text-muted">{storeItem.itemDescription}</div>

                </div>
            </div>

        );
    }
}

export default StoreItemDetail;