import styled from "styled-components"
import DeleteIc from '../assets/icon-delete.svg'
import ThumbImg from '../assets/image-product-1-thumbnail.jpg'


function ProductInCart({product, deleteProduct}) {

    const total = product.price * product.count

  return (
    <>
        <ProductCart>
            <figure>
                <CartImg src={ThumbImg} alt="" />
            </figure>
            <div className="product-info">
                <Title>{product.title}</Title>
                <Price>
                    <PriceInfo>${product.price} x {product.count}</PriceInfo> <Total>${total}.00</Total>
                </Price>
            </div>
            <div className="delete" onClick={deleteProduct}>
                <img src={DeleteIc} alt="" />
            </div>
        </ProductCart>
        <div className="checkout">
            <Checkout>Checkout</Checkout>
        </div>
    </>
  )
}

export default ProductInCart

const ProductCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.p`
    font-size: 14px;
    color: hsl(219, 9%, 45%);

    margin-bottom: 5px;
`
const Checkout = styled.button`
    color: #fff;
    background-color: hsl(26, 100%, 55%);
    width: 100%;
    border: none;
    padding: 10px 0;
    border-radius: 5px;
    font-weight: 700;
    margin-top: 20px;
    cursor: pointer;
`
const Price = styled.div`
    font-size: 14px;
`
const PriceInfo = styled.span`
    color: hsl(219, 9%, 45%);
`
const Total = styled.span`
    font-weight: 700;
`
const CartImg = styled.img`
    width: 40px;
    border-radius: 4px;
`