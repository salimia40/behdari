const { InventoryDrug, DrugType } = require("../db");

module.exports.get = async (req, res) => {
  var range = JSON.parse(req.query.range || "[0, 10]");
  var query = {
    offset: range[0],
    limit: range[1] - range[0],
  };
  var data = await DrugType.findAll(query);
  var total = await DrugType.count();
  res.setHeader(
    "Content-Range",
    `drugtype ${range[0]}-${range[0] + data.length}/${total}`
  );
  res.json(data);
};
module.exports.getItem = async (req, res) => {
  var data = await DrugType.findByPk(req.params.id);
  res.json(data);
};
module.exports.post = async (req, res) => {
  var data = DrugType.build({
    title: req.body.title,
  });

  await data.save();
  res.json(data);
};
module.exports.put = async (req, res) => {
  var data = await DrugType.findByPk(req.params.id);
  data.amount = req.body.amount || data.amount;

  await data.save();
  res.json(data);
};
module.exports.delete = async (req, res) => {
  var data = await DrugType.findByPk(req.params.id);
  await data.destroy();
  res.json(data);
};
