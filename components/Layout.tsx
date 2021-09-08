import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Logo from './Logo';
import '../public/static/css/main.css';

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
            <svg className="header-conteiner-icon" id="deportiva" xmlns="http://www.w3.org/2000/svg" width="105.066" viewBox="0 0 105.066 80.19">
              <circle cx="86.503" cy="18.562" r="18.562" fill="#E91D00"></circle>
              <path d="M86.296 10.836c.458 0 .687.23.687.687V26.17c0 .436-.23.688-.687.688h-2.54c-.436 0-.687-.252-.687-.687V16.1c0-.457-.23-.687-.69-.687H81.4c-.436 0-.688-.252-.688-.687V13.49c0-.39.138-.64.458-.823l2.93-1.763c.092-.046.184-.068.298-.068h1.9zM44.19 41.37l9.813 1.063 2.5-3.562s-.938-5.75 5.25-6.624 15.507.4 17.57 4.93 3.46 10.225 3.46 10.225.02 1.79-.904 2.435c-.786.55-1.87.84-3.19.035l-4.437-10.25-3.062-.875s-1.624.44-.75 2.44 4.063 9.81 4.063 9.81 1.25 2.875-.375 4.125-6.75 6.125-6.75 6.125l10.5 12.438s1.812 2.875-.188 4.812-4.812.312-6.875-2-9.438-11.25-9.438-11.25l-6.312 11.75s-1.688 3.688-4.625 2.875-3.5-3-1.812-6.562l7.375-13.938s1.625-2.812 2.625-3.75l3.875-2.562-3.375-8.125-1.562 2.5s-1.5 1.625-4 1.125-10.188-1.812-10.188-1.812-2.125-1.125-1.938-2.688.5-2.93 2.75-2.687z" fill="#FFF"></path>
              <circle cx="59.828" cy="22.906" r="6.027" fill="#FFF"></circle>
              <circle cx="38.379" cy="26.406" r="6.027" fill="#FFF"></circle>
              <path d="M9.17 38.433l7.083-7.5s1.583-2.167 3.917-1.25 5.167 1.917 5.167 1.917 6.833.024 8.917 2.345c2.083 2.32 2.75 4.655 2.25 6.82l-.833 3.168 1.418 3.083 9.5 3s1.667.417.75 3.333c0 0-.833 2-3.833 1.416-3-.583-10.167-2.75-10.167-2.75s-1.75-.333-2-2.333-.333-3.167-.333-3.167l-5 4.833s-1.083 1.416.167 2.75c1.25 1.332 6.583 7.332 6.583 7.332s.833 1 .333 4.083c-.5 3.083-2.667 11.75-2.667 11.75s-.75 3.083-3.666 2.917-4-2.75-2.833-6.667c1.168-3.917 2.584-8.75 2.584-8.75l-2.5-1.917-17.417 9.835S2.92 74.85.92 72.433c0 0-3.167-3.333 2.25-6.417l13.333-7.333L13.67 52.1s-2.167-3.25.833-5.667l9.303-9.5-4.22-.667-6 5.5s-1.332 2.917-4.25 2c0 0-3.776-1.51-.166-5.333z" fill="#FFF"></path>
            </svg>
            <span className="header-description">DESARROLLO DEPORTIVO</span>
          </a>
        </Link>
        <Link href='profesionalizacion-de-clubes-y-campeonatos'>
          <a className="header-conteiner-link header-animate-link">
            <svg className="header-conteiner-icon" id="reforms" xmlns="http://www.w3.org/2000/svg" width="94.979" viewBox="0 0 94.979 81.625">
              <circle cx="76.417" cy="18.562" r="18.562" fill="#E91D00"></circle>
              <path d="M80.085 22.92c.458 0 .688.23.688.688v2.563c0 .46-.23.688-.688.688h-9.75c-.435 0-.687-.252-.687-.687v-1.968c0-5.264 6.73-6.752 7.095-8.56.138-.688-.23-1.282-1.12-1.282-1.077 0-1.604.595-1.764 1.533-.07.458-.298.664-.756.572l-2.61-.572c-.41-.09-.617-.343-.594-.755.137-1.648 1.007-4.715 5.722-4.715 5.127 0 5.31 4.05 5.287 4.737 0 4.486-5.997 5.196-6.8 7.508-.045.16.024.252.207.252h5.768zM18.75 78.79c0 1.566-1.27 2.835-2.835 2.835H2.835C1.27 81.625 0 80.355 0 78.79V65.335C0 63.77 1.27 62.5 2.835 62.5h13.08c1.567 0 2.836 1.27 2.836 2.835V78.79zM44.5 78.79c0 1.566-1.27 2.835-2.835 2.835h-13.08c-1.566 0-2.835-1.27-2.835-2.835V65.335c0-1.566 1.27-2.835 2.835-2.835h13.08c1.567 0 2.836 1.27 2.836 2.835V78.79zM71.5 78.79c0 1.566-1.27 2.835-2.835 2.835h-13.08c-1.566 0-2.835-1.27-2.835-2.835V65.335c0-1.566 1.27-2.835 2.835-2.835h13.08c1.567 0 2.836 1.27 2.836 2.835V78.79zM45.25 30.915c0 1.566-1.27 2.835-2.835 2.835h-13.08c-1.566 0-2.835-1.27-2.835-2.835V17.46c0-1.566 1.27-2.835 2.835-2.835h13.08c1.567 0 2.836 1.27 2.836 2.835v13.455zM63.312 56.875c-1.38 0-2.5-1.12-2.5-2.5v-7.5h-50v7.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-10c0-1.38 1.12-2.5 2.5-2.5h55c1.38 0 2.5 1.12 2.5 2.5v10c0 1.38-1.12 2.5-2.5 2.5z" fill="#FFF"></path>
              <path d="M35.812 56.875c-1.38 0-2.5-1.12-2.5-2.5v-15c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v15c0 1.38-1.12 2.5-2.5 2.5z" fill="#FFF"></path>
            </svg>
            <span className="header-description">PROFESIONALIZACIÓN DE CLUBES Y CAMPEONATOS</span>
          </a>
        </Link>
        <Link href='desarrollo-infraestructura'>
          <a className="header-conteiner-link header-animate-link">
            <svg className="header-conteiner-icon" id="infraestructure" xmlns="http://www.w3.org/2000/svg" width="88.116" viewBox="0 0 88.116 86.583">
              <path d="M13.783 43.167h15.083s3.688 5.75 9.354 5.833c0 0 5.21-.103 7.938-2.062 2.438-1.75 3.958-3.77 3.958-3.77H64.7L71.533 81H57.7l-1.5-12.833-32.833.25L21.72 81H7.616l6.167-37.833z" fill="#FFF"></path>
              <path fill="#FFF" d="M25.033 70.667H53.7L55.116 81H24.2M64.116 40.417L60.45 13.333h-8.667v8.917l-25-.167.417-8.75h-9.333L14.2 40.417h14.75s2.458-5.833 10.958-5.667 10.375 5.667 10.375 5.667h13.833z"></path>
              <path fill="#FFF" d="M29.616 13.333h19.917v6.833H29.616zM32.24 40.417s3.168-4.25 8.668-3.5 6 3.5 6 3.5H32.24zM31.783 43.167h15.125S44.825 46.584 39.575 47s-7.792-3.833-7.792-3.833z"></path>
              <path d="M78.702 86.583H0L13.688 7.917H66.4l12.302 78.666zm-75.136-3h71.63L63.833 10.917H16.21L3.567 83.583z" fill="#FFF"></path>
              <circle cx="69.554" cy="18.562" r="18.562" fill="#E91D00"></circle>
              <path d="M62.86 15.893c-.41-.09-.617-.343-.595-.755.138-1.648 1.007-4.715 5.722-4.715 3.686 0 5.448 2.357 5.333 5.013-.09 1.808-.938 2.884-1.625 3.296-.16.068-.16.16 0 .23.687.41 1.534 1.487 1.625 3.295.115 2.655-1.647 5.013-5.333 5.013-4.715 0-5.584-3.067-5.722-4.715-.022-.412.184-.664.595-.756l2.61-.573c.457-.09.686.115.755.572.16.937.687 1.533 1.762 1.533.916 0 1.625-.893 1.145-1.83-.343-.643-1.145-1.054-2.243-1.19-.458-.047-.688-.253-.688-.688v-1.557c0-.435.23-.64.687-.687 1.098-.137 1.9-.55 2.242-1.19.504-.937-.23-1.83-1.145-1.83-1.075 0-1.602.595-1.762 1.533-.07.458-.298.664-.756.572l-2.61-.572z" fill="#FFF"></path>
            </svg>
            <span className="header-description">DESARROLLO INFRAESTRUCTURA</span>
          </a>
        </Link>
        <Link href='fortalecimiento-institucional'>
          <a className="header-conteiner-link header-animate-link">
            <svg className="header-conteiner-icon" id="institutional" xmlns="http://www.w3.org/2000/svg" width="103.75" viewBox="0 0 103.75 85.089">
              <path d="M38.625 83.25s3.383-2.562 3.383-4.125.554-2.125.554-2.125 3.98 2.923 2.5 6.25c-1.25 2.812-5.187 2.062-6.437 0zM34.158 73.413c1.144-1.07 2.938-1.008 4.007.136l.68.777c1.068 1.144 1.007 2.938-.137 4.007l-2.223 2.117c-1.144 1.07-2.938 1.01-4.007-.135l-.678-.778c-1.07-1.144-1.008-2.938.136-4.007l2.222-2.117zM33.25 15.125s17.125-.375 21.75-2.25 5.5-2.75 5.5-2.75l22.25 22.25s-.625 7.125-3.625 12-5.75 7.375-5.75 7.375L45 23.375s-12.25.5-15.625-.25-5.375-8.875 3.875-8z" fill="#FFF"></path>
              <path d="M21.875 11.125l3.5 2.375s-2.625 3.875-1.75 8.375 7 5.25 9.625 5.375 11.125 0 11.125 0L75.5 58.875s1.75 4 0 5.625-4.125 1.875-8.375-2-11.75-12.875-11.75-12.875-2.25-2-3.5-.25 1.75 5.25 6 9.375 13 12.5 13 12.5 1.625 3.485.125 5.43-4.75 1.57-8-1.68-15.625-16.5-15.625-16.5-2.5-2.625-4.125-.5 4.375 6.5 6.5 8.75S59 76 59 76s1.375 3.125-.375 5S53 81.75 50 79 37.125 66.25 37.125 66.25s0-3-2.125-4.125S32.125 61 32.125 61s.625-5.875-1.75-7.75-8.5-.625-8.5-.625-.875-6.45-5.25-6.1-6.25 3.6-6.25 3.6l-2-5.625L1 36.75s-2.25-2.25 0-4.375 20.875-21.25 20.875-21.25z" fill="#FFF"></path>
              <circle cx="85.188" cy="18.562" r="18.562" fill="#E91D00"></circle>
              <path d="M23.61 55.258c1.143-1.07 2.937-1.008 4.006.136l.68.778c1.068 1.144 1.007 2.938-.137 4.007l-6.278 6.438c-1.144 1.07-2.938 1.008-4.007-.136l-.68-.778c-1.068-1.144-1.007-2.938.137-4.007l6.277-6.44zM28.617 64.74c1.144-1.068 2.938-1.007 4.007.137l.68.778c1.068 1.144 1.007 2.938-.137 4.007L29.07 73.7c-1.145 1.07-2.94 1.008-4.008-.136l-.68-.778c-1.068-1.144-1.007-2.938.137-4.007l4.097-4.04zM13.533 51.122c1.144-1.07 2.938-1.008 4.007.136l.68.778c1.068 1.144 1.007 2.938-.137 4.007L15.07 58.7c-1.145 1.07-2.94 1.008-4.008-.136l-.68-.778c-1.068-1.144-1.007-2.938.137-4.007l3.013-2.658zM89.824 20.678c0 .435-.23.687-.687.687h-.274c-.436 0-.688.23-.688.687v4.12c0 .435-.23.687-.687.687h-2.563c-.435 0-.687-.253-.687-.688v-4.12c0-.458-.23-.687-.687-.687h-5.79c-.435 0-.687-.252-.687-.687v-3.204c0-.023.07-.206.138-.458l1.97-3.914c.183-.366.366-.55.777-.55h2.52c.502 0 .8.32.57.778l-1.922 3.846c-.046.16 0 .252.183.252h2.243c.46 0 .688-.252.688-.687v-5.676c0-.458.252-.687.687-.687h2.563c.458 0 .687.23.687.687v5.677c0 .436.252.688.688.688h.274c.458 0 .687.23.687.687v2.563z" fill="#FFF"></path>
            </svg>
            <span className="header-description">FORTALECIMIENTO INSTITUCIONAL</span>
          </a>
        </Link>
      </nav>
    </header>
    {children}
    <footer className="centenary-footer">
      <div className="container centenary-footer-conteiner">
        <h2 className="centenary-footer-title">COMENZO EL CAMBIO
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
