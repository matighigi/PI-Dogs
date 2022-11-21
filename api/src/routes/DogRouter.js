const {allDogs} = require('../Controllers/allDogs');
const {Router} = require('express');
const {Dog, Temperament} = require('../db')
const router = Router();

//Hacemos el get de todos los dogs, utilizando la funcion controller allDogs(), o traemos un dog con el nombre especifico
router.get('/dogs', async (req, res) => {
    try {
        const {name} = req.query;
        let dogsTotal = await allDogs();

        if(name) {
            let dogName = await dogsTotal.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
            dogName.length 
              ? res.status(200).send(dogName)
              : res.status(404).send({error: 'sorry, there is no Dog with that name'});
        }
        else{
            res.status(200).send(dogsTotal);
        }

    } catch (error) {
        res.status(404).send(error.message);
    }
});
//--------------------------------------------------------------------------------
//Hacemos get de el dog con un ID especifico
router.get('/dogs/:id', async (req, res) => {
  try {
    let {id} = req.params;
    let totalDogs = await allDogs();
    const dogId = await totalDogs.filter((e) => e.id == id);

    dogId.length
       ? res.status(200).send(dogId)
       : res.status(404).send({error: "There are no dogs with that id"});

  } catch (error) {
    return res.status(404).send(error.message);
  }
});
//---------------------------------------------------------------------------------
//Hacemos un post de dogs pasandole por body los parametros

router.post("/dogs", async (req, res) => {
  const {
      // id,
      name,
      height,
      weight,
      life_span,
      image,
      temperaments,
      createdInDb
  } =  req.body; //Estos son los datos que me llegan por body

  try {

     if(!name || !height || !weight || !life_span || !temperaments) {
        res.status(404).send({error: 'MISSING PARAMETERS'})
      }
      
    const createdDog = await Dog.create({
      // id,
      name,
      height,
      weight,
      life_span,
      image,
      createdInDb
    });

    const temperamentsDB = await Temperament.findAll({
      where: { name: temperaments },
    });
    // console.log(temperamentsDB);
    await createdDog.addTemperament(temperamentsDB);
  
    // console.log(createdDog);
    res.status(201).send({success: 'DOG CREATED SUCCESSFULLY'});
    
  } catch (error) {
    console.log('THE DOG WASNT CREATED');
    res.status(404).send({error: 'THE DOG WASNT CREATED'})
  }
});

//---------------------------------------------------------------------------------
//Hacemos un delete de un dog creado con un nombre especifico

// router.delete('/deleted', async (req, res) => {
//   let { name } = req.query;

//   try{
//     if(name){
//       await Dog.destroy({
//         where: { name: name }
//       });
//     }
//     return res.status(200).send({success: 'Dog Deleted'});

//   }catch(error){
//     res.status(404).send({error: 'we could not erase the dog'});
//   }
// });

module.exports = router;