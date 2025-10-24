const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) {
        return res.status(401).json({ message: 'Token requerido' });
    }
    try {
        const secret = process.env.JWT_SECRET || 'tu_clave_secreta';
        const payload = jwt.verify(token, secret);
        req.user = payload;
        return next();
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}

module.exports = authMiddleware;


