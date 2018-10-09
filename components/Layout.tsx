import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Logo from './Logo'
import '../static/css/main.css'

type Props = {
  title?: string
}

const Layout: React.SFC<Props> = ({ children, title = 'Plan Centenario 2022 | Federación Peruana de Futbol' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href='https://fonts.googleapis.com/css?family=Oswald|Roboto:300,400,500,700' rel='stylesheet' />
    </Head>
      <header className="header" id="header">
        <nav className="container header-conteiner">
          <Link href='/'>
            <a>
              <Logo></Logo>
            </a>
          </Link>
          <Link href='desarrollo-deportivo'>
            <a className="header-conteiner-link header-animate-link">
              <svg className="header-conteiner-icon" viewBox="0 0 100 100">
                <use xlinkHref="#deportive"></use>
              </svg>
              <span className="header-description">DESARROLLO DEPORTIVO</span>
            </a>
          </Link>
          <Link href='profesionalizacion-de-clubes-y-campeonatos'>
            <a className="header-conteiner-link header-animate-link">
              <svg className="header-conteiner-icon" viewBox="0 0 100 100">
                <use xlinkHref="#reforms"></use>
            </svg>
            <span className="header-description">PROFESIONALIZACIÓN DE CLUBES Y CAMPEONATOS</span>
          </a>
          </Link>
          <Link href='desarrollo-infraestructura'>
            <a className="header-conteiner-link header-animate-link">
              <svg className="header-conteiner-icon" viewBox="0 0 100 100">
                <use xlinkHref="#infraestructure"></use>
              </svg>
              <span className="header-description">DESARROLLO INFRAESTRUCTURA</span>
            </a>
          </Link>
          <Link href='fortalecimiento-institucional'>
            <a className="header-conteiner-link header-animate-link">
              <svg className="header-conteiner-icon" viewBox="0 0 100 100">
                <use xlinkHref="#institutional"></use>
              </svg>
              <span className="header-description">FORTALECIMIENTO INSTITUCIONAL</span>
            </a>
          </Link>
        </nav>
      </header>
    {children}
    <footer className="centenary-footer" id="footer">
      <div className="container centenary-footer-conteiner">
        <h2 className="centenary-footer-title">EMPEZÓ EL CAMBIO<svg className="centenary-footer-logo" xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 89.279 112.737"><use xlinkHref="#fpf">FPF</use></svg>TRABAJANDO</h2></div>
    </footer>
    <div className="centenary-footer--content">
      <div className="centenary-footer--wrapp">
          <Link href='/'>
              <a className="button centenary-footer-button header-animate-link" id="btnTop">REGRESAR</a>
          </Link>
      </div>
      </div>
      <div className="fluid" id="fpffooter">
        <div className="separator relative">
          <hr className="separator footer-shield" />
        </div>
        <div className="links links-social">
        <h3>¡Síguenos!</h3>
        <ul className="list-social">
          <li>
            <a className="header-link fa fa-facebook" href="https://www.facebook.com/federacionperuanadefutbol?fref=ts" target="_blank"></a>
          </li>
          <li>
            <a className="header-link fa fa-instagram" href="https://instagram.com/tufpfoficial/" target="_blank"></a>
          </li>
          <li className="third">
            <a className="header-link fa fa-twitter" href="https://twitter.com/tufpf" target="_blank"></a>
          </li>
          <li>
            <a className="header-link fa fa-youtube" href="https://www.youtube.com/channel/UC5aze-DjrA_BYmWjulX19nw/featured" target="_blank"></a>
          </li>
        </ul>
        </div>
        <div className="container-footer clearfix footer-contact">
          <div className="contact-item"><i className="fa fa-map-marker"></i><span>Av. Aviación 2085 - San Luis</span></div>
          <div className="contact-item"><i className="fa fa-phone"></i><span>(+511)-2258238</span></div>
          <div className="contact-item"><i className="fa fa-envelope"></i><span>fepefutbol@fpf.org.pe</span></div>
        </div>
        <hr className="separator container" />
        <div className="clearfix footer-logos">
          <div className="container small">
            <h3>Patrocinadores Oficiales</h3><img className="first" src="./static/img/logos/coca-cola.png" /><img src="./static/img/logos/cristal.png" /></div>
          <div className="container big">
            <h3>Socios Oficiales</h3><img className="first" src="./static/img/logos/hyundai.png" /><img src="./static/img/logos/umbro.png" /><img src="./static/img/logos/movistar.png" /><img src="./static/img/logos/pecsa.jpg" /></div>
          <div className="container big">
            <h3>Proveedores y Licencias Oficiales</h3><img className="first" src="./static/img/logos/panini.png" /><img src="./static/img/logos/hunter.png" />
            <br /><img src="./static/img/logos/lavaggi.png" alt="" width="65" /><img src="./static/img/logos/milo.png" alt="" width="65" /></div>
        </div>
        <hr className="separator container" />
        <div className="copyright">
          <a className="copyright-link" href="http://cevichelabs.com/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 122.4 129.9">
              <path fill="#999" d="M60.5 61.3h8.6v-2.9h10.8v13.7H44.4V61.3h2.9V35h-2.9V24.2h18.9V35h-2.9v26.3z"></path>
              <path id="rectangle" fill="#AB1E1E" d="M87.7 58.4h20.8v13.7H87.7z"></path>
              <path fill="#999" d="M57.9 104.3c-28.8 0-52.2-23.4-52.2-52.2C5.8 23.4 29.2 0 57.9 0c18.8 0 36.2 10.1 45.4 26.5l-10.4 5.9C85.8 19.8 72.4 12 57.9 12c-22.1 0-40.2 18-40.2 40.2s18 40.2 40.2 40.2c12.5 0 24.1-5.7 31.8-15.6l9.5 7.3c-10 12.8-25 20.2-41.3 20.2zM5.1 129.9c-1.5 0-2.6-.4-3.5-1.2-.8-.8-1.3-1.6-1.5-2.4-.1-.8-.2-2.1-.2-3.8 0-1.5 0-2.6.1-3.5s.6-1.8 1.5-2.6 2.1-1.3 3.6-1.3c.9 0 1.6.1 2.2.4s1.3.7 1.9 1.4L8.1 118c-.5-.5-1-.9-1.4-1.1-.4-.2-1-.4-1.6-.4-1 0-1.8.3-2.4.9-.6.6-.9 1.2-1 1.8-.1.6-.2 1.8-.2 3.4 0 1.6.1 2.7.2 3.4s.5 1.3 1 1.8c.6.6 1.4.9 2.4.9.6 0 1.2-.1 1.6-.4s.9-.6 1.4-1.1l1.1 1.1c-.6.6-1.2 1-1.9 1.3-.6.1-1.3.3-2.2.3zm6.9-.1V115h9.1v1.4h-7.5v5.2H20v1.4h-6.4v5.3h7.5v1.4H12zm15.9 0h-1.3L21.8 115h1.6l3.8 11.9L31 115h1.6l-4.7 14.8zm6.5 0V115H36v14.7h-1.6zm9.8.1c-1.5 0-2.6-.4-3.5-1.2-.8-.8-1.3-1.6-1.5-2.4-.1-.8-.2-2.1-.2-3.8 0-1.5 0-2.6.1-3.5s.6-1.8 1.5-2.6 2.1-1.3 3.6-1.3c.9 0 1.6.1 2.2.4s1.3.7 1.9 1.4l-1.1 1.1c-.5-.5-1-.9-1.4-1.1-.4-.2-1-.4-1.6-.4-1 0-1.8.3-2.4.9-.6.6-.9 1.2-1 1.8-.1.6-.2 1.8-.2 3.4 0 1.6.1 2.7.2 3.4s.5 1.3 1 1.8c.6.6 1.4.9 2.4.9.6 0 1.2-.1 1.6-.4s.9-.6 1.4-1.1l1.1 1.1c-.6.6-1.2 1-1.9 1.3-.6.1-1.4.3-2.2.3zm15.5-.1V123h-7v6.7h-1.6V115h1.6v6.6h7V115h1.6v14.7h-1.6zm5.2 0V115H74v1.4h-7.5v5.2h6.4v1.4h-6.4v5.3H74v1.4h-9.1zm11.3 0V115h2.9v12.1h6.7v2.6h-9.6zm19.6 0l-.9-2.6h-5.2l-.9 2.6h-3l5.3-14.7h2.2l5.4 14.7h-2.9zm-3.4-10.4l-1.9 5.3h3.6l-1.7-5.3zm13.7 10.4H100V115h5.9c1.4 0 2.5.4 3.3 1.1.8.7 1.2 1.7 1.2 3 0 .7-.2 1.4-.6 1.9s-.8.9-1.3 1.1c.6.3 1 .7 1.4 1.2.4.5.6 1.2.6 2.1 0 1.3-.4 2.4-1.2 3.1-.8.9-1.8 1.3-3.2 1.3zm-.5-12.2h-2.8v3.4h2.8c.6 0 1.1-.2 1.4-.5.3-.3.5-.7.5-1.2s-.2-.9-.5-1.2-.8-.5-1.4-.5zm.2 6h-3v3.6h3c.6 0 1.1-.2 1.4-.5.3-.3.5-.8.5-1.3s-.2-1-.5-1.3-.7-.5-1.4-.5zm11.2 6.3c-1.2 0-2.2-.1-3-.4-.9-.3-1.6-.8-2.3-1.5l1.9-1.9c.4.4 1 .8 1.6.9.6.2 1.3.3 2 .3 1.7 0 2.6-.6 2.6-1.8 0-.5-.1-.9-.3-1.1s-.4-.4-.6-.4c-.2-.1-.5-.2-.8-.2l-1.8-.2c-1.3-.2-2.2-.6-2.9-1.3-.7-.7-1-1.6-1-2.8 0-1.3.5-2.4 1.4-3.2.9-.8 2.2-1.2 3.7-1.2 1 0 1.9.1 2.7.4.7.3 1.4.7 2.1 1.3l-1.8 1.8c-.4-.4-.9-.7-1.4-.8-.5-.1-1.1-.2-1.6-.2-.7 0-1.3.2-1.7.5s-.6.8-.6 1.3c0 .2 0 .4.1.6.1.2.2.4.5.6.2.2.7.4 1.2.5l1.7.2c1.2.2 2.1.5 2.6 1s.9 1 1 1.5.3 1.1.3 1.8c0 1.4-.5 2.5-1.5 3.3-1.2.6-2.5 1-4.1 1z"></path>
            </svg>
          </a>
        </div>
      </div>
  </div>
)

export default Layout
