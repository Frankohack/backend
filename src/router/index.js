const {Router} = require('express')
const {crearUsuario, obtenerUsuario} = require('../models/usuario')
const { crearDoctor, obtenerDoctor }= require('../models/doctor')



const router = new Router()

router.get('/', function(req, res){
    res.send('Bienvenido a la API de Franco')
})

router.post('/crear', async function(req, res){
    const data = req.body;
    const {rut, nombres, apellidos, correo, region, comuna, direccion, numero, telefono, contraseña} = data

    const respuestaCrear = await crearUsuario(rut, nombres, apellidos, correo, region, comuna, direccion, numero, telefono, contraseña)
    res.json(respuestaCrear)
})

// Ruta para verificar el usuario
router.post('/usuario', async function(req, res) {
  const { correo, contraseña } = req.body; // Cambia a req.body

  const respuestaObtener = await obtenerUsuario(correo, contraseña);

  if (respuestaObtener) {
      res.json({ existe: true }); // Usuario encontrado
  } else {  
      res.json({ existe: false }); // Usuario no encontrado
  }
});


// Ruta para crear un nuevo doctor
router.get('/.doc', function(req, res){
  res.send('Bienvenido a la API de Doctores')
})

router.post('/.doctor', async function (req, res) {
  try {
    const data = req.body;
    const { nombres, apellidos, especialidad, region, comuna, hospital, valoracion } = data;

    const nuevoDoctor = await crearDoctor(nombres, apellidos, especialidad, region, comuna, hospital, valoracion);
    res.json(nuevoDoctor);
  } catch (error) {
    console.error('Error al crear el doctor:', error);
    res.json({ mensaje: 'Error en el servidor' });
  }
});

  router.get('/.doctores', async function(req, res) {
    
      const respuestaObtenerDoc = await obtenerDoctor();
    
      if (respuestaObtenerDoc) {
          res.json({respuestaObtenerDoc}); // Doctor encontrado
      } else {  
          res.json({ existe: false }); // Doctor no encontrado
      }
    });

module.exports = router;