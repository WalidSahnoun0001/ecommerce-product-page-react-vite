import styled from "styled-components"
import Product1 from '../assets/image-product-1.jpg'
import ProductThumb1 from '../assets/image-product-1-thumbnail.jpg'
import ProductThumb2 from '../assets/image-product-2-thumbnail.jpg'
import ProductThumb3 from '../assets/image-product-3-thumbnail.jpg'
import ProductThumb4 from '../assets/image-product-4-thumbnail.jpg'

import Minus from '../assets/icon-minus.svg'
import Plus from '../assets/icon-plus.svg'
import { useState } from "react"

import Product2 from '../assets/image-product-2.jpg'
import Product3 from '../assets/image-product-3.jpg'
import Product4 from '../assets/image-product-4.jpg'

import Next from '../assets/icon-next.svg'
import Previous from '../assets/icon-previous.svg'


function Hero({setProducts, count, setCount, opened, setOpened}) {

    const add = ()=> {
        setCount(count + 1)
    }
    const minus = ()=> {
        if(count > 0) {
            setCount(count - 1)
        }
    }
    const addToCart = () => {

        if(count > 0) {
            setProducts(
                [{id: Date.now().toString(), title: "Fall Limited Edition Sneakers", price: 125.00, count: count}]
            )
        }
      }

    let [productImg, setProductImg] = useState(Product1)

    const change = (target, index) => {
        let replace = target.firstChild.src.replace('-thumbnail', '')
        
        setProductImg(replace)

        document.querySelectorAll('figure div img').forEach((img)=> {
            img.parentNode.classList.remove('img-active')
            img.parentNode.classList.add('img-hover')
        })

        target.classList.add('img-active')
        target.classList.remove('img-hover')

        setIndex(index)
    } 

    const imgs = [
        Product1, Product2, Product3, Product4
    ]
    const [index, setIndex] = useState(0)

    const nextImg = () => {
        if(index < imgs.length-1) {
            setIndex(index + 1)
        }
        else {
            setIndex(0)
        }
    }
    const previousImg = () => {
        if(index == 0) {
            setIndex(imgs.length-1)
        }
        else {
            setIndex(index-1)
        }
    } 

  return (
    <>
        <Section className="hero">
            <Product>
                <div>
                    <figure>
                        <PrevImage src={Previous} onClick={previousImg} alt="" />
                        <PrevImg onClick={()=> setOpened(!opened)} src={imgs[index]} alt="" />
                        <NextImage src={Next} onClick={nextImg} alt="" />
                    </figure>
                    <Figure2>
                        <div className="img-active" onClick={(e)=> change(e.target, 0)}><ThumbImg src={ProductThumb1} alt="" /></div>
                        <div className="img-hover" onClick={(e)=> change(e.target, 1)}><ThumbImg src={ProductThumb2} alt="" /></div>
                        <div className="img-hover" onClick={(e)=> change(e.target, 2)}><ThumbImg src={ProductThumb3} alt="" /></div>
                        <div className="img-hover" onClick={(e)=> change(e.target, 3)}><ThumbImg src={ProductThumb4} alt="" /></div>
                    </Figure2>
                </div>
                <Details>
                    <H4>Sneaker Company</H4>
                    <H1>Fall Limited Edition Sneakers</H1>
                    <P>
                        These low-profile sneakers are your perfect casual wear 
                        companion. Featuring a durable rubber outer sole, they'll 
                        withstand everything weather can offer.
                    </P>
                    <PriceDetails>
                        <Price>
                            <Prafter>$125.00</Prafter>
                            <Discount>50%</Discount>
                            <Prbefore>$250.00</Prbefore>
                        </Price>
                    </PriceDetails>
                    <Controls>
                        <Quantity>
                            <ControlL onClick={minus}><img src={Minus} alt="" /></ControlL>
                            <Count>{count}</Count>
                            <ControlR onClick={add}><img src={Plus} alt="" /></ControlR>
                        </Quantity>
                        <div className="add-to-cart">
                            <AddBtn onClick={addToCart}>
                                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero"/></svg>
                                <div>Add to cart</div>
                            </AddBtn>
                        </div>
                    </Controls>
                </Details>
            </Product>
            <div className="attr" style={{textAlign: 'center', marginTop: '20px'}}>
                <a href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6" style={{color: 'black'}} target={'_blank'}>Frontend Mentor Challenge Link</a>
            </div>
        </Section>
    </>
  )
}

export default Hero

const Section = styled.section`
    width: 80%;
    margin: 0 auto;
    display: grid;
    place-content: center;
    min-height: 80vh;

@media (max-width: 575.98px) {
    margin: 0 auto;
    width: 100%;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    margin: 0 auto;
    width: 100%;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    margin: 0 auto;
    width: 100%;
}
`

