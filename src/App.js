import React, { Component } from 'react';
import './App.css';
import AppBar from './components/appbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StoreItem from './../src/components/store_item';


const list = [
  { itemName: "Shampoo", itemImage: "https://farmacityar.vteximg.com.br/arquivos/ids/157842-1000-1000/161080_shampoo-arcilla-extraordinaria-x-400-ml_imagen-1.jpg?v=636670310283370000", itemValue: "$ 4.500" },
  { itemName: "Alimento Perro", itemImage: "https://dojiw2m9tvv09.cloudfront.net/15704/product/alimento-perro-adulto-pro-plan-d_nq_np_17885-mec20144415382_082014-f7492.jpg", itemValue: "$ 25.800" },
  { itemName: "Alimento Perro", itemImage: "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/245023-1000-1000/7703616224039-1.jpg?v=636474076103900000", itemValue: "$ 16.500" },
  { itemName: "Alimento Perro", itemImage: "https://www.heb.com.mx/media/catalog/product/cache/20/image/d954a60aa48ef57022b0eb878e93bc1f/a/l/alimento-duo-para-perro-12kg-12-kg442768_x1.jpg", itemValue: "$ 15.500" },
  { itemName: "Alimento Perro", itemImage: "https://images.lider.cl/wmtcl?source=url%5Bfile:/productos/294083a.jpg%5D&viewport=color%5Bwhite%5D,height%5B1000%5D,seed%5B1526473836%5D,vsize%5B497%5D,width%5B1000%5D,x%5B0%5D,y%5B0%5D&sink", itemValue: "$ 42.500" },
]

class App extends Component {
  render() {

    return (
      <div className="App">
        <AppBar/>

      <br></br>
        <div className="container">
          <div className="form-group row">
            {list.map((item, index) => (<StoreItem key={index} itemImage={item.itemImage} itemValue={item.itemValue} itemName={item.itemName} />))}
          </div>

        </div>

     
      </div>
    );
  }
}


export default App;

