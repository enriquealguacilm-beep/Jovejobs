import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

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

const RegisterCompanyPage = () => {
  const [register, setRegister] = useState(initialValue);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre de la empresa (razón social)*</Form.Label>
          <Form.Control
            type="text"
            value={register.name}
            onChange={handleChange}
            name="name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>NIF/CIF*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={register.email}
            onChange={handleChange}
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={register.repEmail}
            onChange={handleChange}
            name="repEmail"
          />
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
            value={register.password}
            onChange={handleChange}
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Confirmar contraseña*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={register.repPassword}
            onChange={handleChange}
            name="repPassword"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de persona de contacto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={register.contact}
            onChange={handleChange}
            name="contact"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Número de teléfono*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={register.phone}
            onChange={handleChange}
            name="phone"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección fiscal*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={register.address}
            onChange={handleChange}
            name="address"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Acepto la Política de Privacidad y los Términos y Condiciones"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterCompanyPage;
