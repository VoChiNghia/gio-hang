import React, { Component } from 'react'

export default class TableCart extends Component {
  render() {
    const {item,xoaSanPham} = this.props
    console.log(item)
    return (
        <div className="table">
        <thead>
            <tr>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Hình Ảnh</th>
                <th>Số Lượng</th>
                <th>Đơn Giá</th>
                <th>Thành Tiền</th>
            </tr>
        </thead>
        <tbody>
        {
          item.map((item, i) =>(
               
            <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                    <img src={item.image} width={50} height={50} alt="" />
                </td>
                <td>{item.soLuong}</td>
                <td>{item.price}$</td>
                <td>{item.soLuong * item.price}$</td>
                <td>
                    <button onClick={()=>{xoaSanPham(item.id)}}>
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
      
            ))
        }
          </tbody>
      </div>
    )
  }
}
