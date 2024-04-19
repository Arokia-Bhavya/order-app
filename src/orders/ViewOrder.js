import React, { useState ,useEffect } from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios';

export default function ViewOrder() {
  const [order,setOrder]=useState({
    description:"",
    amount:"",
    status:""
  })
  const {id} = useParams()

  useEffect(()=>{
    loadOrder()
  },[]);
  const{description,amount,status,orderDate}=order

  const onInputChange=(e)=>
  {
    setOrder({...order,[e.target.name]:[e.target.value]})
  }
  
  const loadOrder = async () =>
  {
    const result=await axios.get(`http://localhost:8080/oms/${id}`)
    setOrder(result.data)
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">View Order</h2>
        <div className="mb-3">
            <label htmlFor="id" className="form-label">
              Id
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your id" name="id" value={id} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="orderDate" className="form-label">
              orderDate
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your orderDate" name="orderDate" value={orderDate} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">
                description
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your quantity" name="description" value={description} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="amount" className="form-label">
                Total Price
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your price" name="amount" value={amount} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="status" className="form-label">
                Status
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your status" name="status" value={status} onChange={(e) => onInputChange(e)}/>
        </div>
        <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
        </div>
        </div>
    </div>
  )
}
