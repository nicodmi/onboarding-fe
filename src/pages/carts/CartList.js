import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Card from '../../components/Cards/Card'

function CartList() {
  const [carts, setCarts] = useState([])

  
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const viewCarts = async() => {
    const customerId = query.get('id')

    axios.get(`http://127.0.0.1:4444/carts`)
      .then(res => {
        const cartsPerId = res.data.results.filter(data => data.customerId === customerId)
        setCarts(cartsPerId)
      })
  }

  return (
    <div className="container">
      <button onClick={viewCarts}>Ver Carts</button>
      <Card data={carts}/>
    </div>
  )
}

export default CartList
