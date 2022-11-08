const { Router } = require('express');
// const validator = require('validator')
// npm i validator
const DogRouter = require('./DogRouter');
const TemperamentRouter = require('./TemperamentRouter')
const NewDogRoute = require('./NewDogRoute')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", DogRouter)
router.use("/", TemperamentRouter)
router.use("/", NewDogRoute)


module.exports = router;