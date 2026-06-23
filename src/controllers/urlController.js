const { getUrls, saveUrls } = require("../models/urlModel");
const generateShortCode = require("../utils/generateShortCode");

const createShortUrl = (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({
      message: "URL is required",
    });
  }

  const urls = getUrls();

  const shortCode = generateShortCode();

 const newUrl = {
    shortCode,
    longUrl,
    clicks: 0,
    createdAt: new Date()
};
  urls.push(newUrl);

  saveUrls(urls);

  res.status(201).json({
    shortUrl: `http://localhost:5000/${shortCode}`,
  });
};
const redirectUrl = (req, res) => {
  const { shortCode } = req.params;

  const urls = getUrls();

  const foundUrl = urls.find(
    (url) => url.shortCode === shortCode
  );

  if (!foundUrl) {
    return res.status(404).json({
      message: "URL not found",
    });
  }
foundUrl.clicks += 1;
saveUrls(urls);
  res.redirect(foundUrl.longUrl);
};

module.exports = {
  createShortUrl,
  redirectUrl,
};