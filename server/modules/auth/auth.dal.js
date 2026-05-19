import {  executeQuery } from "../../config/db.js";

class AuthDal {

  registerCandidate = async(values) => {
    
    try {
      
      let sql = 'INSERT INTO user (name, lastname, email, password, phone_number, type) VALUES (?,?,?,?,?,?)';
      return await executeQuery(sql,values);
      
    } catch (error) {
      throw error;
    }

  }




}



export default new AuthDal();