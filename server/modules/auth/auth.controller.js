import bcrypt from 'bcrypt';
import authDal from './auth.dal.js';

class AuthController {

  registerCandidate = async(req, res) => {
    try {
      const {name, lastname, email, password, phone_number} = req.body
      const hashedPassword = await bcrypt.hash(password,10);
      let values = [name, lastname, email, hashedPassword, phone_number,3];
      const result = await authDal.registerCandidate(values);

    } catch (error) {
      res.status(200).json(error);
    }
  }

  registerCompany = async(req, res) => {
    try {
      const {company_title, identification, email, password, phone_number, name, lastname, address} = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      let values = [company_title, identification, email, hashedPassword, phone_number, name, lastname, address, 2];
      const result = await authDal.registerCompany(values);
      res.status(200).json('register ok');
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new AuthController();