import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"

// Páginas públicas
import { PublicLayout } from "../layouts/PublicLayout";

//Páginas privadas de candidato
import { CandidateLayout } from "../layouts/CandidateLayout";

//Páginas privadas de candidato
import { CompanyLayout } from "../layouts/CompanyLayout";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Cargando...</h2>}>
        <Routes>
          {/* Rutas públicas */}
            <Route element={<PublicRoutes/>}>
              <Route element={<PublicLayout/>}>
                {/* <Route path .... */}
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
