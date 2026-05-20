import { useContext, useState } from 'react';

import './candidateProfilePage.css';
import { AuthContext } from '../../../context/AuthContext';

const CandidateProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
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
            <h4>Nombre: Nombre apellido</h4>
            <span>En busca de empleo</span>
            <span>Telefono:</span>
            <span>Email:</span>
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
              Desarrollador junior orientado al frontend y al desarrollo
              full-stack, con experiencia en React, Node.js y MySQL. Me interesa
              seguir creciendo en entornos donde pueda participar en proyectos
              reales, mejorar la experiencia de usuario y aportar una base
              técnica sólida.
            </p>
          </div>
        </article>
        <article>
          <div>
            <h4>Experiencia</h4>
            <button>Editar</button>
            <div>
              <span>Prácticas de desarrollo</span>
              <p>Proyecto portfolio personal</p>
              <p>
                Desarrollo de aplicaciones web con React, formularios dinámicos,
                integración con APIs y persistencia en MySQL.
              </p>
            </div>
            <button>agrega con icono de +</button>
          </div>
        </article>
        <article>
          <div>
            <h4>Educacion</h4>
            <button>editar</button>
            <div>
              <span>Bootcamp Full-Stack Development</span>
              <p>hshshsdgs</p>
              <p>
                React, Node.js, bases de datos relacionales, APIs REST y
                metodologías de desarrollo.
              </p>
            </div>
          </div>
        </article>
      </div>
      <div>
        <article>
          <div>
            <h4>¿Estas buscando empleo?</h4>
            <span>Estado actual</span>
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
              <span>Remoto</span>
            </div>
            <div>
              <span>Ubicacion</span>
              <span>Remoto</span>
            </div>
            <div>
              <span>Jornada</span>
              <span>Remoto</span>
            </div>
          </div>
        </article>
        <article>
          <div>
            <h4>Idiomas</h4>
            <div>
              <span>Español</span>
              <span>Nativo</span>
            </div>
            <div>
              <span>Español</span>
              <span>Nativo</span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default CandidateProfilePage;
