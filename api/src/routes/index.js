const { Router } = require('express');
// const  axios = require('axios')
// const validator = require('validator')
// npm i validator
const {getDogs} = require ('../Controllers/getDogs')
const { getDogsById } = require ('../Controllers/getDogsByID')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use('/dogs', getDogs);
router.get('/dogs', async (req, res) => {
    try {
        const {name} = req.query;
        let dogsTotal = await getDogs();

        if(name) {
            let dogName = await dogsTotal.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
            dogName.length 
              ? res.status(200).send(dogName)
              : res.status(404).send({error: 'sorry, there is no Dog with that name'})
        }
        else{
            res.status(200).send(dogsTotal)
        }

    } catch (error) {
        res.status(404).send(error.message)
    }
}) 
router.use('/dogs/:id', getDogsById)


module.exports = router;