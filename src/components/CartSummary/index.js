// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0

      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summery-container">
            <h1 className="order-total-heading">
              Order Total: <span className="span-text">Rs {total}/- </span>
            </h1>
            <p className="total-Items">{cartList.length} Items in cart</p>
            <button className="checkout-button" type="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
