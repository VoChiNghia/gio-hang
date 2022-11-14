import React, { Component } from 'react'
import ItemCard from '../component/ItemCard'
import TableCart from '../component/TableCart'
import data from '../data/data'
export default class Home extends Component {
    state = {
        cartItem: [

        ]
    }

    handleClick = (item) => {
      item = {...item,soLuong:1}
       let arrItem = this.state.cartItem

       const sp = arrItem.find((i) => i.id === item.id) 
       if(sp){
          sp.soLuong += 1
       }else{
        arrItem.push(item)
       }


      
      this.setState({cartItem: arrItem})
      
    }

    xoaSanPham = (id) => {
      let arrItem = this.state.cartItem
      const newArrItem = arrItem.filter(arrItem => arrItem.id !== id)

      this.setState({cartItem: newArrItem})
    }
  render() {
    return (
      <div className="home">
         <div className="container">
            <h1 className="text-center p-5">Shoes Shop</h1>
              <TableCart xoaSanPham={this.xoaSanPham} item={this.state.cartItem}/>
            <div className="row">
                {
                    data.map((item, i) =>(
                        <div className="col-4" key={i}>
                    <ItemCard item={item} handleClick={this.handleClick}/>
                       </div>
                    ))
                }
            </div>
         </div>
      </div>
    )
  }
}
