import {Outlet} from 'react-router';
import { Footer } from '../components/footer/Footer';

export const AdminLayout = () => {
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
