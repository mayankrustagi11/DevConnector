const mongoose = require('mongoose');
// middleware to check for a valid object id
const checkObjectId = (id) => (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params[id]))
    return res.status(404).json({ msg: 'Not Found' });
  next();
};

module.exports = checkObjectId;
