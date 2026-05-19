import { Outlet } from "react-router";
import { Footer } from "../components/footer/Footer";


export const CandidateLayout = () => {
  return (
    <>
    <header>
      navbar
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}
