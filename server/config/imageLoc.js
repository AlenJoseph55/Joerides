const getImageUrl = (req, img_loc) => {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    // if (img_loc.startsWith(baseUrl)) {
    //     return img_loc; 
    // } else {
        return `${baseUrl}/${img_loc}`;
    // }
};

module.exports = getImageUrl;
