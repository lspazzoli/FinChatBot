const Bot = require('../Models/bot');

exports.input = function (req,res) {
  //ToDO Check db and respond
  console.log(req.body.response);
   res.send({response:"Nice to meet you "+ req.body.response});
}

//ToDO Populate Db wi


handleError = (err) => {
  console.log(err);
}
