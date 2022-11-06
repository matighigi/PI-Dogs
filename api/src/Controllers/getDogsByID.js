const {getDogs} = require('./getDogs')


const getDogsById = async (req, res) => {
  try {
    const {id} = req.params;
    const dogsTotal = await getDogs();

    if (id) {
      const dogById = await dogsTotal.filter((e) => e.id == id);
      dogById.length
        ? res.status(200).send(dogById)
        : res.status(404).send("There are no dogs with that id");
    }
    else {
        return res.status(404).send('There are no dogs with that id')
    }

  } catch (error) {
    return res.status(404).send(error.message)
  }
};

module.exports = {
    getDogsById
}