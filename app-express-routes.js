const express = require('express');
const path = require('path');
const app = express();

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];

  const getUsersBySpecialty = (specialty) => {
    return usersData.filter((user) => 
        user.specialty === specialty);
  };

// Middleware global para mostrar el path en la terminal
app.use((req, res, next) => {
  const parsedPath = path.parse(req.path);
  console.log('Ruta solicitada:', parsedPath);
  next(); // Continuar al siguiente middleware o ruta
});

// Ruta para la página principal (home)
app.get('/home', (req, res) => {
    res.send(
      `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuarios con Express
    </title>
</head>
<body>
    <h1>Buscador de usuarios por especialidad</h1>
        <nav>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/QAs">QAs</a>
            <a href="/ventas">Ventas</a>
            <a href="/contacto">Contacto</a>
        </nav>
</body>
</html>`
    );
  });

app.get('/marketing', (req, res) => {
    const users = getUsersBySpecialty('marketing');
    const usersCount = users.length;
    const usersList = users.map((user) => `<li>${user.name}, ${user.age} años</li>`).join('');
    res.send(
        `<!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Usuarios de Marketing con Express</title>
        </head>
        <body>
          <h1>Usuarios de Marketing (${usersCount})</h1>
          <ul>${usersList}</ul>
          <nav>
            <a href="/home">Home</a>
            <a href="/developers">Developers</a>
            <a href="/QAs">QAs</a>
            <a href="/ventas">Ventas</a>
          </nav>
        </body>
        </html>`
    );
  });

app.get('/developers', (req, res) => {
    const users = getUsersBySpecialty('developers');
    const usersCount = users.length;
    const usersList = users.map((user) => `<li>${user.name}, ${user.age} años</li>`).join('');
    res.send(
      `<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuarios Developers con Express</title>
  </head>
  <body>
    <h1>Usuarios Developers (${usersCount})</h1>
    <ul>${usersList}</ul>
    <nav>
      <a href="/home">Home</a>
      <a href="/marketing">Marketing</a>
      <a href="/QAs">QAs</a>
      <a href="/ventas">Ventas</a>
    </nav>
  </body>
  </html>`
    );
  });

app.get('/QAs', (req, res) => {
    const users = getUsersBySpecialty('QAs');
    const usersCount = users.length;
    const usersList = users.map((user) => `<li>${user.name}, ${user.age} años</li>`).join('');
    res.send(
      `<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuarios QAs con Express</title>
  </head>
  <body>
    <h1>Usuarios QAs (${usersCount})</h1>
    <ul>${usersList}</ul>
    <nav>
      <a href="/home">Home</a>
      <a href="/marketing">Marketing</a>
      <a href="/developers">Developers</a>
      <a href="/ventas">Ventas</a>
    </nav>
  </body>
  </html>`
    );
  });

app.get('/ventas', (req, res) => {
    const users = getUsersBySpecialty('ventas');
    const usersCount = users.length;
    const usersList = users.map((user) => `<li>${user.name}, ${user.age} años</li>`).join('');
    res.send(
      `<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuarios de Ventas con Express</title>
  </head>
  <body>
    <h1>Usuarios de Ventas (${usersCount})</h1>
    <ul>${usersList}</ul>
    <nav>
      <a href="/home">Home</a>
      <a href="/marketing">Marketing</a>
      <a href="/developers">Developers</a>
      <a href="/QAs">QAs</a>
    </nav>
  </body>
  </html>`
      );
    });
  

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).send(
    `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página no encontrada</title>
</head>
<body>
    <h1>Página no encontrada</h1>
        <h2>Entra en uno de los siguientes enlaces</h2>
        <nav>
            <a href="/home">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/QAs">QAs</a>
            <a href="ventas">Ventas</a>
        </nav>
</body>
</html>`
    );
});

app.listen(3000, () => {
  console.log('Node.js está escuchando en el puerto 3000');
});

module.exports = app;
