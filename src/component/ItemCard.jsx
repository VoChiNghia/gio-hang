import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

export default class ItemCard extends Component {
  render() {
    const {item,handleClick} = this.props
   
    return (

            <>
               <div className="card mb-3 " >
                <img src={item.image} className="card-img-top" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id}`} alt />
                <div className="card-body">
                    <h5 className="card-title text-dark">{item.name}</h5>
                    <p className="card-text text-dark">{item.price}$</p>
                    <button href="" className="btn btn-dark" onClick={() => handleClick(item)}>Thêm Vào Giỏ Hàng</button>
                </div>
            </div>
               
            <Modal handleClick={handleClick} itemModal={item}/>
                
            </>
      

    )
  }
}

