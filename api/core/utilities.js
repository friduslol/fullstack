const convertToDateObject = (SRTimeString) => {
    return new Date(
      parseInt(SRTimeString.replace(/[\/\(\)date]/gi, ""))
    ).toLocaleString();
};

module.exports = {
    convertToDateObject,
};
