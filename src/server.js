/*const express = require('express');
const apiRoutes = require('./routes/index');
const dbConfig = require('./config/db');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
// serve stored files
const storageDir = path.join(process.cwd(), 'storage');
if (!fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir);
}
app.use('/files', express.static(storageDir));

// Rutas
app.use('/api', apiRoutes);

// Conexión a MongoDB
dbConfig();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Error handler
app.use(errorMiddleware);*/

/*const express = require('express');
const apiRoutes = require('./routes/index');
const dbConfig = require('./config/db');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Serve stored files
const storageDir = path.join(process.cwd(), 'storage');
if (!fs.existsSync(storageDir)) {
  fs.mkdirSync(storageDir);
}
app.use('/files', express.static(storageDir));

// Routes
app.use('/api', apiRoutes);

// Database connection
dbConfig();

// Error handler
app.use(errorMiddleware);

// Export for Vercel
module.exports = app;*/

const express = require('express');
const apiRoutes = require('./routes/index');
const dbConfig = require('./config/db');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Serve stored files - ¡CAMBIO AQUÍ!
const storageDir = path.join('/tmp', 'storage');
if (!fs.existsSync(storageDir)) {
  fs.mkdirSync(storageDir);
}
app.use('/files', express.static(storageDir));

// Rutas
app.use('/api', apiRoutes);

// Conexión a MongoDB
dbConfig();

// Handler de errores
app.use(errorMiddleware);

// Export para Vercel (sin app.listen)
module.exports = app;

