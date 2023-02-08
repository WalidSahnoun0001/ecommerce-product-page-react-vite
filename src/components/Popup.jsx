import React, { useState } from 'react'
import styled from 'styled-components'

import Product1 from '../assets/image-product-1.jpg'
import Product2 from '../assets/image-product-2.jpg'
import Product3 from '../assets/image-product-3.jpg'
import Product4 from '../assets/image-product-4.jpg'
import ProductThumb1 from '../assets/image-product-1-thumbnail.jpg'
import ProductThumb2 from '../assets/image-product-2-thumbnail.jpg'
import ProductThumb3 from '../assets/image-product-3-thumbnail.jpg'
import ProductThumb4 from '../assets/image-product-4-thumbnail.jpg'

import Next from '../assets/icon-next.svg'
import Previous from '../assets/icon-previous.svg'

function Popup({opened, setOpened}) {

    const [color, setColor] = useState('#fff')
    const imgs = [
        Product1, Product2, Product3, Product4
    ]
    const [index, setIndex] = useState(0)

    const nextImg = () => {
        if(index < imgs.length-1) {
            setIndex(index + 1)
            let allDiv = document.querySelectorAll('.popup-figure div')

            allDiv.forEach((division)=> {
                division.classList.remove('img-active')
            })
            allDiv[index+1].classList.add('img-active')
        }
        else {
            setIndex(0)
            let allDiv = document.querySelectorAll('.popup-figure div')

            allDiv.forEach((division)=> {
                division.classList.remove('img-active')
            })
            allDiv[0].classList.add('img-active')
        }
    }
    const previousImg = () => {
            if(index == 0) {
            setIndex(imgs.length-1)
            let allDiv = document.querySelectorAll('.popup-figure div')

            allDiv.forEach((division)=> {
                division.classList.remove('img-active')
            })
            allDiv[imgs.length-1].classList.add('img-active')
        }
        else {
            setIndex(index-1)
            let allDiv = document.querySelectorAll('.popup-figure div')

            allDiv.forEach((division)=> {
                division.classList.remove('img-active')
            })
            allDiv[index-1].classList.add('img-active')

        }
    } 

  return (
    opened ? 
    (
        <PopupSection>
                <Overlay></Overlay>
                <Close>
                    <svg onMouseEnter={()=> setColor('hsl(26, 100%, 55%)')} onMouseLeave={()=> setColor('#fff')} onClick={()=> setOpened(!opened)} style={{cursor: 'pointer'}} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill={color} fillRule="evenodd"/></svg>
                </Close>
                <figure style={{position: 'relative'}}>
                    <PrevImage src={Previous} onClick={previousImg} alt="" />
                    <PopupPrevImg src={imgs[index]} alt="" />
                    <NextImage src={Next} onClick={nextImg} alt="" />
                </figure>
                <PopupFigure2 className='popup-figure'>
                    <div className="img-active"><PopupThumbImg src={ProductThumb1} alt="" /></div>
                    <div><PopupThumbImg src={ProductThumb2} alt="" /></div>
                    <div><PopupThumbImg src={ProductThumb3} alt="" /></div>
                    <div><PopupThumbImg src={ProductThumb4} alt="" /></div>
                </PopupFigure2>
        </PopupSection>
    ) 
    : ''
  )
}

export default Popup

const Overlay = styled.div`
    position: absolute;
    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);

    @media (max-width: 575.98px) {
        display: none;
    }
`

const PopupSection = styled.section`
    position: absolute;
    z-index: 9;
    top: 0;
    width: 100%;
    height: 100%;

    display: grid;
    place-content: center;

    @media (max-width: 575.98px) {
        display: none;
    }
    
`

const PopupFigure2 = styled.figure`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
`
const PopupPrevImg = styled.img`
    position: relative;
    width: 400px;
    border-radius: 15px;
`
const PopupThumbImg = styled.img`
    width: 85px;
    height: 85px;
    object-fit: cover;
    border-radius: 15px;
`
const Close = styled.div`
    position: relative;
    text-align: end;
    margin-bottom: 20px;
`
const PrevImage = styled.img`
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    padding: 12px 15px;
    z-index: 9;
    left: -20px;
    top: 170px;
    cursor: pointer;
`
const NextImage = styled.img`
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    padding: 12px 15px;
    z-index: 9;
    right: -20px;
    top: 170px;
    cursor: pointer;
`