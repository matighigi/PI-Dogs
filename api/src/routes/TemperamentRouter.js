const {tempInfo} = require('../Controllers/tempInfo')
const {Router} = require('express');
const router = Router();

router.get('/temperaments', async (req, res) => {
    try {
        res.status(200).send(await tempInfo())
    } catch (error) {
        res.status(404).send('We had a problem to show you the temperaments')
    }
})

module.exports = router;