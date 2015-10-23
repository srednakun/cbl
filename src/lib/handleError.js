module.exports.standard = function(err, res) {
  console.log(err);
  res.status(500).json({msg: 'server error'});
};

module.exports.userExists = function(err, res) {
  console.log(err);
  res.status(401).json({msg: 'user exists'});
};

module.exports.userDoesNotExists = function(err, res) {
  console.log(err);
  res.status(401).json({msg: 'User Does Not Exists'});
};

module.exports.userPassMatch = function(err, res) {
  console.log(err);
  res.status(401).json({msg: 'Password Does Not Matchs'});
};

module.exports.noAuthenticate = function(err, res) {
  console.log(err);
  res.status(401).json({msg: 'Could not authenticate'});
};

module.exports.unauthorized = function(err, res) {
  console.log(err);
  res.status(401).json({msg: 'Unauthorized'});
};

