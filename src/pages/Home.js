import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Home() {
  const [orders,setOrders]=useState([]);
  useEffect(()=>{
    loadOrders()
  },[]);

  const loadOrders=async() =>{
    const result= await axios.get("http://localhost:8080/oms/all")
    setOrders(result.data)
  }

  const deleteOrder = async(id) =>
  {
    await axios.delete(`http://localhost:8080/oms/${id}`)
    loadOrders()
  }

  
  return (
    <div className='container'>
        <div className="py-4">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Order Id</th>
      <th scope="col">Total price</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      orders.map((order, index)=>(
      <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{order.id}</td>
        <td>{order.amount}</td>
        <td>{order.status}</td>
        <td><Link className="btn btn-primary mx-2" to={`/viewOrder/${order.id}`}>View</Link></td>
        <td><Link className="btn btn-outline-primary mx-2" to={`/editOrder/${order.id}`}>Edit</Link></td>
        <td><button className="btn btn-danger mx-2" onClick={()=>deleteOrder(order.id)}>
                  Delete</button></td>
      </tr>
      ))
    }
    
  </tbody>
</table>
</div>
    </div>
  )
}
