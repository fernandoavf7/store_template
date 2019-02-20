import React, { Component } from 'react';
import StoreItem from './store_item';
import { Link } from 'react-router-dom';

const list = [
    { itemId: 1, itemName: "Shampoo", itemImage: "https://farmacityar.vteximg.com.br/arquivos/ids/157842-1000-1000/161080_shampoo-arcilla-extraordinaria-x-400-ml_imagen-1.jpg?v=636670310283370000", itemValue: "$ 4.500" },
    { itemId: 2, itemName: "Alimento Perro", itemImage: "https://dojiw2m9tvv09.cloudfront.net/15704/product/alimento-perro-adulto-pro-plan-d_nq_np_17885-mec20144415382_082014-f7492.jpg", itemValue: "$ 25.800" },
    { itemId: 3, itemName: "Alimento Perro", itemImage: "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/245023-1000-1000/7703616224039-1.jpg?v=636474076103900000", itemValue: "$ 16.500" },
    { itemId: 4, itemName: "Alimento Perro", itemImage: "https://www.heb.com.mx/media/catalog/product/cache/20/image/d954a60aa48ef57022b0eb878e93bc1f/a/l/alimento-duo-para-perro-12kg-12-kg442768_x1.jpg", itemValue: "$ 15.500" },
    { itemId: 5, itemName: "Alimento Perro", itemImage: "https://images.lider.cl/wmtcl?source=url%5Bfile:/productos/294083a.jpg%5D&viewport=color%5Bwhite%5D,height%5B1000%5D,seed%5B1526473836%5D,vsize%5B497%5D,width%5B1000%5D,x%5B0%5D,y%5B0%5D&sink", itemValue: "$ 42.500" },
]

class Home extends Component {

    render() {
        return (
            <div>
                <br></br>
                <div className="container">

                    <div className="form-group row">                       
                        {list.map(item => (<Link to={`/store_item/${item.itemId}`}><StoreItem onClick={this.renderTest} key={item.itemId} itemImage={item.itemImage} itemValue={item.itemValue} itemName={item.itemName} /></Link>))}
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;