import styled from 'styled-components'
import CloseM from '../assets/icon-close.svg'

function SideNav({openedMenu, setOpenedMenu}) {
  return (
    <SideUl className={`${openedMenu? 'opened-menu' : ''}`}>
        <CloseMenu className={openedMenu? 'opened-menu' : ''} onClick={()=> setOpenedMenu(!openedMenu)} ><img src={CloseM} alt="" /></CloseMenu>
        <SideLi><a href="#">Collections</a></SideLi>
        <SideLi><a href="#">Men</a></SideLi>
        <SideLi><a href="#">Women</a></SideLi>
        <SideLi><a href="#">About</a></SideLi>
        <SideLi><a href="#">Contact</a></SideLi>
    </SideUl>
  )
}

export default SideNav

const CloseMenu = styled.div`
    position: relative;
    display: none;

    margin: 40px 0 0 40px;
`
const SideUl = styled.ul`
    list-style: none;
    display: none;
    z-index: 9;

    @media (max-width: 575.98px) {
        display: block;
        position: fixed;
        height: 100%;
        top: 0;

        transform: translateX(-260px);

        background-color: #fff;
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        display: block;
        position: fixed;
        height: 100%;
        top: 0;

        transform: translateX(-400px);

        background-color: #fff;
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
        display: block;
        position: fixed;
        height: 100%;
        top: 0;

        transform: translateX(-535px);

        background-color: #fff;
    }
`
const SideLi = styled.li`
    margin: 25px 40px;

    a {
        color: #333;
        font-weight: 700;
    }
`