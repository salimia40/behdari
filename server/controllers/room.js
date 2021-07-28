const { Room , Equipment } = require("../db");

module.exports.get = async (req, res) => {
  var range = JSON.parse(req.query.range || '[0, 10]');
  var query = {
    offset: range[0],
    limit: range[1] - range[0]
  };
  var data = await Room.findAll(query);
  var total = await Room.count();
  res.setHeader('Content-Range', `Room ${range[0]}-${range[0] + data.length}/${total}`);
  res.json(data);
};
module.exports.getItem = async (req, res) => {
  var data = await Room.findByPk(req.params.id, { include: Equipment });
  res.json(data);
};
module.exports.post = async (req, res) => {
  var data = Room.build({
    title: req.body.title
  });
  console.log(req.body)

  await data.save();
  res.json(data);
};
module.exports.put = async (req, res) => {
  var data = await Room.findByPk(req.params.id, { include: Equipment });
  data.title = req.body.title || data.title;
  await data.save();
  res.json(data);
};
module.exports.delete = async (req, res) => {
  var data = await Room.findByPk(req.params.id);
  await data.destroy();
  res.json(data);
};
