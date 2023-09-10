const {Router} = require('express')
const {crearUsuario, obtenerUsuario} = require('../models/usuario')

const router = new Router()

router.get('/', function(req, res){
    res.send('Bienvenido a la API de Franco')
})


router.post('/usuario', async function(req, res) {
    const { correo, contraseña } = req.body;

    const respuestaObtener = await obtenerUsuario(correo, contraseña);

    if (respuestaObtener) {
        res.json({ existe: true }); // Usuario encontrado
    } else {
        res.json({ existe: false }); // Usuario no encontrado
    }
});


router.post('/usuario', async function(req, res) {
    const { correo, contraseña } = req.body;
  
    const respuestaObtener = await obtenerUsuario(correo, contraseña);
  
    if (respuestaObtener) {
      res.json({ existe: true }); // Usuario encontrado
    } else {
      res.json({ existe: false }); // Usuario no encontrado
    }
  });
  


module.exports = router