
const {apiDogs, dbDogs} = require ('./dogsInfo')

//concatenamos todos los perros de la api y de la db para retornarlos
const allDogs = async () => {
    const infoApi = await apiDogs();
    const infoDb = await dbDogs();
    const totalInfo = await infoApi.concat(infoDb)
    return totalInfo
}

module.exports = {
    allDogs
}

