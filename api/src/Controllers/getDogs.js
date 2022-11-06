// const  axios = require('axios')
// const {Dog, Temperament} = require('../db')
// const {API_KEY} = process.env
// const url = 'https://api.thedogapi.com/v1/breeds'
const {apiDogs, dbDogs} = require ('./dogsInfo')


// const getDogs = async () => {

//     const infoApi = await apiDogs()
//     const infoDb = await dbDogs()
//     infoDb = await infoDb.map((el) => {
//         return {
//             id: el.id,
//             name: el.name,
//             height: el.height.metric,
//             weight: el.weight.metric,
//             life_span: el.life_span,
//             image: el.image.url
//                ? el.image.url
//                : 'https://bitsofco.de/content/images/2018/12/broken-1.png',
//             temperament: el.temperament
//                .map(el => {
//                 return el.name
//                }).join(', '),
//         }
//     })
//     const allInfo = infoApi.concat(infoDb)
//     return allInfo
// }

const getDogs = async () => {
    const infoApi = await apiDogs();
    const infoDb = await dbDogs();
    const totalInfo = infoApi.concat(infoDb)
    return totalInfo
}


module.exports = {
    getDogs
}

