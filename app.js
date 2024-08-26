const app = require('./app-express-routes');
const PORT = 3000

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Node.js está escuchando en el puerto ${PORT}`);
});
