module.exports = (req, res) => {
  res.json({ apiKey: process.env.DID_API_KEY });
};
