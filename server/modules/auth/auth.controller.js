import bcrypt from 'bcrypt';
import authDal from './auth.dal.js';
import sendEmail from '../../services/emailServices.js';

class AuthController {

  registerCandidate = async(req, res) => {
    try {
      const {name, lastname, email, password, phone_number} = req.body
      const hashedPassword = await bcrypt.hash(password,10);
      let values = [name, lastname, email, hashedPassword, phone_number,3];
      const result = await authDal.registerCandidate(values);
      sendEmail(email, name, lastname);
      res.status(200).json({message: 'Usuario registrado corréctamente'});
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new AuthController();