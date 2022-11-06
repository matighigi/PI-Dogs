const {allDogs} = require('../Controllers/allDogs')
const {Router} = require('express');
const router = Router();


router.get('/dogs', async (req, res) => {
    try {
        const {name} = req.query;
        let dogsTotal = await allDogs();

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

router.get('/dogs/:id', async (req, res) => {
  try {
    let {id} = req.params;
    let totalDogs = await allDogs();
    const dogId = await totalDogs.filter((e) => e.id == id);

    dogId.length
       ? res.status(200).send(dogId)
       : res.status(404).send("There are no dogs with that id");

  } catch (error) {
    return res.status(404).send(error.message)
  }
});
// router.get('/dogs/:id', async (req, res) => {
//     try {
//         let { id } = req.params;
//         const totalDogs = await allDogs();
//         let dogsId = await totalDogs.filter(e => e.id.toString() === id.toString());
     
//         if (dogsId.length) return res.status(200).send(dogsId) 
//         else res.status(404).send('There are no dogs with that id');
          
//     } catch (error) {
//         res.status(404).send(error.message)
//     }

// });

module.exports = router;