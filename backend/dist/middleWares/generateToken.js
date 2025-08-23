//@ts-ignore
import { jwt } from "jsonwebtoken";
//@ts-ignore
import SECRET from '../../.env';
const generateToken = (email) => {
    const token = jwt.sign(email, SECRET);
    return token;
};
module.exports = {
    generateToken
};
//# sourceMappingURL=generateToken.js.map