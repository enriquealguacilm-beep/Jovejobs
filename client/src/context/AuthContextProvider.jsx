import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { fetchAxios } from '../helpers/axiosHelper';

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    // 1. Miramos si hay un token guardado de antes
    const tokenLS = localStorage.getItem('token');

    const fetchData = async () => {
      try {
        // 2. Llamamos al back para recuperar los datos del usuario usando el token
        let res = await fetchAxios('/auth/userById', 'GET', null, tokenLS);

        setUser(res.data.user);
        setToken(tokenLS);
      } catch (error) {
        console.error('Error al recuperar el usuario:', error);
        // Si el token no vale (ha expirado), lo borramos para no dar errores
        localStorage.removeItem('token');
      }
    };

    if (tokenLS) {
      fetchData();
    }
  }, []);

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
