import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';

// Páginas públicas
import { PublicLayout } from '../layouts/PublicLayout';
const HomePage = lazy(() => import('../pages/PublicPages/HomePage/HomePage'));
const RegisterCandidatePage = lazy(
  () =>
    import('../pages/PublicPages/AuthPages/RegisterPage/RegisterCandidate/RegisterCandidatePage')
);
const LoginPage = lazy(
  () => import('../pages/PublicPages/AuthPages/LoginPage/LoginPage')
);
const RegisterCompanyPage = lazy(
  () =>
    import('../pages/PublicPages/AuthPages/RegisterPage/RegisterCompany/RegisterCompanyPage')
);

// Páginas privadas

const CompanyProfilePage = lazy(
  () => import('../pages/UserPages/Company/CompanyProfilePage')
);

//Páginas privadas de candidato
import { CandidateLayout } from '../layouts/CandidateLayout';
const CandidateProfilePage = lazy(
  () => import('../pages/UserPages/CandidateProfilePage/CandidateProfilePage')
);

//Páginas privadas de company
import { CompanyLayout } from '../layouts/CompanyLayout';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Cargando...</h2>}>
        <Routes>
          {/* Rutas públicas */}
          <Route element={<PublicRoutes />}>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/registerCandidate"
                element={<RegisterCandidatePage />}
              />
              <Route
                path="/registerCompany"
                element={<RegisterCompanyPage />}
              />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Route>
          {/* Rutas privadas user Candidato */}
          <Route element={<PrivateRoutes />}>
            <Route element={<CandidateLayout />}>
              <Route path='/candidateProfile/:id' element={<CandidateProfilePage />} />
            </Route>
          </Route>
          {/* Rutas privadas user Empresa */}
          <Route element={<PrivateRoutes />}>
            <Route element={<CompanyLayout />}>
              {
                <Route
                  path="/companyProfile"
                  element={<CompanyProfilePage />}
                />
              }
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
