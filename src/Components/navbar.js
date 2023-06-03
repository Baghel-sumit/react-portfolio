import React, { useState } from 'react'

const NavbarComponent = (props) => {
  const [themeIcon, setThemeIcon] = useState('light');
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleTheme = () => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    setThemeIcon(isDark ? 'light' : 'dark');
  }

  const handleMenu = () => {
    setMobileMenu(prev => !prev);
  }

  return (
    <>
      <nav className="nav">
        <div className="container flex items-center justify-between h-16 md:h-20">
            <h1 className="relative z-30 font-semibold text-2xl uppercase">
                {props.title}
            </h1>
            <div className="flex items-center flex-row-reverse md:flex-row gap-3 md:gap-12">
              {/* Menu list */}
              <ul id="menu" className={`nav-menus ${!isMobileMenu ? 'translate-y-[-200%]': null} md:translate-y-0`}>
                {props.menuItems.map((item, index)=>(
                  <a key={item+index} className="nav-link uppercase" href={`#${item}`} onClick={handleMenu}>{item}</a>
                ))}
              </ul>
              {/* Mobile menu  button */}
              <button id="toggle-menu" className="relative z-30 p-2 md:hidden dark:invert" onClick={handleMenu}>
                  <img src={`${props.mobileMenuImg}${!isMobileMenu ? 'menu' : 'close'}.svg`} alt="menu"/>
              </button>
              {/* Toggle Theme */}
              <button id="toggle-theme" className="relative z-30 dark:invert" onClick={handleTheme}>
                  <img 
                  className="md:opacity-70 w-7 md:mt-1"
                  src={`${props.toggleThemeImg+themeIcon}.svg`} 
                  alt="dark"/>
              </button>
            </div>
        </div>
    </nav>
    </>
  )
};

export default NavbarComponent
