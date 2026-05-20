import { executeQuery } from '../../config/db.js';

class AuthDal {
  findUserbyEmail = async (email) => {
    try {
      let sql = 'SELECT * FROM user WHERE email = ? AND is_deleted = 0';
      const result = await executeQuery(sql, [email]);
      return result;
    } catch (error) {
      throw error;
    }
  };

  userById = async (id) => {
    try {
      let sql = 'SELECT * FROM user WHERE user_id = ? AND is_deleted = 0';
      const result = await executeQuery(sql, [id]);
      return result;
    } catch (error) {
      throw error;
    }
  };

  registerCandidate = async (values) => {
    try {
      let sql =
        'INSERT INTO user (name, lastname, email, password, phone_number, type) VALUES (?,?,?,?,?,?)';
      return await executeQuery(sql, values);
    } catch (error) {
      throw error;
    }
  };

  registerCompany = async (values) => {
    try {
      let sql =
        'INSERT INTO user (company_title, dni_cif, email, password, phone_number, name, lastname, address, type) VALUES (?,?,?,?,?,?,?,?,?)';
      return await executeQuery(sql, values);
    } catch (error) {
      throw error;
    }
  };
}

export default new AuthDal();
