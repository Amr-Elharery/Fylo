import { useEffect, useRef } from 'react';
import Nav from './nav'
function Header() {
  const headerRef = useRef();
  useEffect(()=>{
    window.addEventListener("scroll", () =>{
      if(scrollY > 100){
        headerRef.current.style.backgroundColor = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      }
      else{
        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.style.padding = "30px 0 0";

      }
    })
  })
  return (
    <header ref={headerRef} className='pt-[30px] fixed top-0 left-0 w-full z-10 transition-all duration-300'>

      <div className="container flex items-center justify-between gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src="/src/assets/images/logo.svg" alt="logo" />
        </a>

        <Nav />
      </div>
    </header>
  )
}

export default Header;