const { videoToken } = require('../utils/videoTokens');
const config = require('../utils/videoConfig');

const sendTokenResponse = (token, res) => {
  res.set('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      token: token.toJwt(),
    }),
  );
};

exports.getToken = (req, res) => {
  const { identity } = req.query;
  const { room } = req.query;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);
};

exports.postToken = (req, res) => {
  const { identity } = req.body;
  const { room } = req.body;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);
};
