import styled from "styled-components"
import ProductInCart from "./ProductInCart";

function Cart({state, products, setProducts}) {

    const close = state ? 'close-cart': '';

    const deleteProduct = () => {
        setProducts([])
    }


  return (
    <CartSec className={`cart ${close}`}>
        <CartHead>Cart</CartHead>
        <CartContent>
            {
                (products.length > 0 && products[0] != undefined) ? products.map((product)=> (
                    <ProductInCart key={product.id} product={product} deleteProduct={deleteProduct} />
                )) : <Pr>Your cart is empty</Pr>
            }
        </CartContent>
    </CartSec>
  )
}

export default Cart

const CartSec = styled.section`
    position: absolute;
    top: 75px;
    right: 90px;
    z-index: 9;

    width: 300px;
    height: 200px;
    background-color: #fff;
    border-radius: 10px;

    box-shadow: 0px 15px 50px -35px hsl(0deg 0% 0%);

@media (max-width: 575.98px) {
    width: 95%;
    height: 250px;
    margin: 0 auto;
    top: 125px;
    right: 10px;
}
`
const CartHead = styled.h2`
    font-size: 16px;
    padding: 15px 0;
    border-bottom: 2px solid hsl(223, 64%, 98%);
    padding-left: 20px;
`
const CartContent = styled.div`
    display: grid;
    height: 120px;
    padding: 20px;

@media (max-width: 575.98px) {
    height: 165px;
}
`
const Pr = styled.p`
    font-weight: 700;
    color: hsl(219, 9%, 45%);
    font-size: 15px;
    display: grid;
    place-content: center;
`