import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {

  return (
    <div className="row mt-5">
      {
        props.data.map(info =>
          <div className="col-lg-3 col-md-6 col-12 mb-3" key={info.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{info.key || `${info.firstName || info.lastName ? info.firstName + " " + info.lastName : "Sin Nombre"}`}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ info.published ? "Published" : info.id }</h6>
                <p className="card-text">{info.createdAt}</p>
                <p className="card-text">{info.email || info.cartState}</p>
                {
                  info.email && <Link to={`/cart-list?id=${info.id}`} className="btn btn-primary me-3">View Cart</Link>
                }
                {
                  info.email && <button className="btn btn-primary" onClick={() => props.createCart(info.id)}>Create cart</button>
                }
                
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Card
