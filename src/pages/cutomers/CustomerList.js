import React, { useState } from 'react'
import axios from 'axios';
import Card from '../../components/Cards/Card'

function CustomerList() {
  const [customers, setCustomers] = useState([])

  const showCustomer = () => {
    axios.get(`http://127.0.0.1:4444/customers`)
      .then(res => setCustomers(res.data.results))
  }

  const createCart = (customerId) => {
    const body = {
      currency: 'ARS',
      customerId
    }

    axios.post('http://127.0.0.1:4444/create-cart', body)
      .then(res => console.log(res))
  }

  return (
    <div className="container">
      <button onClick={showCustomer}>Ver Customers</button>
      <Card data={customers} createCart={createCart}/>
    </div>
  )
}

export default CustomerList
