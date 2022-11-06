const { Router } = require('express');
// const  axios = require('axios')
// const validator = require('validator')
// npm i validator
// const {Dog, Temperament} = require('../db')
// const {API_KEY} = process.env
// const url = 'https://api.thedogapi.com/v1/breeds'
const {getDogs} = require ('../Controllers/getDogs')
const { getDogsById } = require ('../Controllers/getDogsByID')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

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

router.get('/dogs:id', async (req, res) => {
    try {
      const {id} = req.params;
      const dogsTotal = await getDogsById();

      if (id) {
        const dogById = await dogsTotal.filter((e) => e.id == id);
        dogById.length
          ? res.status(200).send(dogById)
          : res.status(404).send("There are no dogs with that id");
      }

      else {
           res.status(404).send('There are no dogs with that id')
      }  
    } catch (error) {
        res.status(404).send(error.message)
    }
  });

module.exports = router;
