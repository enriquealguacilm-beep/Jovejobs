import { useContext, useState } from 'react';

import './candidateProfilePage.css';
import { AuthContext } from '../../../context/AuthContext';

const CandidateProfilePage = () => {
  const { user,experience,study,language,offer,user_offer } = useContext(AuthContext);

  return (
    <>
    <div>
      <article>
        <div><img src="" alt="" /></div>
        <h4>{user?.name}</h4>
      <button>perfil</button>
      <button>candidaturas</button>
      <button>ajustes</button>
      </article>
        <article>
          <div>
            <h2>Mi perfil</h2>
            <p>
              Completa tu perfil para mejorar tu visibilidad y facilitar que las
              empresas te encuentren.
            </p>
            <button>Guardar Cambios</button>
          </div>
        </article>
        <article>
          <div>
            <img src="" alt="" />
            <div>
              <h4>Nombre: {user?.name} {user?.lastname} apellido</h4>
              <span>En busca de empleo</span>
              <span>Telefono: {user?.phone_number} </span>
              <span>Email: {user?.email}</span>
            </div>
            <div>
              <button>Editar perfil</button>
            </div>
          </div>
        </article>
        <div>
          <article>
            <div>
              <h4>Acerca de mí</h4>
              <p>
              {user?.about_me}
              </p>
            </div>
          </article>
          <article>
            <div>
              <h4>Experiencia</h4>
              <button>Editar</button>
              <div>
                <span>{ experience?.title}</span>
                <p>{experience?.start_month_year} {experience?.end_month_year}</p>
                <p>
                 {experience?.description}
                </p>
              </div>
              <button>agrega con icono de +</button>
            </div>
          </article>
          <article>
            <div>
              <h4>Educación</h4>
              <button>Editar</button>
              <div>
                <span>{ study?.studies}</span>
                <p>{study?.start_month_year} {study?.end_month_year}</p>
                <p>
               {study?.description}
                </p>
              </div>
            </div>
          </article>
        </div>
        <div>
          <article>
            <div>
              <h4>¿Estas buscando empleo?</h4>
              <span>{user_offer?.status}</span>
              <p>
                Si no indicas que buscas empleo activamente tu usuario no saldrá
                en la búsqueda de las empresas
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
              <div>Subir nuevo CV</div>
              <hr />
              <span>Portfolio</span>
              <a href="">linkedlink</a>
            </div>
          </article>
          <article>
            <div>
              <h4>Preferencias</h4>
              <div>
                <span>Modalidad</span>
                <span>{offer?.modality}</span>
              </div>
              <div>
                <span>Ubicacion</span>
                <span>{user?.location_pref}</span>
              </div>
              <div>
                <span>Jornada</span>
                <span>{user?.modality}</span>
              </div>
            </div>
          </article>
          <article>
            <div>
              <h4>Idiomas</h4>
              <div>
                <span>{language?.name}</span>
                <span>{language?.level}</span>
              </div>
      
            </div>
          </article>
        </div>
    </div>
    </> 
  );
};

export default CandidateProfilePage;
