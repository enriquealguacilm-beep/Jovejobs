import { Suspense, lazy  } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"

// Páginas públicas
import { PublicLayout } from "../layouts/PublicLayout";
const HomePage = lazy(() => import("../pages/PublicPages/HomePage/HomePage"));
const RegisterCandidatePage  = lazy(() => import ("../pages/PublicPages/AuthPages/RegisterPage/RegisterCandidate/RegisterCandidatePage"));
// const RegisterCompanyCompanyPage = lazy(() => import ("../pages/PublicPages/AuthPages/RegisterPage/RegisterCompany/RegisterCompanyPage")) ;

//Páginas privadas de candidato
import { CandidateLayout } from "../layouts/CandidateLayout";

//Páginas privadas de candidato
import { CompanyLayout } from "../layouts/CompanyLayout";
import RegisterCompanyCompanyPage from "../pages/PublicPages/AuthPages/RegisterPage/RegisterCompany/RegisterCompanyPage";



export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Cargando...</h2>}>
        <Routes>
          {/* Rutas públicas */}
            <Route element={<PublicRoutes/>}>
              <Route element={<PublicLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/registerCandidate" element={<RegisterCandidatePage/>}/>
                <Route path="/registerCompany" element={<RegisterCompanyCompanyPage/>}/>
              </Route>
            </Route>
          {/* Rutas privadas user Candidato */}
            <Route element={<PrivateRoutes/>}>
              <Route element={<CandidateLayout/>}>
                {/* <Route path .... */}
              </Route>
            </Route>
          {/* Rutas privadas user Empresa */}
            <Route element={<PrivateRoutes/>}>
              <Route element={<CompanyLayout/>}>
                {/* <Route path .... */}
              </Route>
            </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
