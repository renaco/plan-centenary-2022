import * as React from 'react';
import Logo from './../Logo';
import Link from 'next/link';

export const Footer = () => {
  return (
    <>
      <footer className="centenary-footer">
        <div className="container centenary-footer-conteiner">
          <h2 className="centenary-footer-title">COMENZÓ EL CAMBIO
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
    </>
  )
};
