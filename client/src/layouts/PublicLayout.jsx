import { Outlet } from 'react-router';
import { Footer } from '../components/footer/Footer';
import { NavBarPublic } from '../components/navBarPublic/NavBarPublic';

export const PublicLayout = () => {
  return (
    <>
      <header>
        <NavBarPublic />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
