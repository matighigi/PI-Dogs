const {Temperament} = require('../db')
const {apiDogs} = require('../Controllers/dogsInfo')
const {Router} = require('express');
const router = Router();

router.get('/temperaments', async (req, res) => {
    try {
        const apiData = await apiDogs();
        // console.log(apiData)

        const temperamentsDb = await apiData.map(e => e.temperaments)//
         .toString()
         .trim()
         .split(/\s*,\s*/)

        // console.log(temperamentsDb);
    
        const filtrado = [... new Set (temperamentsDb)];
        filtrado.forEach(e => {
            Temperament.findOrCreate({
                where: {name: e}
            })
        })
        const allTemperaments = await Temperament.findAll();
        // console.log(allTemperaments);

        res.status(200).send(allTemperaments)

    } catch (error) {
        res.status(404).send({error: 'We had a problem to show you the temperaments'})
    }
})

module.exports = router;