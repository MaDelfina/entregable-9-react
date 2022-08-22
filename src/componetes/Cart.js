import Page from "../componetes/Page";
import ItemCount from "./ItemCount";
import { useState } from "react"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CheckOut from "./CheckOut";

const Cart = () => {

  const [cartContador, setCartContador] = useState(0)
  const { cart, deleteItem, emptyCart } = useContext(CartContext)

  if (cart.length > 0) {
    return (
      <div>
        <div>
          {
            cart.map((element, index) => {
              return <div key={index}>
                <div>
                  <img src={element.img} alt={element.name} />
                </div>

                <div>
                  <h3>{element.name}</h3>
                  <h2>precio: ${element.price}</h2>
                  <h3>{element.qty}</h3>
                </div>
                <div>
                  <button onClick={() => deleteItem(element.id)} className="btn btn-danger">X</button>
                </div>
              </div>
            })
          }
          <button onClick={() => emptyCart()}>Vaciar</button>
        </div>
        <CheckOut />
      </div>
    )
  }

  return (
    <div>
      <h2>Carrito vacio</h2>
      <Link to={'/'}> </Link>
      <button>Ver productos</button>
    </div>
  )
}
export default Cart