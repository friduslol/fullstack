//for frontend fetches in the future
const fetch = require('node-fetch');
//for transorming data from xml
const json = 'format=json';
//to get all data
const paginationFalse = 'pagination=false';
//to get data Func
const utils = require("../core/utilities");

//for fetching all avaliable channels
const getAllChannels = async (req, res) => {
    let channels = await fetch(
     `http://api.sr.se/api/v2/channels?${json}&${paginationFalse}`
    );
    channels = await channels.json();
    res.json(channels);
};

//for fetching schema per date for a specific channel
const getSingleDaySchema = async (req, res) => {
    let channelSchema = await fetch(
        `http://api.sr.se/api/v2/scheduledepisodes?${json}&${paginationFalse}&channelId=${req.params.channelId}`
    );
    //&date=${req.query.date}
    channelSchema = await channelSchema.json();

    //transforming api date
    channelSchema.schedule = channelSchema.schedule.map((d) => {
        console.log(new Date(d.starttimeutc));
        return {
          ...d,
          starttimeutc: utils.convertToDateObject(d.starttimeutc),
          endtimeutc: utils.convertToDateObject(d.endtimeutc),
        };
      });

    res.json(channelSchema.schedule);
};

//for fetching categories
const getCategories = async (req, res) => {
    let categories = await fetch(
        `http://api.sr.se/api/v2/programcategories?${json}&${paginationFalse}`
    );
    categories = await categories.json();
    res.json(categories.programcategories);
};

//for fetching programs from specific channel
const getProgramsForChannel = async (req, res) => {
    let channelPrograms = await fetch(
    `http://api.sr.se/api/v2/programs/index?${json}&${paginationFalse}&channelId=${req.params.channelId}`
    );
    channelPrograms = await channelPrograms.json();
    res.json(channelPrograms.programs);
}


//for fetching channel by id
const getChannelById = async (req, res) => {
    let channel = await fetch(
        `http://api.sr.se/api/v2/channels/${req.params.channelId}?${json}&${paginationFalse}`
    );
    channel = await channel.json();
    res.json(channel);
};


//for fetching programs from specific chatagory
const getProgramsForCategory = async (req, res) => {
    let programsfromCategory = await fetch(
        `http://api.sr.se/api/v2/programs/index?${json}&${paginationFalse}&programcategoryid=${req.params.programcategoryid}`
    );
    programsfromCategory = await programsfromCategory.json();
    res.json(programsfromCategory);
}


module.exports = {
    getAllChannels,
    getSingleDaySchema,
    getCategories,
    getProgramsForChannel,
    getChannelById,
    getProgramsForCategory,

}