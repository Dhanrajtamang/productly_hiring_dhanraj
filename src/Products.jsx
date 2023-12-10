import { AiOutlineShoppingCart   } from "react-icons/ai"

export default function Products({products}) {
  const {title} = products
  return (
    <div className="products">
      {/* hidden */}
        <div className="product-image-container">
          <img  className="product-image" src={products.image} alt={title} />
          <AiOutlineShoppingCart className="addtocart"/>
        </div>
        <div className="product-title">{title}</div>
        <div className="product-category">{products.category}</div>
        <div className="product-price">MRP :&#8377; {products.price}</div>
        <details className="product-details">
          <summary>Description</summary>
          <p className="details">{products.description}</p>
          </details>
    </div>
  )
}
