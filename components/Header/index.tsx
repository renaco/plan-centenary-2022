import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../Logo';
import { useWindowsSize } from './../../customhooks/useResize'

export const Header = (props) => {
  const [menuStatus, setMenuStatus] = React.useState(false);
  const size = useWindowsSize();
  const validSize = size.width > 1924;

  const handleMenu = () => {
    if (validSize) {
      setMenuStatus(!menuStatus);
    }
  }

  React.useEffect(() => {
    handleMenu()
  }, [])

  return (
    <>
      {menuStatus &&
        <header className="header">
          <nav className="container header-conteiner">
            <Link href='/'>
              <a style={{ width: '100%', height: 'auto' }}>
                <Logo width="90" />
              </a>
            </Link>
            {props.data.menu.map((item, index) => {
              return (
                <Link key={index} href={item.slug}>
                  <a href={item.slug}
                    className="header-conteiner-link header-animate-link"
                    onClick={() => {
                      setMenuStatus(!menuStatus)
                    }}>
                    <Image src={item.icon} alt={item.label} height={75} width={75} />
                    <span className="header-description">{item.label}</span>
                  </a>
                </Link>
              )
            })}
          </nav>
        </header>}
      <a className="header-menu-mobile" onClick={() => {
        setMenuStatus(!menuStatus)
      }}></a>
    </>
  )
}