

import React,{useEffect} from 'react';
import './navbar.scss';

const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(true);

  const handleScroll=() => {
    const offset=window.scrollY;
    setScrolled(true);
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
  return (
    <header className={x.join(" ")}>

        <nav className="navigation">
            <ul>
              <li><a href="/" font="Arial">Home</a></li>
              <li><a href="/contacts" font="Arial">Contacts</a></li>
              <li><a href="/about" font="Arial">About</a></li>
              <li><a href="/qna" font="Arial">Q&A</a></li>
            </ul>
        </nav>

    </header>
  )
};

export default Navbar;

