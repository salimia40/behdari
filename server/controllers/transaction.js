const { InventoryDrug, Drug, Transaction, TransactionDrug } = require("../db");

module.exports.get = async (req, res) => {
  var range = JSON.parse(req.query.range || "[0, 10]");
  var query = {
    offset: range[0],
    limit: range[1] - range[0],
    where: {},
    include: TransactionDrug,
  };
  if (req.query.from) query.where.from = req.query.from;
  if (req.query.to) query.where.to = req.query.to;

  var data = await Transaction.findAll(query);
  var total = await Transaction.count();
  res.setHeader(
    "Content-Range",
    `transaction ${range[0]}-${range[0] + data.length}/${total}`
  );
  res.json(data);
};
module.exports.getItem = async (req, res) => {
  var data = await Transaction.findByPk(req.params.id, {
    include: TransactionDrug,
  });
  res.json(data);
};
module.exports.post = async (req, res) => {
  console.log(req.body);

  var data = await Transaction.create({
    from: req.body.from || undefined,
    to: req.body.to || undefined,
  });

  var transactions = req.body.transactionDrugs;

  while (transactions.length > 0) {
    var td = transactions.pop();

    await TransactionDrug.create({
      TransactionId: data.id,
      DrugId: td.DrugId,
      amount: parseInt(td.amount),
    });

    var id;
    if (data.from) {
      [id] = await InventoryDrug.findOrCreate({
        where: { DrugId: td.DrugId, inventory: data.from },
      });
      id.amount = (id.amount || 0) - parseInt(td.amount);
      await id.save();
    }

    if (data.to) {
      [id] = await InventoryDrug.findOrCreate({
        where: { DrugId: td.DrugId, inventory: data.to },
      });
      id.amount = (id.amount || 0) + parseInt(td.amount);
      await id.save();
    }
  }

  await data.reload({ include: TransactionDrug });
  res.json(data);
};
module.exports.put = async (req, res) => {
  var data = await Transaction.findByPk(req.params.id, {
    include: TransactionDrug,
  });

  await data.save();
  res.json(data);
};
module.exports.delete = async (req, res) => {
  var data = await Transaction.findByPk(req.params.id);
  await data.destroy();
  res.json(data);
};
