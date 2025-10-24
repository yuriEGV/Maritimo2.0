const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

async function login(req, res) {
    const { email, password } = req.body;
    // NOTE: For demo purposes, plain compare; in production hash and compare with bcrypt
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });
    // password check placeholder
    if (password !== 'password') return res.status(401).json({ message: 'Credenciales inválidas' });
    const token = jwt.sign({ userId: user._id, tenantId: user.tenantId, role: user.role }, process.env.JWT_SECRET || 'tu_clave_secreta', { expiresIn: '8h' });
    return res.json({ token });
}

module.exports = { login };


