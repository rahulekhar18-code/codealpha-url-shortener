const fs = require("fs");

const DB_FILE = "database.json";

const getUrls = () => {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
};

const saveUrls = (urls) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(urls, null, 2));
};

module.exports = {
  getUrls,
  saveUrls,
};