const Product = styled.div`
    display: flex;
    align-items: center;
    gap: 150px;

    
@media (max-width: 575.98px) { 
    display: block;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    display: block;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    display: block;
}
`
const Figure2 = styled.figure`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
`
const PrevImg = styled.img`
    width: 400px;
    border-radius: 15px;
    cursor: pointer;

    
@media (max-width: 575.98px) {
    width: 100%;
    height: 300px;
    border-radius: 0;
    object-fit: cover;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
    height: 300px;
    border-radius: 0;
    object-fit: cover;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
    height: 300px;
    border-radius: 0;
    object-fit: cover;
}
`
const ThumbImg = styled.img`
    width: 85px;
    height: 85px;
    object-fit: cover;
    border-radius: 15px;
    cursor: pointer;

    
@media (max-width: 575.98px) {
    display: none;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    display: none;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    display: none;
}
`
const Details = styled.div`
    width: 90%;
    margin: 0 auto;
`
const H4 = styled.h4`
    color: hsl(26, 100%, 55%);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 14px;
    margin-bottom: 10px;

@media (max-width: 575.98px) {
    margin-top: 10px;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    margin-top: 10px;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    margin-top: 10px;
}
`
const H1 = styled.h1`
    color: hsl(0, 0%, 0%);
    font-size: 40px;
    width: 80%;
    margin: 20px 0;
@media (max-width: 575.98px) {
    font-size: 30px;
    width: 100%;    
    margin: 10px 0;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    font-size: 30px;
    width: 100%;
    margin: 10px 0;
}
@media (min-width: 768px) and (max-width: 991.98px)  {
    font-size: 30px;
    width: 100%;
    margin: 10px 0;
}
`
const P = styled.p`
    width: 70%;
    font-size: 16px;
    color: hsl(219, 9%, 45%);
    line-height: 1.6;

@media (max-width: 575.98px) {
    width: 100%;    
    font-size: 14px;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
    font-size: 15px;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
    font-size: 16px;
}
`
const PriceDetails = styled.div`
    display: flex;
    margin: 20px 0;
    width: 120px;

@media (max-width: 575.98px) {
    margin: 10px 0;
    width: 100%;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    margin: 10px 0;
    width: 100%;
}
`
const Price = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`
const Prafter = styled.span`
    font-size: 20px;
    font-weight: 700;
    display: block;
`
const Prbefore = styled.span`
    font-size: 14px;
    font-weight: 700;
    text-decoration: line-through;
    color: hsl(220, 14%, 75%);

@media (max-width: 575.98px) {
    margin-left: 110px;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    margin-left: 110px;
}
`
const Discount = styled.span`
    color: hsl(26, 100%, 55%);
    background-color: hsl(25, 100%, 94%);
    font-size: 14px;
    font-weight: 700;
    padding: 2px 4px;
    border-radius: 5px;
`
const Controls = styled.div`
    
@media (max-width: 575.98px) {
    display: block;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    display: block;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    display: block;
}
`
const ControlL = styled.div`
    background-color: hsl(223, 64%, 98%);
    border-radius: 10px 0 0 10px;

    width: 45px;
    height: 45px;
    line-height: 2.4;
    cursor: pointer;

    &:hover {
        background-color: #f7f8fd8d;
    }
@media (max-width: 575.98px) {
    width: calc(100% / 3);
}
@media (min-width: 576px) and (max-width: 767.98px) {
    width: calc(100% / 3);
}
@media (min-width: 768px) and (max-width: 991.98px) {
    width: calc(100% / 3);
}
`
const ControlR = styled.div`
    background-color: hsl(223, 64%, 98%);
    border-radius: 0 10px 10px 0;

    width: 45px;
    height: 45px;
    line-height: 2.8;
    cursor: pointer;
    
    &:hover {
        background-color: #f7f8fd8d;
    }
@media (max-width: 575.98px) {
    width: calc(100% / 3);
}
@media (min-width: 576px) and (max-width: 767.98px) {
    width: calc(100% / 3);
}
@media (min-width: 768px) and (max-width: 991.98px) {
    width: calc(100% / 3);
}
`
const Quantity = styled.div`
    display: flex;

    text-align: center;
    margin-bottom: 15px;

@media (max-width: 575.98px) {
    width: 100%;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
}
`
const Count = styled.div`
    background-color: hsl(223, 64%, 98%);
    
    width: 45px;
    height: 45px;
    line-height: 2.8;
    font-weight: 700;
@media (max-width: 575.98px) {
    width: calc(100% / 3);
}
@media (min-width: 576px) and (max-width: 767.98px) {
    width: calc(100% / 3);
}
@media (min-width: 768px) and (max-width: 991.98px) {
    width: calc(100% / 3);
}
`
const AddBtn = styled.button`
    background-color: hsl(26, 100%, 55%);
    border: none;
    color: #fff;
    width: 250px;
    height: 45px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 15px 20px -12px hsl(26deg 100% 55%);

    &:hover {
        background-color: #ff7d1a9d;
    }
@media (max-width: 575.98px) {
    width: 100%;
    margin: 0 auto;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
    margin: 0 auto;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
    margin: 0 auto;
}
`

const PrevImage = styled.img`
    display: none;
@media (max-width: 575.98px) {
    display: block;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    padding: 12px 15px;
    z-index: 9;
    left: 10px;
    top: 240px;
    cursor: pointer;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    display: block;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    padding: 12px 15px;
    z-index: 9;
    left: 10px;
    top: 240px;
    cursor: pointer;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    display: block;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    padding: 12px 15px;
    z-index: 9;
    left: 50px;
    top: 33%;
    cursor: pointer;
}
`
const NextImage = styled.img`
    display: none;
@media (max-width: 575.98px) {
    display: block;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    padding: 12px 15px;
    z-index: 9;
    right: 10px;
    top: 240px;
    cursor: pointer;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    display: block;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    padding: 12px 15px;
    z-index: 9;
    right: 10px;
    top: 240px;
    cursor: pointer;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    display: block;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    padding: 12px 15px;
    z-index: 9;
    right: 15px;
    top: 33.5%;
    cursor: pointer;
}
`