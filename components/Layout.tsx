import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Logo from './Logo';
import '../static/css/main.css';

const Layout = ({ children, title = 'Plan Centenario 2022 | Federación Peruana de Fútbol' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href='https://fonts.googleapis.com/css?family=Oswald|Roboto:300,400,500,700' rel='stylesheet' />
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXXX');`}} />
    </Head>
    <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden;"></iframe>` }} />
    <header className="header">
      <nav className="container header-conteiner">
        <Link href='/'>
          <a>
            <Logo width="90" />
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
    <footer className="centenary-footer">
      <div className="container centenary-footer-conteiner">
        <h2 className="centenary-footer-title">EMPEZÓ EL CAMBIO
          <Logo width="50" />
        TRABAJANDO</h2>
      </div>
    </footer>
    <div className="centenary-footer--content">
      <div className="centenary-footer--wrapp">
        <Link href='/'>
          <a className="button centenary-footer-button header-animate-link">REGRESAR</a>
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
        <div className="contact-item">
          <i className="fa fa-map-marker"></i>
          <span>Av. Aviación 2085 - San Luis</span>
        </div>
        <div className="contact-item">
          <i className="fa fa-phone"></i>
          <span>(+511)-2258238</span>
        </div>
        <div className="contact-item">
          <i className="fa fa-envelope"></i>
          <span>fepefutbol@fpf.org.pe</span>
        </div>
      </div>
      <hr className="separator container" />
      <div className="clearfix footer-logos">
        <div className="container small">
          <h3>Patrocinadores Oficiales</h3>
          <img className="first" src="./static/img/logos/coca-cola.png" />
          <img src="./static/img/logos/cristal.png" />
        </div>
        <div className="container big">
          <h3>Socios Oficiales</h3>
          <img className="first" src="./static/img/logos/hyundai.png" />
          <img src="./static/img/logos/umbro.png" />
          <img src="./static/img/logos/movistar.png" />
          <img src="./static/img/logos/pecsa.jpg" />
        </div>
        <div className="container big">
          <h3>Proveedores y Licencias Oficiales</h3>
          <img className="first" src="./static/img/logos/panini.png" />
          <img src="./static/img/logos/hunter.png" />
          <br /><img src="./static/img/logos/lavaggi.png" alt="" width="65" />
          <img src="./static/img/logos/milo.png" alt="" width="65" />
        </div>
      </div>
      <hr className="separator container" />
    </div>
  </div>
)

export default Layout
