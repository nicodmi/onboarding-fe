import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <BrowserRouter>
        <ul class="nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/product-list">Active</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/product-list">Active</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </BrowserRouter>
    </div>
  )
}

export default Header
