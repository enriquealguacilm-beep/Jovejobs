import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { registerCompanyCompanySchema } from '../../../../../schemas/registerCompanyCompanySchema.js';
import { validateForm } from '../../../../../helpers/ValidateForms';
import { fetchAxios } from '../../../../../helpers/axiosHelper.js';

const initialValue = {
  name: '',
  indentification: '',
  email: '',
  repEmail: '',
  password: '',
  repPassword: '',
  contact: '',
  phone: '',
  address: '',
};

const registerCompanyCompanyPage = () => {
  const [registerCompany, setRegisterCompany] = useState(initialValue);
  const [errorsVal, setErrorsVal] = useState();
  const [otroErr, setOtroErr] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterCompany({ ...registerCompany, [name]: value });
  };

  const onSubmit = async () => {
    setErrorsVal({});
    setOtroErr('');
    try {
      validateForm(registerCompanyCompanySchema, registerCompany);

      let url = '/auth/registerCompany';
      let res = await fetchAxios(url, 'POST', registerCompany);
      console.log(res);
    } catch (error) {
      console.log('Otro tipo', error.response);
      if (error.errType === 'validator') {
        console.log(error);
        setErrorsVal(error);
      } else if (error.response.data.errno === 1062) {
        setOtroErr('Email duplicado');
      } else {
        setOtroErr('Ups, ha habido un error');
      }
    }
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre de la empresa (razón social)*</Form.Label>
          <Form.Control
            type="text"
            value={registerCompany.name}
            onChange={handleChange}
            name="name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>NIF/CIF*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={registerCompany.email}
            onChange={handleChange}
            name="email"
          />
          {errorsVal?.indentification && (
            <p className="errMsg">{errorsVal.indentification}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={registerCompany.repEmail}
            onChange={handleChange}
            name="repEmail"
          />
          {errorsVal?.email && <p className="errMsg">{errorsVal.email}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Confirmar Email*</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={registerCompany.password}
            onChange={handleChange}
            name="password"
          />
          {errorsVal?.repEmail && (
            <p className="errMsg">{errorsVal.repEmail}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Confirmar contraseña*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={registerCompany.repPassword}
            onChange={handleChange}
            name="repPassword"
          />
          {errorsVal?.password && (
            <p className="errMsg">{errorsVal.repPassword}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de persona de contacto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={registerCompany.contact}
            onChange={handleChange}
            name="contact"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Número de teléfono*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={registerCompany.phone}
            onChange={handleChange}
            name="phone"
          />
          {errorsVal?.phone && <p className="errMsg">{errorsVal.phone}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección fiscal*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={registerCompany.address}
            onChange={handleChange}
            name="address"
          />
          {errorsVal?.address && <p className="errMsg">{errorsVal.address}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Acepto la Política de Privacidad y los Términos y Condiciones"
          />
        </Form.Group>
        <Button variant="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default registerCompanyCompanyPage;
