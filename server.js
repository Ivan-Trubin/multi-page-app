// server.js
import { createServer } from 'http';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const app = require('./app.js');

const port = process.env.PORT || 3000;

createServer(app).listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});