import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import { useState } from 'react'
import Popup from './components/Popup'
import SideNav from './components/SideNav'

function App() {

  const [count, setCount] = useState(0)
  const [state, setState] = useState(true)
  const [products, setProducts] = useState([])
  const [opened, setOpened] = useState(false)
  
  const [openedMenu, setOpenedMenu] = useState(false)
  

  const clicked = (target)=> {
    if(!target.classList.contains('cart')) {
      // setState(!state)
    }
    else {
      return
    }
  }

  return (
    <div className={'App'} onClick={(e)=> clicked(e.target)}>
      <Navbar state={state} setState={setState} products={products} openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} />
      <Hero products={products} setProducts={setProducts} count={count} setCount={setCount} opened={opened} setOpened={setOpened} />
      <Cart products={products} setProducts={setProducts} state={state}  />
      
      <SideNav  openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} />
      <Popup opened={opened} setOpened={setOpened} />
    </div>
  )
}

export default App
