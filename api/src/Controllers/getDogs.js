
const {apiDogs, dbDogs} = require ('./dogsInfo')


const getDogs = async () => {
    const infoApi = await apiDogs();
    const infoDb = await dbDogs();
    const totalInfo = infoApi.concat(infoDb)
    return totalInfo
}

module.exports = {
    getDogs
}

