import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const {itemModal} = this.props
    return (
        <div class="modal fade" id={`exampleModal${itemModal.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">{itemModal.name}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div className="card mb-3 ">
                <img src={itemModal.image} className="card-img-top w-75" alt />
              
                    <div className="px-2">
                    <h5 className="card-title text-dark">{itemModal.name}</h5>
                    <p className="card-text text-dark">{itemModal.price}$</p>
                    <p className="card-text text-dark">{itemModal.description}</p>
                    </div>
                    
               
            </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Thêm vào Giỏ hàng</button>
            </div>
            </div>
        </div>
        </div>
    )
  }
}
