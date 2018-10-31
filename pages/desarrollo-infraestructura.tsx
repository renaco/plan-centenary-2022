import Layout from '../components/Layout';
import { titlePage } from './../lib/const';
import { SeparatorStyled } from './../components/Separator'

const titleView = `Desarrollo infraestructura ${titlePage}`;

export default () => (
  <Layout title={titleView}>
    <section className="section is-white">
      <div className="section-container">
        <h3 className="section-header--title">INFRAESTRUCTURA<br />-</h3>
        <div className="section-container-items slick-initialized slick-slider">
          <div className="section-container-item slick-slide slick-current slick-active">
            <div className="large-2 medium-2 small-12">
              <svg className="section-icon" xmlns="http://www.w3.org/2000/svg" width="78.702" height="78.666" viewBox="0 0 78.702 78.666">
                <path d="M13.783 35.25h15.083s3.688 5.75 9.354 5.833c0 0 5.21-.103 7.938-2.062 2.438-1.75 3.958-3.77 3.958-3.77H64.7l6.833 37.833H57.7L56.2 60.25l-32.834.25-1.646 12.583H7.616l6.167-37.833z" fill="#FFF"></path>
                <path fill="#FFF" d="M25.033 62.75H53.7l1.416 10.333H24.2M64.116 32.5L60.45 5.416h-8.667v8.917l-25-.167.417-8.75h-9.333L14.2 32.5h14.75s2.458-5.833 10.958-5.667S50.283 32.5 50.283 32.5h13.833z"></path>
                <path fill="#FFF" d="M29.616 5.417h19.917v6.833H29.616zM32.24 32.5s3.168-4.25 8.668-3.5 6 3.5 6 3.5H32.24zM31.783 35.25h15.125s-2.083 3.417-7.333 3.833-7.792-3.833-7.792-3.833z"></path>
                <path d="M78.702 78.666H0L13.688 0H66.4l12.302 78.666zm-75.136-3h71.63L63.833 3H16.21L3.567 75.666z" fill="#FFF"></path>
              </svg>
              <div className="section-number">3</div>
            </div>
            <div className="large-4 medium-4 small-12">
              <h4 className="section-subtitle-minor is-previous">Ya estamos trabajando para que nuestro fútbol tengan una infraestructura de primer nivel.</h4>
              <img className="section-img" src="./static/img/pilares/infraestructura-slide-01.jpg" />
            </div>
            <div className="large-4 medium-4 small-12">
              <img className="section-img" src="./static/img/pilares/infraestructura-slide-02.jpg" />
              <img className="section-img" src="./static/img/pilares/infraestructura-slide-03.jpg" />
            </div>
          </div>
          <SeparatorStyled />
          <div className="section-container-item slick-slide">
            <div className="large-2 medium-2 small-12">
              <p>&nbsp;</p>
            </div>
            <div className="large-4 medium-5 small-12">
              <h4 className="section-subtitle-minor">Construcción Nueva Videna</h4>
              <p className="section-summary">¿Qué se está trabajando?</p>
              <ul className="section-list">
                <li>Diseño y construcción de la Nueva Videna que le brindará a las selecciones de las diferentes categorías una infraestructura de altísimo nivel:
                  <ul>
                    <li className="section-list__item">12 canchas reglamentarias iluminadas de grass natural.</li>
                    <li className="section-list__item">Zona de hospedaje y concentración.</li>
                    <li className="section-list__item">Zona de preparación física y gimnasio.</li>
                    <li className="section-list__item">Zona de coaching.</li>
                    <li className="section-list__item">Zona de recuperación, etc.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="large-4 medium-4 small-12">
              <img className="section-img" src="./static/img/pilares/infraestructura/infraestructura-01.jpg" />
            </div>
          </div>
          <SeparatorStyled />
          <div className="section-container-item slick-slide">
            <div className="large-2 medium-2 small-12">
              <p>&nbsp;</p>
            </div>
            <div className="large-4 medium-5 small-12">
              <h4 className="section-subtitle-minor">Revisión Infraestructura Deportiva a Nivel Nacional</h4>
              <p className="section-summary">¿Qué se está trabajando?</p>
              <ul className="section-list">
                <li className="section-list__item">Evaluación técnica Centros de Alto Rendimiento en Regiones.</li>
                <li className="section-list__item">Evaluación y potenciación infraestructura clubes y colegios regionales.</li>
                <li className="section-list__item">Evaluación y propuesta de las necesidades de infraestructura en clubes y selecciones regionales.</li>
              </ul>
            </div>
            <div className="large-4 medium-4 small-12">
              <img className="section-img" src="./static/img/pilares/infraestructura/infraestructura-02.jpg" />
            </div>
          </div>
          <div className="section-container-item slick-slide slick-cloned">
            <SeparatorStyled />
            <div className="large-2 medium-2 small-12">
              <p>&nbsp;</p>
            </div>
            <div className="large-4 medium-5 small-12">
              <h4 className="section-subtitle-minor is-previous">Ya estamos trabajando para que nuestro fútbol tengan una infraestructura de primer nivel.</h4>
              <img className="section-img" src="./static/img/pilares/infraestructura-slide-01.jpg" />
            </div>
            <div className="large-4 medium-4 small-12">
              <img className="section-img" src="./static/img/pilares/infraestructura-slide-02.jpg" />
              <img className="section-img" src="./static/img/pilares/infraestructura-slide-03.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
