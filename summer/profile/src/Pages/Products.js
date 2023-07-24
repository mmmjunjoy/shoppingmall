import React from "react";
import {Link} from "react-router-dom"

function Products() {
    return (
      <div >
        <h1>
          The Products Page
        </h1>
        <li>
            <Link to="products/shirts">상의</Link>
        </li>
        <li>
            <Link to="products/pants">하의</Link>
        </li>
        <li>
            <Link to="products/shoes">신발</Link>
        </li>
        
      </div>
    );
  }

export default Products;