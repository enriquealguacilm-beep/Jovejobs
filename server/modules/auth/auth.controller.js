import { executeQuery } from '../../config/db.js';
import bcrypt from 'bcrypt';
import authDal from './auth.dal.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class AuthController {
  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      //1 ver si el usuario con ese email existe en nuestra db
      const result = await authDal.findUserbyEmail(email);
      if (!result.length) {
        res.status(401).json({ message: 'Email no existe' });
      } else {
        //2 comprobar que la password es correcta
        let match = await bcrypt.compare(password, result[0].password);
        if (!match) {
          res.status(401).json({ message: 'Password no válida' });
        } else {
          //3. generar un token
          const token = jwt.sign(
            { id: result[0].user_id },
            process.env.SECRET_KEY,
            { expiresIn: '30d' }
          );

          res.status(200).json({ message: 'login ok', token });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  userById = async (req, res) => {
    try {
      const { user_id } = req;

      // Llamamos al DAL para buscar en la base de datos
      const result = await authDal.userById(user_id);

      if (!result.length) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      const user = {
        user_id: result[0].user_id,
        name: result[0].name,
        lastname: result[0].lastname,
        email: result[0].email,
        type: result[0].type, // 1: Admin, 2: Empresa, 3: Candidato
        avatar: result[0].avatar,
        is_searching: result[0].is_searching, // Dato útil para candidatos
        offers_left: result[0].offers_left, // Dato útil para empresas
        province_id: result[0].province_id, // Datos utiles para perfiles
        city_id: result[0].city_id,
      }; // Devolvemos el objeto usuario al frontend

      res.status(200).json({ user });
    } catch (error) {
      console.error('Error en userById:', error);
      res.status(500).json({ message: 'Error interno del servidor', error });
    }
  };
}

export default new AuthController();
