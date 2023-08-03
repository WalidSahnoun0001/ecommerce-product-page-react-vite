import styled from 'styled-components'
import Profile from '../assets/image-avatar.png'
import Logo from '../assets/logo.svg'
import CartIcon from '../assets/icon-cart.svg'
import MenuIc from '../assets/icon-menu.svg'

function Product({state, setState, products, openedMenu, setOpenedMenu}) {

  return (
    <Header>
        <Nav>
            <PhoneMenuIc onClick={()=> setOpenedMenu(!openedMenu)}>
                <img src={MenuIc} alt="" />
            </PhoneMenuIc>
            <H2><img src={Logo} alt="" /></H2>
            <Ul className='main-ul'>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </Ul>
        </Nav>
        <Nav>
            <Ul>
                <li style={{position: 'relative'}} >
                    <a href="#" onClick={() => setState(!state)}><img src={CartIcon} alt="" /></a>
                    {
                        (products.length > 0 && products[0] != undefined) ? (
                            <CrSp>{products[0].count}</CrSp>
                        ) : ''
                    }
                </li>
                <li><a href="#" className='profile-active'><Img src={Profile} alt="" /></a></li>
            </Ul>
        </Nav>
    </Header>
  )
}

export default Product

const Header = styled.header`
    width: 80%;
    margin: 25px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 2px solid hsl(223, 64%, 98%);
    padding-bottom: 20px;
`
const PhoneMenuIc = styled.div`
    display: none;
    @media (max-width: 575.98px) {
        display: block;
        margin-right: 15px;
        margin-top: 5px;
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        display: block;
        margin-right: 15px;
        margin-top: 5px;
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
        display: block;
        margin-right: 15px;
        margin-top: 5px;
    }
`
const Nav = styled.nav`
    display: flex;
    align-items: center;
    position: relative;
`
const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
`
const Img = styled.img`
    width: 40px;
`
const H2 = styled.h2`
    margin-right: 50px;
`
const CrSp = styled.span`
    color: #fff;
    background-color: hsl(26, 100%, 55%);
    border-radius: 15px;
    font-size: 10px;
    padding: 1px 8px;
    font-weight: 700;
    cursor: default;
    position: absolute;
    bottom: 15px;
    left: 15px;
`
