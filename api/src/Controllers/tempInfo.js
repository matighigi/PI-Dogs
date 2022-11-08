const {apiDogs} = require ('./dogsInfo')
const {Temperament} = require ('../db') 

const tempInfo =  async() => {
    const apiData = await apiDogs();
    // console.log(apiData)

    const temperamentsDb = apiData.map(e => e.temperament)
        .toString()
        .trim()
        .split(/\s*,\s*/);

    // console.log(temperamentsDb);
    
    const filtrado = [... new Set (temperamentsDb)];
    filtrado.forEach(e => {
        Temperament.findOrCreate({
            where: {name: e}
        })
    })
    const allTemperaments = await Temperament.findAll();
    return allTemperaments
}

// console.log(tempInfo());


module.exports = {
    tempInfo
}