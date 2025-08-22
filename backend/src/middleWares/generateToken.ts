import { jwt } from "jsonwebtoken";
import SECRET from '../../.env';

const generateToken = (email: String) :String =>{
    const token = jwt.sign(email, SECRET);
    return token
}

module.exports = {
    generateToken
}