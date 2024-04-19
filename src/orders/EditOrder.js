import React, { useState , useEffect } from 'react'
import {Link,  useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';

export default function EditOrder() {
  let navigate = useNavigate();
  const [order,setOrder]=useState({
    description:"",
    amount:"",
    status:"",
    orderDate:""
  })
  const {id} = useParams()

  useEffect(()=>{
    loadOrder()
  },[]);
  const{description,amount,status,orderDate}=order

  const onInputChange=(e)=>
  {
    setOrder({...order,[e.target.name]:e.target.value})
  }
  const onSubmit= async(e) =>
  {
    e.preventDefault()
    await axios.put(`http://localhost:8080/oms/${id}`,order)
    console.log(order)
    navigate("/")
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
        <h2 className="text-center m-4">Edit Order</h2>
        <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="orderDate" className="form-label">
              orderDate
            </label>
            <input type={"date"} className="form-control" placeholder="Enter your orderDate" name="orderDate" value={orderDate} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">
            Description
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your description" name="description" value={description} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="price" className="form-label">
            Amount
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your amount" name="amount" value={amount} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="status" className="form-label">
                Status
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your status" name="status" value={status} onChange={(e) => onInputChange(e)}/>
        </div>

        <button type="submit" className="btn btn-outline-primary">Submit</button>
        <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
        </form>

        </div>
        </div>
    </div>
  )
}
