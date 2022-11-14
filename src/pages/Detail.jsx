import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/data'
export default class Detail extends Component {
  render() {

    const url = window.location
    const pathName = url.pathname.split('/')
    const id = pathName[2]
    

    const itemDetail = data.find(i => i.id === Number(id))
    
    return (
      <div className="detail">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="detail-img">
                    <img src={itemDetail.image} alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="detail-info">
                        <h1>{itemDetail.name}</h1>
                        <p>{itemDetail.price}$</p>
                        <p>{itemDetail.description}</p> 
                        <p>So Luong: {itemDetail.quantity}</p>  
                    </div>    
                </div>
            </div>
        </div>
      </div>
    )
  }
}
