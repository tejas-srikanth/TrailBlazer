const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');
const Track = mongoose.model('Track');

const router = express();
router.use(requireAuth);

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id });
    res.send(tracks);
});

router.post('/tracks', async (req, res) => {
    const { name, locations } = req.body;
    if (!name || !locations){
        return res.status(422).send('Name or location not proper')
    }
    try{
        const userId = req.user._id;
        const track = Track({ name, locations, userId })
        await track.save();
        res.send(track)
    } catch (e) {
        res.send({error: e.message})
    }
})

module.exports = router;