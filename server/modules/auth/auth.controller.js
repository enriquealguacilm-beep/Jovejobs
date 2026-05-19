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
}

export default new AuthController();