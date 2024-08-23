const app = require('./app-express-routes');

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Node.js está escuchando en el puerto 3000');
});
