const shortid = require('shortid');
const QRCode = require('qrcode');
const urlModel = require('../models/urlModel');
const geoip = require('geoip-lite');



// 1. Shorten URL
const handleShortenUrl = async (req, res) => {
    try {
        const user = req.user;
        const redirectUrl = req.body.url;
        if(!redirectUrl) return res.status(404).json({message: 'No URL found!'});

        // Generate shortId
        const newShortId = shortid.generate();
        const shortUrl = `${process.env.BACKEND_URL}/${newShortId}`;

        // Generate QR code
        let qrCodeData;
        try {
            qrCodeData = await QRCode.toDataURL(shortUrl);
        } catch (err) {
            return res.status(500).json({message: 'Error generating QR code'});
        }

        // Save URL details in DB
        const newEntry = await urlModel.create({
            user: user._id,
            shortId: newShortId,
            redirectUrl: redirectUrl,
            qrCode: qrCodeData
        });

        res.status(200).json({shortURL: newEntry, qrCode: qrCodeData});
    } catch(e) {
        res.status(500).json({message: 'Internal Server Error.'})
    }
}


// 2. List all URL
const handelListUrls = async (req, res) => {
    try {
        const user = req.user;
        const foundEntry = await urlModel.find( {user: user._id} );
        res.status(200).json( {message: 'fetched successfully', foundEntry: foundEntry} );
    } catch(e) {
        res.status(500).json({message: 'Internal Server Error.'})
    }
}


// 3. Delete URL
const handleDeleteURL = async (req, res) => {
    try {
        const _id = req.params.id;
        const foundEntry = await urlModel.findOneAndDelete({_id});
        res.status(200).json( {message: 'Deleted successfully.'} );
    } catch(e) {
        res.status(500).json({message: 'Internal Server Error.'})
    }
}


// 4. Redirect URL
const handleRedirect = async (req, res) => {
    const shortId = req.params.ShortId;
    const foundEntry = await urlModel.findOne({ shortId });
    if (!foundEntry) return res.status(404).send('Invalid URL requested');

    // Get geoip information
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    const country = geo ? geo.country : 'Unknown';
    const city = geo ? geo.city : 'Unknown';``
    console.log(country);
    console.log(city);

    // Update visitor details in DB
    foundEntry.numberOfClicks++;
    foundEntry.visitorDetails.push({
        ipAddress: ip,
        time: new Date().toLocaleTimeString(),
        date: new Date(),
        country,
        city
    });

    await foundEntry.save();
    res.redirect(foundEntry.redirectUrl);
}




module.exports = {
    handleShortenUrl,
    handelListUrls, 
    handleDeleteURL,
    handleRedirect
}