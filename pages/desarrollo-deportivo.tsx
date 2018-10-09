import Layout from '../components/Layout';
import { titlePage } from './../lib/const';

const titleView = `Desarrollo deportivo ${titlePage}`;

export default () => (
  <Layout title={ titleView }>
    <section className="section is-white">
      <div className="section-container">
        <h3 className="section-header--title" id="desarrollo-deportivo">DESARROLLO DEPORTIVO</h3>
        <div className="section-container-items slick-initialized slick-slider">
          <div className="section-container-item slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{width: '1260px'}}>
            <div className="large-2 medium-2 small-12">
              <svg className="section-icon" xmlns="http://www.w3.org/2000/svg" width="82.781" height="63.31" viewBox="0 0 82.781 63.31">
                <g fill="#FFF">
                  <path d="M79.323 20.297c-2.062-4.53-11.382-5.805-17.57-4.93s-5.25 6.625-5.25 6.625l-2.5 3.562-9.812-1.062c-2.25-.244-2.56 1.125-2.75 2.688s1.94 2.688 1.94 2.688 7.687 1.312 10.187 1.812 4-1.125 4-1.125l1.562-2.5 3.374 8.125-3.875 2.562c-1 .938-2.626 3.75-2.626 3.75L48.63 56.43c-1.69 3.562-1.126 5.75 1.81 6.562s4.626-2.875 4.626-2.875l6.312-11.75s7.375 8.938 9.437 11.25 4.875 3.938 6.875 2 .188-4.812.188-4.812l-10.5-12.438s5.125-4.875 6.75-6.125.375-4.125.375-4.125-3.188-7.812-4.062-9.81.75-2.44.75-2.44l3.063.875 4.438 10.25c1.32.803 2.404.513 3.19-.035.924-.646.902-2.434.902-2.434s-1.397-5.695-3.46-10.226z"></path>
                  <circle cx="59.828" cy="6.027" r="6.027"></circle>
                  <circle cx="38.379" cy="9.527" r="6.027"></circle>
                  <circle cx="39.805" cy="57.277" r="6.027"></circle>
                  <path d="M46.587 33.137l-9.5-3-1.417-3.083.833-3.167c.5-2.167-.167-4.5-2.25-6.82-2.083-2.322-8.917-2.346-8.917-2.346s-2.833-1-5.167-1.916c-2.334-.917-3.918 1.25-3.918 1.25l-7.083 7.5c-3.61 3.822.166 5.333.166 5.333 2.917.917 4.25-2 4.25-2l6-5.5 4.22.667-9.304 9.5c-3 2.417-.833 5.667-.833 5.667l2.832 6.584L3.17 49.137C-2.247 52.22.92 55.554.92 55.554c2 2.417 5.667.25 5.667.25l17.417-9.833 2.5 1.918s-1.417 4.833-2.583 8.75c-1.166 3.917-.082 6.5 2.834 6.667 2.917.167 3.667-2.917 3.667-2.917s2.168-8.667 2.668-11.75-.333-4.083-.333-4.083-5.333-6-6.583-7.333c-1.25-1.333-.167-2.75-.167-2.75l5-4.833s.083 1.166.333 3.166 2 2.333 2 2.333 7.167 2.166 10.167 2.75 3.833-1.418 3.833-1.418c.915-2.918-.75-3.335-.75-3.335z"></path>
                </g>
              </svg>
            </div>
            <div className="large-5 medium-5 small-12">
                <h4 className="section-subtitle-minor">NUEVA UNIDAD TÉCNICA DE MAYORES</h4>
                <p className="section-summary">¿Qué se está trabajando?</p>
                <ul className="section-list">
                  <li className="section-list__item">Preparar a la Selección Mayor para las diferentes competencias internacionales.</li>
                  <li className="section-list__item">Crear una plataforma de alto nivel deportivo y profesional que permita la progresiva incorporación de jóvenes talentos que sean valiosos para la Selección Mayor.</li>
                </ul>
            </div>
            <div className="large-4 medium-4 small-12">
              <img className="section-img" src="./static/img/pilares/deportivo-slide-01.jpg" />
              <p className="section-photo">DIRECTOR: RICARDO GARECA <br />EQUIPO TÉCNICO: XXXX</p>
            </div>
            <div className="large-1 medium-1 small-12">
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="section-container-item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" role="option" aria-describedby="slick-slide00" style={{width: '1260px'}}>
            <div className="large-2 medium-2 small-12">
            </div>
            <div className="large-4 medium-5 small-12">
              <h4 className="section-subtitle-minor is-previous">Ya estamos desarrollando un Proyecto Futbolístico Integrado.</h4><img className="section-img" src="./static/img/pilares/deportivo-slide-03.jpg" />
              <ul className="section-list fpf-70">
                <li className="section-list__item">Creación de la dirección deportiva</li>
                <li className="section-list__item">unidad técnica de mAYORES</li>
                <li className="section-list__item">unidad técnica de mENORES</li>
              </ul>
            </div>
            <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/deportivo-slide-01.jpg" /><img className="section-img" src="./static/img/pilares/deportivo-slide-02.jpg" /></div>
            <div className="large-2 medium-1 small-12">
                <p>&nbsp;</p>
            </div>
          </div>
          <div className="section-container-item slick-slide" data-slick-index="1" aria-hidden="true" role="option" aria-describedby="slick-slide01" style={{width: '1260px'}}>
            <div className="large-2 medium-2 small-12">
            </div>
            <div className="large-5 medium-5 small-12">
              <h4 className="section-subtitle-minor">DIRECCIÓN DEPORTIVA</h4>
              <p className="section-summary">Hemos creado la Dirección Deportiva para que todo el proyecto futbolístico del Plan Centenario esté articulado hacia un mismo objetivo.</p>
              <p className="section-summary">¿Qué se está trabajando?</p>
              <ul className="section-list">
                <li className="section-list__item">Diseñar y ejecutar la Estrategia Deportiva Nacional integrando los objetivos estratégicos de las categorías mayores, menores e infantiles.</li>
                <li className="section-list__item">Generar las mejores condiciones para la participación de las selecciones nacionales de Perú en competencias internacionales.</li>
                <li className="section-list__item">Implementar y supervisar el Plan de Menores FPF.</li>
                <li className="section-list__item">Ser nexo oficial entre directivos y los comandos técnicos.</li>
                <li className="section-list__item">Desarrollar estrategias de Fútbol Femenino, Futsal y Fútbol Playa.</li>
              </ul>
            </div>
            <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/deportivo/deportivo-01.jpg" />
              <p className="section-photo">DIRECTOR DEPORTIVO: JUAN CARLOS OBLITAS</p>
            </div>
            <div className="large-1 medium-1 small-12">
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="section-container-item slick-slide" data-slick-index="2" aria-hidden="true" role="option" aria-describedby="slick-slide02" style={{width: '1260px'}}>
            <div className="large-2 medium-2 small-12">
            </div>
            <div className="large-5 medium-5 small-12">
              <h4 className="section-subtitle-minor">UNIDAD TÉCNICA DE MENORES</h4>
              <p className="section-summary">¿Qué se está trabajando?</p>
              <ul className="section-list">
                <li className="section-list__item">Creación, ejecución y supervisión del Plan de Menores FPF.</li>
                <li className="section-list__item">Supervisión de los comandos técnicos de las selecciones menores.</li>
                <li className="section-list__item">Supervisar estrategias de Visorías en los Centros de Desarrollo para encontrar y formar talentos en todos los rincones del territorio nacional.</li>
                <li className="section-list__item">Creación y Supervisión de las nuevas selecciones regionales Sub 14 y Sub 16, así como del Torneo en el que competirán anualmente en todo el país: Reto Regional. Dichas selecciones regionales alimentarán a las categorías de menores de los Clubes Profesionales.</li>
                <li className="section-list__item">Creación y Supervisión del Torneo de Menores Sub15 y Sub17 de Clubes Profesionales.</li>
                <li className="section-list__item">Articular los diferentes Torneos de menores: “Creciendo con el Fútbol”, “Copa Federación”, Torneos Interescolares, “Copa Perú”, Torneos independientes, entre otros.</li>
              </ul>
            </div>
            <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/deportivo/deportivo-04.jpg" />
              <p className="section-photo">DIRECTOR: DANIEL AHMED
                <br />EQUIPO TÉCNICO:XXXX</p>
            </div>
            <div className="large-1 medium-1 small-12">
                <p>&nbsp;</p>
            </div>
          </div>
          <div className="section-container-item slick-slide" data-slick-index="3" aria-hidden="true" role="option" aria-describedby="slick-slide03" style={{width: '1260px'}}>
            <div className="large-2 medium-2 small-12">
            </div>
            <div className="large-5 medium-5 small-12">
              <h4 className="section-subtitle-minor">NUEVA UNIDAD TÉCNICA DE MAYORES</h4>
              <p className="section-summary">¿Qué se está trabajando?</p>
              <ul className="section-list">
                <li className="section-list__item">Preparar a la Selección Mayor para las diferentes competencias internacionales.</li>
                <li className="section-list__item">Crear una plataforma de alto nivel deportivo y profesional que permita la progresiva incorporación de jóvenes talentos que sean valiosos para la Selección Mayor.</li>
              </ul>
            </div>
            <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/deportivo/deportivo-02.jpg" />
              <p className="section-photo">DIRECTOR: RICARDO GARECA
                <br />EQUIPO TÉCNICO: XXXX</p>
            </div>
            <div className="large-1 medium-1 small-12">
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
