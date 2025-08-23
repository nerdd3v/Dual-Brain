//@ts-ignore
import jwt, { decode } from "jsonwebtoken";
//@ts-ignore
import SECRET from '../../.env';
//@ts-ignore
const authMW = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(404).json({ message: "auth header not found" });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(404).json({ message: "token not found" });
    }
    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};
module.exports = {
    authMW
};
//# sourceMappingURL=authMW.js.map