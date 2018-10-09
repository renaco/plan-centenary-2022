import Link from 'next/link';
import Layout from '../components/Layout';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default () => (
  <Layout title="Fortalecimiento Institucional | Website">
      <section className="section is-red">
          <div className="section-container">
              <h3 className="section-header--title" id="fortalecimiento-institucional">FORTALECIMIENTO INSTITUCIONAL<br />-</h3>
              <div className="section-container-items slick-initialized slick-slider">
                    <div className="section-container-item slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" >
                        <div className="large-2 medium-2 small-12 hide-desktop">
                            <svg className="section-icon" xmlns="http://www.w3.org/2000/svg" width="71.5" height="67" viewBox="0 0 71.5 67">
                                <g fill="#FFF">
                                    <path d="M15.915 47.875H2.835C1.27 47.875 0 49.145 0 50.71v13.456C0 65.73 1.27 67 2.835 67h13.08c1.567 0 2.836-1.27 2.836-2.835V50.71c0-1.566-1.27-2.835-2.835-2.835zM41.665 47.875h-13.08c-1.566 0-2.835 1.27-2.835 2.835v13.456c0 1.566 1.27 2.835 2.835 2.835h13.08c1.567 0 2.836-1.268 2.836-2.834V50.71c0-1.566-1.27-2.835-2.835-2.835zM68.665 47.875h-13.08c-1.566 0-2.835 1.27-2.835 2.835v13.456c0 1.566 1.27 2.835 2.835 2.835h13.08c1.567 0 2.836-1.268 2.836-2.834V50.71c0-1.566-1.27-2.835-2.835-2.835zM29.335 19.125h13.08c1.567 0 2.836-1.27 2.836-2.835V2.835C45.25 1.27 43.98 0 42.416 0h-13.08C27.77 0 26.5 1.27 26.5 2.835V16.29c0 1.566 1.27 2.835 2.835 2.835zM8.312 42.25c1.38 0 2.5-1.12 2.5-2.5v-7.5h22.5v7.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5v-7.5h22.5v7.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5v-10c0-1.38-1.12-2.5-2.5-2.5h-25v-2.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v2.5h-25c-1.38 0-2.5 1.12-2.5 2.5v10c0 1.38 1.12 2.5 2.5 2.5z"></path>
                                </g>
                            </svg>
                            <div className="section-number">4</div>
                        </div>
                        <div className="large-1 medium-1 small-12 hide-mobile">
                            <p>&nbsp;</p>
                        </div>
                        <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/fortalecimiento/fortalecimiento-07.jpg" /></div>
                        <div className="large-5 medium-5 small-12">
                            <h4 className="section-subtitle-minor">Responsabilidad Social</h4>
                            <p className="section-summary is--working">¿Qué se está trabajando?</p>
                            <ul className="section-list">
                                <li className="section-list__item">Diseñar estrategias que potencien al fútbol como motor de cambio social.</li>
                                <li className="section-list__item">Difundir y compartir campañas de diferentes organizaciones sociales aprovechando el impacto mediático del fútbol.</li>
                                <li className="section-list__item">Acercar a las selecciones menores con diferentes centros sociales que permitan consolidar una formación integral en dichas categorías.</li>
                            </ul>
                        </div>
                        <div className="large-2 medium-2 small-12 hide-mobile">
                        </div>
                    </div>
                    <div className="section-container-item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" role="option" aria-describedby="slick-slide30" >
                        <div className="large-1 medium-1 small-12">
                            <p>&nbsp;</p>
                        </div>
                        <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/pilar-4.jpg" />
                            <ul className="section-list">
                                <li className="section-list__item">modelo de gobierno corporativo</li>
                                <li className="section-list__item">nuevo plan comercial</li>
                                <li className="section-list__item">recuperación marca fpf</li>
                                <li className="section-list__item">nuevas plataformas de comunicación</li>
                                <li className="section-list__item">comisión ad honorem de apoyo</li>
                                <li className="section-list__item">convenios institucionales</li>
                                <li className="section-list__item">responsabilidad social</li>
                            </ul>
                        </div>
                        <div className="large-4 medium-4 small-12">
                            <h4 className="section-subtitle-minor is-previous">Ya estamos recuperando la reputación de la marca FPF trabajando con transparencia, generando confianza en los sponsors y asegurando una efectiva comunicación con nuestros stakeholders.</h4></div>
                        <div className="large-2 medium-2 small-12">
                        </div>
                    </div>
                    <div className="section-container-item slick-slide" data-slick-index="1" aria-hidden="true" role="option" aria-describedby="slick-slide31" >
                        <div className="large-2 medium-2 small-12 hide-desktop">
                        </div>
                        <div className="large-1 medium-1 small-12 hide-mobile">
                            <p>&nbsp;</p>
                        </div>
                        <div className="large-4 medium-4 small-12"><img className="section-img section-img__shield" src="./static/img/pilares/fortalecimiento/fortalecimiento-01.png" /></div>
                        <div className="large-5 medium-5 small-12">
                            <h4 className="section-subtitle-minor">Modelo de Gobierno Corporativo</h4>
                            <ul className="section-list">
                                <li className="section-list__item">Secretaria General y adjunta.</li>
                                <li className="section-list__item">Gerencia Comercial y de Marketing.</li>
                                <li className="section-list__item">Gerencia de Comunicaciones.</li>
                                <li className="section-list__item">Gerencia de Administración y Finanzas.</li>
                                <li className="section-list__item">Gerencia de Recursos Humanos.</li>
                                <li className="section-list__item">Gerencia de Seguridad.</li>
                                <li className="section-list__item">Dirección de Desarrollo.</li>
                                <li className="section-list__item">Gerencia de Licencias y Proyectos.</li>
                            </ul>
                        </div>
                        <div className="large-2 medium-2 small-12 hide-mobile">
                        </div>
                    </div>
                    <div className="section-container-item slick-slide" data-slick-index="2" aria-hidden="true" role="option" aria-describedby="slick-slide32" >
                        <div className="large-2 medium-2 small-12 hide-desktop">
                        </div>
                        <div className="large-1 medium-1 small-12 hide-mobile">
                            <p>&nbsp;</p>
                        </div>
                        <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/fortalecimiento/fortalecimiento-02.jpg" /></div>
                        <div className="large-5 medium-5 small-12">
                            <h4 className="section-subtitle-minor">Nuevo Plan Comercial</h4>
                            <p className="section-summary is--working">¿Qué se está trabajando?</p>
                            <ul className="section-list">
                                <li className="section-list__item">Diseñar y ejecutar el Plan Anual de Patrocinios.</li>
                                <li className="section-list__item">Desarrollar estrategias de fidelización de los Sponsors.</li>
                                <li className="section-list__item">Diseñar estrategias de captación de nuevos sponsors.</li>
                                <li className="section-list__item">Desarrollo de plataformas y productos de comunicación de interés para los sponsors.</li>
                            </ul>
                        </div>
                        <div className="large-2 medium-2 small-12 hide-mobile">
                        </div>
                    </div>
                    <div className="section-container-item slick-slide" data-slick-index="3" aria-hidden="true" role="option" aria-describedby="slick-slide33" >
                        <div className="large-2 medium-2 small-12 hide-desktop">
                        </div>
                        <div className="large-1 medium-1 small-12 hide-mobile">
                            <p>&nbsp;</p>
                        </div>
                        <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/fortalecimiento/fortalecimiento-03.jpg" />
                            <p className="section-photo">Campaña de Imagen 2016</p>
                        </div>
                        <div className="large-5 medium-5 small-12">
                            <h4 className="section-subtitle-minor">Recuperación de la Marca FPF</h4>
                            <p className="section-summary is--working">¿Qué se está trabajando?</p>
                            <ul className="section-list">
                                <li className="section-list__item">Elaboración Plan Anual de Marketing FPF.</li>
                                <li className="section-list__item">Diseñar y ejecutar campaña relanzamiento Marca FPF.</li>
                                <li className="section-list__item">Diseñar y ejecutar campaña de Imagen Institucional.</li>
                            </ul>
                        </div>
                        <div className="large-2 medium-2 small-12 hide-mobile">
                        </div>
                    </div>
                    <div className="section-container-item slick-slide" data-slick-index="4" aria-hidden="true" role="option" aria-describedby="slick-slide34" >
                        <div className="large-2 medium-2 small-12 hide-desktop">
                        </div>
                        <div className="large-1 medium-1 small-12 hide-mobile">
                            <p>&nbsp;</p>
                        </div>
                        <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/fortalecimiento/fortalecimiento-04.jpg" /></div>
                        <div className="large-5 medium-5 small-12">
                            <h4 className="section-subtitle-minor">Estrategia de Comunicación – Lanzamiento nuevas plataformas</h4>
                            <p className="section-summary is--working">¿Qué se está trabajando?</p>
                            <ul className="section-list">
                                <li className="section-list__item">Creación de plataforma de medios propios: Web, Redes Sociales, Revista, etc.</li>
                                <li className="section-list__item">Generación de contenido relevante para compartir los avances del Plan Centenario 2022.</li>
                                <li className="section-list__item">Mantener una relación cercana con los Medios de Comunicación.</li>
                            </ul>
                        </div>
                        <div className="large-2 medium-2 small-12 hide-mobile">
                        </div>
                    </div>
                    <div className="section-container-item slick-slide" data-slick-index="5" aria-hidden="true" role="option" aria-describedby="slick-slide35" >
                        <div className="large-2 medium-2 small-12 hide-desktop">
                        </div>
                        <div className="large-1 medium-1 small-12 hide-mobile">
                            <p>&nbsp;</p>
                        </div>
                        <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/fortalecimiento/fortalecimiento-05.jpg" />
                            <p className="section-photo">Comisiones Ad Honorem</p>
                        </div>
                        <div className="large-5 medium-5 small-12">
                            <h4 className="section-subtitle-minor">Creación de Comisiones Ad Honorem de Apoyo</h4>
                            <p className="section-summary is--working">¿Qué se está trabajando?</p>
                            <ul className="section-list">
                                <li className="section-list__item">Desarrollo Comisión de Auditoría y Ética.</li>
                                <li className="section-list__item">Desarrollo Comisión Legal.</li>
                                <li className="section-list__item">Desarrollo Comisión de Justicia.</li>
                                <li className="section-list__item">Desarrollo Comité Consultivo de Gestión.</li>
                            </ul>
                        </div>
                        <div className="large-2 medium-2 small-12 hide-mobile">
                        </div>
                    </div>
                    <div className="section-container-item slick-slide" data-slick-index="6" aria-hidden="true" role="option" aria-describedby="slick-slide36" >
                        <div className="large-2 medium-2 small-12 hide-desktop">
                        </div>
                        <div className="large-1 medium-1 small-12 hide-mobile">
                            <p>&nbsp;</p>
                        </div>
                        <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/fortalecimiento/fortalecimiento-06.jpg" /></div>
                        <div className="large-5 medium-5 small-12">
                            <h4 className="section-subtitle-minor">Convenios Institucionales</h4>
                            <p className="section-summary is--working">¿Qué se está trabajando?</p>
                            <ul className="section-list">
                                <li className="section-list__item">Firmas de Convenios Internacionales que consoliden la reputación de la marca FPF.</li>
                                <li className="section-list__item">Consolidación del convenio con Transparencia Internacional y Pro Ética.</li>
                            </ul>
                        </div>
                        <div className="large-2 medium-2 small-12 hide-mobile">
                        </div>
                    </div>
                    <div className="section-container-item slick-slide" data-slick-index="7" aria-hidden="true" role="option" aria-describedby="slick-slide37" >
                        <div className="large-2 medium-2 small-12 hide-desktop">
                        </div>
                        <div className="large-1 medium-1 small-12 hide-mobile">
                            <p>&nbsp;</p>
                        </div>
                        <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/fortalecimiento/fortalecimiento-07.jpg" /></div>
                        <div className="large-5 medium-5 small-12">
                            <h4 className="section-subtitle-minor">Responsabilidad Social</h4>
                            <p className="section-summary is--working">¿Qué se está trabajando?</p>
                            <ul className="section-list">
                                <li className="section-list__item">Diseñar estrategias que potencien al fútbol como motor de cambio social.</li>
                                <li className="section-list__item">Difundir y compartir campañas de diferentes organizaciones sociales aprovechando el impacto mediático del fútbol.</li>
                                <li className="section-list__item">Acercar a las selecciones menores con diferentes centros sociales que permitan consolidar una formación integral en dichas categorías.</li>
                            </ul>
                        </div>
                        <div className="large-2 medium-2 small-12 hide-mobile">
                        </div>
                    </div>
                    <div className="section-container-item slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" >
                        <div className="large-1 medium-1 small-12">
                            <p>&nbsp;</p>
                        </div>
                        <div className="large-4 medium-4 small-12"><img className="section-img" src="./static/img/pilares/pilar-4.jpg" />
                            <ul className="section-list">
                                <li className="section-list__item">modelo de gobierno corporativo</li>
                                <li className="section-list__item">nuevo plan comercial</li>
                                <li className="section-list__item">recuperación marca fpf</li>
                                <li className="section-list__item">nuevas plataformas de comunicación</li>
                                <li className="section-list__item">comisión ad honorem de apoyo</li>
                                <li className="section-list__item">convenios institucionales</li>
                                <li className="section-list__item">responsabilidad social</li>
                            </ul>
                        </div>
                        <div className="large-4 medium-4 small-12">
                            <h4 className="section-subtitle-minor is-previous">Ya estamos recuperando la reputación de la marca FPF trabajando con transparencia, generando confianza en los sponsors y asegurando una efectiva comunicación con nuestros stakeholders.</h4></div>
                        <div className="large-2 medium-2 small-12">
                        </div>
                    </div>
              </div>
          </div>
      </section>
  </Layout>
)
