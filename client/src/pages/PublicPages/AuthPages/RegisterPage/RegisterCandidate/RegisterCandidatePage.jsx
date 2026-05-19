import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { validateForm } from '../../../../../helpers/ValidateForms';
import { registerCandidateSchema } from '../../../../../schemas/RegisterCandidateSchema';

const initialValue = {
  email: '',
  repEmail: '',
  password: '',
  repPassword: '',
  name: '',
  lastname: '',
  phone_number: '',
};

const RegisterCompanyPage = () => {
  const [registerCandidate, setRegisterCandidate] = useState(initialValue);
  const [errorsVal, setErrorsVal] = useState();
  const [otroError, setOtroError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterCandidate({ ...registerCandidate, [name]: value });
  };

  const onSubmit = async () => {
    setErrorsVal({});
    setOtroError('');
    try {
      validateForm(registerCandidateSchema, registerCandidate);
      let url = 'auth/register';
    } catch (error) {
      if (error.errType === 'validator') {
        console.log('errores de validación');
        setErrorsVal(error);
      } else if (error.response.data.errno === 1062) {
        setOtroError('Email duplicado');
      } else {
        setOtroError('Ha habido un error');
      }
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico*</Form.Label>
        <Form.Control
          type="email"
          onChange={handleChange}
          name="email"
          value={registerCandidate.email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRepEmail">
        <Form.Label>Confirmar correo*</Form.Label>
        <Form.Control
          type="email"
          placeholder="Repite tu correo electrónico"
          onChange={handleChange}
          name="repEmail"
          value={registerCandidate.repEmail}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Crea tu contraseña*</Form.Label>
        <Form.Control
          type="password"
          placeholder="Mínimo 6 caracteres"
          onChange={handleChange}
          name="password"
          value={registerCandidate.password}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRepPassword">
        <Form.Label>Confirmar contraseña*</Form.Label>
        <Form.Control
          type="password"
          placeholder="Repite tu contraseña"
          onChange={handleChange}
          name="repPassword"
          value={registerCandidate.repPassword}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre*</Form.Label>
        <Form.Control
          type="text"
          onChange={handleChange}
          name="name"
          value={registerCandidate.name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>Apellido(s)*</Form.Label>
        <Form.Control
          type="text"
          onChange={handleChange}
          name="lastname"
          value={registerCandidate.lastname}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label>Teléfono*</Form.Label>
        <Form.Control
          type="text"
          onChange={handleChange}
          name="phone_number"
          value={registerCandidate.phone_number}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Acepto la política de Privacidad y los Términos y Condiciones"
        />
      </Form.Group>
      <Button variant="primary" onClick={onSubmit}>
        Crear Mi Cuenta
      </Button>
      <Button variant="primary">Cancelar</Button>
    </Form>
  );
};

export default RegisterCompanyPage;
