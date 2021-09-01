import React, { useState } from 'react';
import axios from 'axios';
import Card from '../../components/Cards/Card'

function ProductList() {
  const [products, setProducts] = useState([])

  const showProduct = () => {
    axios.get(`http://127.0.0.1:4444/products`)
      .then(res => setProducts(res.data.results))
  }

  return (
    <div className="container">
      <button onClick={showProduct}>Ver Productos</button>
      <Card data={products}/>
    </div>
  )
}

export default ProductList
