const { Equipment , Room } = require("../db");

module.exports.get = async (req, res) => {
  var range = JSON.parse(req.query.range || '[0, 10]');
  var query = {
    offset: range[0],
    limit: range[1] - range[0],
    include: Room
  };
  var data = await Equipment.findAll(query);
  var total = await Equipment.count();
  res.setHeader('Content-Range', `Equipment ${range[0]}-${range[0] + data.length}/${total}`);
  res.json(data);
};
module.exports.getItem = async (req, res) => {
  var data = await Equipment.findByPk(req.params.id, { include: Room });
  res.json(data);
};
module.exports.post = async (req, res) => {
  var data = Equipment.build({
    title: req.body.title,
    RoomId: parseInt(req.body.RoomId)
  });
  console.log(req.body)

  await data.save();
  res.json(data);
};
module.exports.put = async (req, res) => {
  var data = await Equipment.findByPk(req.params.id, { include: Room });
  data.amount = req.body.amount || data.amount;
  await data.save();
  res.json(data);
};
module.exports.delete = async (req, res) => {
  var data = await Equipment.findByPk(req.params.id);
  await data.destroy();
  res.json(data);
};
