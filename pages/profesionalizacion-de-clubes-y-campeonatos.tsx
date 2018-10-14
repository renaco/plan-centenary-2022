import Layout from '../components/Layout';
import { SeparatorStyled } from './../components/Separator';
import { titlePage } from './../lib/const';

const titleView = `Profesionalización de clubes y campeonatos ${titlePage}`

export default () => (
  <Layout title={titleView}>
    <section className="section is-red">
      <div className="section-container">
        <h3 className="section-header--title" id="profesionalizacion-de-clubes-y-campeonatos">PROFESIONALIZACIÓN DE CLUBES<br />Y CAMPEONATOS<br />-</h3>
        <div className="section-container-items slick-initialized slick-slider">
          <div className="section-container-item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" role="option" aria-describedby="slick-slide10" >
            <div className="large-1 medium-1 small-12">
              <p>&nbsp;</p>
            </div>
            <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/pilar-2.jpg" />
              <ul className="section-list">
                <li className="section-list__item">CLUBES CON LICENCIA FIFA</li>
                <li className="section-list__item">NUEVO SISTEMA DE CAMPEONATO 1RA DIVISIÓN</li>
                <li className="section-list__item">RENOVACIÓN DE LA COPA PERÚ</li>
                <li className="section-list__item">RENOVACIÓN COMISIÓN NACIONAL DE ARBITROS </li>
              </ul>
            </div>
            <div className="large-4 medium-5 small-12">
              <h4 className="section-subtitle-minor is-previous">Ya estamos trabajando para elevar los estándares de calidad de los clubes y campeonatos profesionales que permitirán mejores condiciones para desarrollar jugadores de primer nivel.</h4></div>
            <div className="large-2 medium-2 small-12 hide-mobile">
              <svg className="section-icon" xmlns="http://www.w3.org/2000/svg" width="71.5" height="67" viewBox="0 0 71.5 67">
                  <g fill="#FFF">
                    <path d="M15.915 47.875H2.835C1.27 47.875 0 49.145 0 50.71v13.456C0 65.73 1.27 67 2.835 67h13.08c1.567 0 2.836-1.27 2.836-2.835V50.71c0-1.566-1.27-2.835-2.835-2.835zM41.665 47.875h-13.08c-1.566 0-2.835 1.27-2.835 2.835v13.456c0 1.566 1.27 2.835 2.835 2.835h13.08c1.567 0 2.836-1.268 2.836-2.834V50.71c0-1.566-1.27-2.835-2.835-2.835zM68.665 47.875h-13.08c-1.566 0-2.835 1.27-2.835 2.835v13.456c0 1.566 1.27 2.835 2.835 2.835h13.08c1.567 0 2.836-1.268 2.836-2.834V50.71c0-1.566-1.27-2.835-2.835-2.835zM29.335 19.125h13.08c1.567 0 2.836-1.27 2.836-2.835V2.835C45.25 1.27 43.98 0 42.416 0h-13.08C27.77 0 26.5 1.27 26.5 2.835V16.29c0 1.566 1.27 2.835 2.835 2.835zM8.312 42.25c1.38 0 2.5-1.12 2.5-2.5v-7.5h22.5v7.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5v-7.5h22.5v7.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5v-10c0-1.38-1.12-2.5-2.5-2.5h-25v-2.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v2.5h-25c-1.38 0-2.5 1.12-2.5 2.5v10c0 1.38 1.12 2.5 2.5 2.5z"></path>
                  </g>
                </svg>
                <div className="section-number">2</div>
            </div>
          </div>
          <SeparatorStyled />
          <div className="section-container-item slick-slide" data-slick-index="1" aria-hidden="true" role="option" aria-describedby="slick-slide11" >
            <div className="large-2 medium-2 small-12 hide-desktop">
            </div>
            <div className="large-1 medium-1 small-12 hide-mobile">
              <p>&nbsp;</p>
            </div>
            <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/reformas/reforma-01.png" />
              <div className="section-photo">Gerente Licencias: Mario Maggi <br />EQUIPO Licencias: XXXX</div>
            </div>
            <div className="large-5 medium-5 small-12">
              <h4 className="section-subtitle-minor">Sistema de licencias FIFA para clubes</h4>
              <p className="section-summary is--working">¿Qué se está trabajando?</p>
              <ul className="section-list">
                <li>Supervisar, capacitar y acompañar a los clubes en la implementación del Sistema de Licencias FIFA, el cual les exige los siguientes criterios:
                  <ol>
                    <li className="section-list__item">Deportivo: Desarrollo de divisiones menores.</li>
                    <li className="section-list__item">Infraestructura: Instalaciones adecuadas para entrenar y competir.</li>
                    <li className="section-list__item">Administración y Personal: Personal calificado para cada tarea.</li>
                    <li className="section-list__item">Financieros: Administraciones eficientes, trasparentes y ordenadas.</li>
                    <li className="section-list__item">Jurídicos: Documentación correcta y al día.</li>
                  </ol>
                </li>
                <li>Los objetivos del Sistema de Licencias son:
                  <ol>
                    <li className="section-list__item">Salvaguardar la credibilidad y la integridad de las competiciones de clubes</li>
                    <li className="section-list__item">Mejorar el nivel de profesionalidad en la familia del fútbol</li>
                    <li className="section-list__item">Promover los valores deportivos de acuerdo con los principios de la deportividad, así como un ambiente seguro para los partidos</li>
                    <li className="section-list__item">Promover la transparencia financiera, de los propietarios y en la gestión de los clubes</li>
                  </ol>
                </li>
              </ul>
            </div>
            <div className="large-2 medium-2 small-12 hide-mobile">
            </div>
          </div>
          <SeparatorStyled />
          <div className="section-container-item slick-slide" data-slick-index="2" aria-hidden="true" role="option" aria-describedby="slick-slide12" >
            <div className="large-2 small-12 hide-desktop">
            </div>
            <div className="large-1 medium-1 small-12 hide-mobile">
              <p>&nbsp;</p>
            </div>
            <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/reformas/reforma-02.jpg" />
              <p className="section-photo">“Copa Movistar” Primera División</p>
            </div>
            <div className="large-5 medium-5 small-12">
              <h4 className="section-subtitle-minor">Nuevo Sistema de Campeonato 1ra División</h4>
              <p className="section-summary is--working">¿Qué se está trabajando?</p>
              <ul className="section-list">
                <li className="section-list__item">Colaborar con la calendarización de la Selección Mayor.</li>
                <li className="section-list__item">Optimizar y simplificar la organización.</li>
              </ul>
            </div>
            <div className="large-2 medium-2 small-12 hide-mobile">
            </div>
          </div>
          <SeparatorStyled />
          <div className="section-container-item slick-slide" data-slick-index="3" aria-hidden="true" role="option" aria-describedby="slick-slide13" >
            <div className="large-2 medium-2 small-12 hide-desktop">
            </div>
            <div className="large-1 medium-1 small-12 hide-mobile">
              <p>&nbsp;</p>
            </div>
            <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/reformas/reforma-03.jpg" />
              <div className="section-photo">LA COPA PERÚ</div>
            </div>
            <div className="large-5 medium-5 small-12">
              <h4 className="section-subtitle-minor">RENOVACIÓN DE LA COPA PERÚ</h4>
              <h4 className="section-summary is--working">¿Qué se está trabajando?</h4>
              <ul className="section-list">
                <li className="section-list__item">Renovación Sistema del Campeonato.</li>
                <li className="section-list__item">Renovación del Reglamento.</li>
                <li className="section-list__item">Nombramiento de nueva comisión a cargo del director Franklin Chuquizuta.</li>
              </ul>
            </div>
            <div className="large-2 medium-2 small-12 hide-mobile">
            </div>
          </div>
          <SeparatorStyled />
          <div className="section-container-item slick-slide" data-slick-index="4" aria-hidden="true" role="option" aria-describedby="slick-slide14" >
            <div className="large-2 medium-2 small-12 hide-desktop">
            </div>
            <div className="large-1 medium-1 small-12 hide-mobile">
              <p>&nbsp;</p>
            </div>
            <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/reformas/reforma-06.jpg" />
              <p className="section-photo">Presidente: Víctor Hugo Rivera</p>
            </div>
            <div className="large-5 medium-5 small-12">
              <h4 className="section-subtitle-minor">Renovación Comisión Nacional de Árbitros</h4>
              <p className="section-summary is--working">¿Qué se está trabajando?</p>
              <ul className="section-list">
                <li className="section-list__item">Nombramiento de nueva junta directiva.</li>
                <li className="section-list__item">Diseño, ejecución y supervisión del Plan de Reformas en la CONAR.</li>
              </ul>
            </div>
            <div className="large-2 medium-2 small-12 hide-mobile">
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
