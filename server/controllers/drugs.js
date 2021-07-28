const {  Drug, DrugType } = require("../db");

module.exports.get = async (req, res) => {
  var range = JSON.parse(req.query.range || '[0, 10]');
  var query = {
    offset: range[0],
    limit: range[1] - range[0],
    include: DrugType
  };
  var data = await Drug.findAll(query);
  var total = await Drug.count();
  res.setHeader('Content-Range', `drug ${range[0]}-${range[0] + data.length}/${total}`);
  res.json(data);
};
module.exports.getItem = async (req, res) => {
  var data = await Drug.findByPk(req.params.id, { include: DrugType });
  res.json(data);
};
module.exports.post = async (req, res) => {
  var data = Drug.build({
    title: req.body.title,
    DrugTypeId: parseInt(req.body.DrugTypeId)
  });
  console.log(req.body)

  await data.save();
  res.json(data);
};
module.exports.put = async (req, res) => {
  var data = await Drug.findByPk(req.params.id, { include: DrugType });
  data.amount = req.body.amount || data.amount;
  await data.save();
  res.json(data);
};
module.exports.delete = async (req, res) => {
  var data = await Drug.findByPk(req.params.id);
  await data.destroy();
  res.json(data);
};
