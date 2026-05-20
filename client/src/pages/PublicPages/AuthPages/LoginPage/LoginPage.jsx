import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router';
import { fetchAxios } from '../../../../helpers/axiosHelper.js';
import { AuthContext } from '../../../../context/AuthContext.js';
const initialValue = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [loginData, setLoginData] = useState(initialValue);
  const [errLogin, setErrLogin] = useState('');

  const { setUser, setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  console.log('LOGIN DATA:', loginData);

  const onSubmit = async () => {
    setErrLogin('');
    try {
      let url = '/auth/login';
      let res = await fetchAxios(url, 'POST', loginData);

      //guardo el token en el localStorage
      let tokenDelBack = res.data.token;
      localStorage.setItem('token', tokenDelBack);

      //pedir los datos del usuario
      let urlUser = '/auth/userById';
      let resUser = await fetchAxios(urlUser, 'GET', null, tokenDelBack);
      setUser(resUser.data.user);
      setToken(tokenDelBack);

      // Aquí lo llevaremos al perfil según el tipo que sea.
      // De momento lo llevamos al HomePage

      // const userType = resUser.data.user.type;

      // if (userType === 1) {
      //   navigate('/admin');
      // } else if (userType === 2) {
      //   navigate('/company-profile');
      // } else if (userType === 3) {
      //   navigate('/candidate-profile');
      // } else {
      //   navigate('/');
      // }

      navigate('/');
    } catch (error) {
      console.log(error.response);
      if (error.status === 401) {
        setErrLogin(error.response.data.message);
      } else {
        setErrLogin('Ups, ha habido algun error');
      }
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5 ">
      <Form className="w-25 border border-1 rounded-2 p-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <p>{errLogin}</p>
        <div className="d-flex gap-2 ">
          <Button onClick={onSubmit}>Submit</Button>
          <Button onClick={() => navigate(-1)}>Cancel</Button>
        </div>
        <p>
          No estás registrado? <Link to="/register">Register aquí</Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginPage;
