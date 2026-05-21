import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../../context/AuthContext';

import userDefault from '../../../assets/userDefault.jpg';
import './candidateProfilePage.css';

const CandidateProfilePage = () => {
  // Extraemos los datos del authcontext
  const { user, experience, study, language, offer, user_offer } =
    useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="profile-candidate">
        <section>
          <div>
            <img className="logo-profile" src="../../../assets/logo.svg" />
          </div>
          <h4>{user?.name}</h4>
          <button>perfil</button>
          <button>candidaturas</button>
          <button>ajustes</button>
        </section>

        <section>
          <article>
            <div>
              <h2>Mi perfil</h2>
              <p>
                Completa tu perfil para mejorar tu visibilidad y facilitar que
                las empresas te encuentren.
              </p>
              <button>Guardar Cambios</button>
            </div>
          </article>
          {/* TARJETA PRINCIPAL DEL USUARIO */}
          <article>
            <div>
              <img
                className="profile-img"
                src={
                  user?.avatar
                    ? `${import.meta.env.VITE_SERVER_IMAGES_URL}/user/${user.avatar}`
                    : userDefault
                }
              />
              <div>
                <h4>
                  Nombre: {user?.name} {user?.lastname}
                </h4>
                <span>En busca de empleo</span>
                <span>
                  Teléfono: {user?.phone_number || 'No especificado'}{' '}
                </span>
                <span>Email: {user?.email}</span>
              </div>
              <div>
                <button>Editar perfil</button>
              </div>
            </div>
          </article>
          {/* DETALLES DEL CANDIDATO */}
          <div>
            <article>
              <div>
                <h4>Acerca de mí</h4>
                <p>{user?.about_me || 'Sin descripción disponible.'}</p>
              </div>
            </article>
            <article>
              <div>
                <h4>Experiencia</h4>
                <button>Editar</button>
                <div>
                  <span>
                    {experience?.title || 'Sin experiencia registrada'}
                  </span>
                  <p>
                    {experience?.start_month_year} {experience?.end_month_year}
                  </p>
                  <p>{experience?.description}</p>
                </div>
                <button>+ Agregar experiencia</button>
              </div>
            </article>
            <article>
              <div>
                <h4>Educación</h4>
                <button>Editar</button>
                <div>
                  <span>{study?.studies || 'Sin educación registrada'}</span>
                  <p>
                    {study?.start_month_year} {study?.end_month_year}
                  </p>
                  <p>{study?.description}</p>
                </div>
              </div>
            </article>
          </div>

          <div>
            <article>
              <div>
                <h4>¿Estas buscando empleo?</h4>
                <span>{user_offer?.status || 'No especificado'}</span>
                <p>
                  Si no indicas que buscas empleo activamente tu usuario no
                  saldrá en la búsqueda de las empresas
                </p>
              </div>
            </article>
            <article>
              <div>
                <div>
                  <h4>CV y portafolio</h4>
                  <span>CV subido</span>
                </div>
                <div>
                  <span>Curriculum Vitae</span> <button>Ver Cv</button>
                </div>
                <div>
                  <button>Subir nuevo CV</button>
                </div>
                <hr />
                <span>Portfolio</span>
                <a href={user?.portfolio_url || '#'}>linkedlink</a>
              </div>
            </article>
            <article>
              <div>
                <h4>Preferencias</h4>
                <div>
                  <span>Modalidad</span>
                  <span>{offer?.modality || 'No especificada'}</span>
                </div>
                <div>
                  <span>Ubicación</span>
                  <span>{user?.location_pref || 'No especificada'}</span>
                </div>
                <div>
                  <span>Jornada</span>
                  <span>{user?.modality || 'No especificada'}</span>
                </div>
              </div>
            </article>
            <article>
              <div>
                <h4>Idiomas</h4>
                <div>
                  <span>{language?.name || 'No especificado'}</span>
                  <span>{language?.level}</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default CandidateProfilePage;
