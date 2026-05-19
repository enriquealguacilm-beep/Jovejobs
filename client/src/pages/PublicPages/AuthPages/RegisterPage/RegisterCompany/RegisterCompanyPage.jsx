import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { RegisterCompanySchema } from '../../../../../schemas/RegisterCompanySchema.js';
import { validateForm } from '../../../../../helpers/ValidateForms.js';
import { fetchAxios } from '../../../../../helpers/axiosHelper.js';

const initialValue = {
  name: '',
  identification: '',
  email: '',
  repEmail: '',
  password: '',
  repPassword: '',
  contact: '',
  phone_number: '',
  address: '',
};

const RegisterCompanyCompanyPage = () => {
  const [registerCompany, setRegisterCompany] = useState(initialValue);
  const [errorsVal, setErrorsVal] = useState();
  const [otroErr, setOtroErr] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterCompany({ ...registerCompany, [name]: value });
  };

  // 1. Añade el parámetro 'e' aquí arriba
const onSubmit = async (e) => {
  // 2. Esta línea es CRUCIAL: detiene la recarga y evita el fallo de React Router
  if (e && e.preventDefault) e.preventDefault();

  setErrorsVal({});
  setOtroErr('');
  try {
    validateForm(RegisterCompanySchema, registerCompany);

    let url = '/api/auth/registerCompany';
    let res = await fetchAxios(url, 'POST', registerCompany);
    console.log(res);
  } catch (error) {
    console.log('Otro tipo', error.response);
    if (error.errType === 'validator') {
      console.log(error);
      setErrorsVal(error);
    } else if (error.response && error.response.data && error.response.data.errno === 1062) {
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
        <Form.Group className="mb-3" controlId="formBasicIdentificacion">
          <Form.Label>NIF/CIF*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter identification"
            value={registerCompany.identification}
            onChange={handleChange}
            name="identification"
          />
          {errorsVal?.identification && (
            <p className="errMsg">{errorsVal.identification}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={registerCompany.Email}
            onChange={handleChange}
            name="email"
          />
          {errorsVal?.email && <p className="errMsg">{errorsVal.email}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={registerCompany.repEmail}
            onChange={handleChange}
            name="RepEmail"
          />
          {errorsVal?.repEmail && <p className="errMsg">{errorsVal.repEmail}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contraseña"
            value={registerCompany.password}
            onChange={handleChange}
            name="password"
          />
          {errorsVal?.repEmail && (
            <p className="errMsg">{errorsVal.repEmail}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRepPassword">
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
        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Nombre de persona de contacto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contacto"
            value={registerCompany.contact}
            onChange={handleChange}
            name="contact"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTelefono">
          <Form.Label>Número de teléfono*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter teléfono"
            value={registerCompany.phone_number}
            onChange={handleChange}
            name="phone_number"
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

export default RegisterCompanyCompanyPage;
