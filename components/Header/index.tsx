import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import ItemNav from './ItemNav';

export const Header = (props) => {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <Link href='/' className="is-fixed">
        <Logo width="70" />
      </Link>
      {menuStatus &&
        <header className="header">
          <nav className="container header-conteiner">
            {props.data.menu.map((item, index) => {
              return (
                <ItemNav key={index} item={item} onClick={() => { setMenuStatus(!menuStatus) }} />
              )
            }
            )}
          </nav>
        </header>
      }
      <a className="header-menu-mobile" onClick={() => {
        setMenuStatus(!menuStatus)
      }}></a>
    </>
  )
}