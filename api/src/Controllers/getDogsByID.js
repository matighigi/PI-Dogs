const {getDogs} = require('./getDogs')
const {apiDogs, dbDogs} = require('./dogsInfo')
const {Dog, Temperament} = require('../db')
// const getDogsById = async (req, res) => {
//     try {
//       const {id} = req.params;
//       const totalDogs = await getDogs();
//       const dogById = await totalDogs.filter(el => el.id === id);

//       dogById.length
//          ? res.status(200).send(dogById)
//          : res.status(404).send('There are no dogs with that id');

//     } catch (error) {
//         res.status(404).send('culia no sale');
//     }
    
// }

// const getDogsById = async (req, res) => {
//     const { id } = req.params;
//     try {
//         if(id.includes('-')){
//             const dog = await Dog.findOne({
//                 where: {id: id},
//                 include: {
//                     model: Temperament,
//                     attributes: ['name'],
//                     through: {
//                         attributes: []
//                     }
//                 }
//             })

//             dog.dataValues.temperaments = dog.dataValues.temperaments.map(d => d.dataValues.name).join(', ')
//             return res.status(200).send(dog.dataValues)
//         }
//         const dogsFromApi = await apiDogs();
//         const dog = dogsFromApi.find(d => d.id === Number(id))

//         if(!dog.id)return res.status(404).send('Sorry, we couldn´t find your dog')

//     } catch (error) {
//         return res.status(404).send('Sorry, we couldn´t find your dog')
//     }
// }
// const getDogsById = async (req, res) => {
//     const {id} = req.params;
//     const dogsTotal = await getDogs();

//     if (id) {
//       const dogById = await dogsTotal.filter((e) => e.id == id);
//       dogById.length
//         ? res.status(200).send(dogById)
//         : res.status(404).send("There are no dogs with that id");
//     }
//     else {
//         return res.status(404).send('There are no dogs with that id')
//     }
//   };
  const getDogsById = async () => {
    const infoApi = await apiDogs();
    const infoDb = await dbDogs();
    const totalInfo = infoApi.concat(infoDb)
    return totalInfo
  }


module.exports = {
    getDogsById
}