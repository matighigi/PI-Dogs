const { Router } = require('express');
const DogRouter = require('./DogRouter');
const TemperamentRouter = require('./TemperamentRouter')


// const NewDogRoute = require('./NewDogRoute')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", DogRouter)
router.use("/", TemperamentRouter)

module.exports = router;