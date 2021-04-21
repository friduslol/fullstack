//for frontend fetches in the future
const fetch = require('node-fetch');
//for transorming data from xml
const json = 'format=json';
//to get all data
const paginationFalse = 'pagination=false';

const getAllChannels = async (req, res) => {
    let channels = await fetch(
     `http://api.sr.se/api/v2/channels?${json}&${paginationFalse}`
    );
    channels = await channels.json();
    res.json(channels);
};

module.exports = {
    getAllChannels,
}