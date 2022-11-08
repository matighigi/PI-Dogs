const {Router} = require('express');
const {Dog, Temperament} = require('../db')
const router = Router();

// router.post('/dogs', async (req, res) => {
//     console.log('hola');
//     const {
//       name,
//       id,
//       height,
//       weight,
//       life_span,
//       image,
//       temperament
//     } = req.body;
  
//     try {
  
//         // if(!name || !height || !weight || !life_span || !temperament) {
//         //   return res.status(400).send('missing parameters')
//         // }
  
//         const createDog = await Dog.create({
//           name,
//           id,
//           height,
//           weight,
//           life_span,
//           image
//         });
  
//         temperament.map(async (el) => {

//             try {
//               let temps = await Temperament.findAll({
//                 where: { name: el },
//               });
//               await createDog.addTemperament(temps);

//             } catch (error) {
//               res.send(error);
//             }
//           });
//         // let newTemperament = await Temperament.findAll({
//         //   where:{
//         //     name: temperament
//         //   },
//         // });
  
//         // createDog.addTemperament(newTemperament)
//         // createDog = {...createDog.dataValues, temperament: temperament.join(', ')}
//         return res.status(200).send('dog successfully created!!');
//         /*if(createDog)*/ 
//         /*else res.status(400).send('the dog could not be created');*/
//     } catch (error) {
//         res.status(400).send('the dog could not be created');
//     }
//   });


  // {
  // "name": "pipa",
  // "id": 303,
  // "height": "23cm",
  // "weight": "30kg",
  // "life_expectancy": "18 years",
  // "img": "https://http2.mlstatic.com/D_NQ_NP_759078-MLA44484541839_012021-W.jpg"
  // }
//-----------------------------------------------------------------------------------------------------------------------
//   router.post("/dogs", async (req, res) => {
//     const {
//         name,
//         id,
//         height,
//         weight,
//         life_span,
//         image,
//         temperament,
//     } =  req.body; //Estos son los datos que me llegan por body
//     try {
//        if(!name || !id || !height || !weight || !life_span || !temperament) res.status(404).send('MISSING PARAMETERS')
//       const createdDog = await Dog.create({
//         name,
//         id,
//         height,
//         weight,
//         life_span,
//         image,
//       });

//       temperament.map(async (el) => {
//           try {
//               let temps = await Temperament.findAll({
//                   where: { name: el },
//                 });
//                 await createdDog.addTemperament(temps);
                
//             } catch (error) {
//                 res.send('the dog could not be created');
//             }
//         });

//         res.status(200).send("Dog successfully created!!!");

//     } catch (error) {
//       console.log('the dog wasnt created');
//       res.status(404).send('the dog wasnt created')
//     }
//   });
//---------------------------------------------------------------------------------------------------------
// router.post("/dog", async (req, res, next) => {
//     try {
//         const { name, height, weight, life_span, image, createdInDb, temperament} = req.body;    //me traigo del body todo lo que necesito
//         const newDog = await Dog.create({    //creo el dog con el modelo Dog y le paso lo mismo excepto el temp porque lo tengo que encontrar en un modelo que ya tengo
//             name, 
//             height, 
//             weight, 
//             life_span, 
//             image, 
//             createdInDb
//         })
//         let temperamentDb = await Temperament.findAll({  //dentro de mi modelo encontrá todos los temps que coincidan con lo que le paso por body
//             where: { name : temperament}    //name es igual al temperament que le llega por body
//         })
//         await newDog.addTemperament(temperamentDb)  //al dog creado agregále el temperamento encontrado en la Bd que le llegó por body
//         res.status(201).send({ info: "Dog created successfully!" })
//     } catch (error) {
//         res.status(404).send('the dog wasnt created')
//     };
// });

// {
//     "name": "pipa",
//     "height": "23cm",
//     "weight": "30kg",
//     "life_span": "18 years",
//     "image": "https://http2.mlstatic.com/D_NQ_NP_759078-MLA44484541839_012021-W.jpg",
//     "createdInDb": "true",
//     "temperament": "furioso"
// }
// router.post('/dogs', async(req, res) => {
//     const { name, height, weight, life_span, temperament, image, id } = req.body;
 
// if(!name || !height || !weight || !life_span || !temperament) {
//   console.log(name, height, weight, life_span, temperament)
//   return res.status(400).json({"msg" : "Parameters missing"})
// }

// try {
//   let newDog = await Dog.create({
//     id,
//     name, 
//     height,
//     weight,
//     life_span,
//     image
//   })

//   const temperamentsDB = await Temperament.findAll({
//     where:{
//       name : temperament
//     }
//   })
  
//   await newDog.addTemperaments(temperamentsDB);
//   newDog = {...newDog.dataValues, temperaments: temperament.join(', ')}
//   res.status(200).json(newDog)
// } catch(e) {
//   res.status(400).json({"msg":"Something went wrong, try again later"})
// }
// })

  module.exports = router;