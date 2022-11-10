
const {apiDogs, dbDogs} = require ('./dogsInfo')


const allDogs = async () => {
    const infoApi = await apiDogs();
    const infoDb = await dbDogs();
    const totalInfo = await infoApi.concat(infoDb)
    return totalInfo
}

module.exports = {
    allDogs
}

