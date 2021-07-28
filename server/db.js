const { Sequelize, DataTypes } = require("sequelize");
const { app } = require("electron");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: `${app && app.getPath("appData") || "."}/database.sqlite`,
  logging: false
});

//// drug db items

const DrugType = sequelize.define("DrugType", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Drug = sequelize.define("Drug", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const InventoryDrug = sequelize.define("InventoryDrug", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  amount: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  inventory: {
    type: DataTypes.ENUM("store", "drugstore", "policlinic"),
    allowNull: false,
  },
});

const TransactionDrug = sequelize.define("TransactionDrug", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  amount: { type: DataTypes.INTEGER, allowNull: false },
});

const Transaction = sequelize.define("Transaction", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  to: {
    type: DataTypes.ENUM("store", "drugstore", "policlinic"),
    allowNull: true,
  },
  from: {
    type: DataTypes.ENUM("store", "drugstore", "policlinic"),
    allowNull: true,
  },
});

DrugType.hasMany(Drug);
Drug.belongsTo(DrugType);

Drug.hasMany(InventoryDrug);
InventoryDrug.belongsTo(Drug);

Drug.hasMany(TransactionDrug);
TransactionDrug.belongsTo(Drug);

TransactionDrug.belongsTo(Transaction);
Transaction.hasMany(TransactionDrug);

// equipment items
const Room = sequelize.define("Room", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Equipment = sequelize.define("Equipment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const CheckList = sequelize.define("CheckList", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const EquipmentCheckItem = sequelize.define("EquipmentCheckItem", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Move = sequelize.define("Move", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Room.hasMany(Move, { as: "from", foreignKey: "fromId" });
Room.hasMany(Move, { as: "to", foreignKey: "toId" });
Move.belongsTo(Room);

Room.hasMany(Equipment);
Equipment.belongsTo(Room);

Room.hasMany(CheckList);
CheckList.belongsTo(Room);

Equipment.hasMany(EquipmentCheckItem);
EquipmentCheckItem.belongsTo(Equipment);

CheckList.hasMany(EquipmentCheckItem);
EquipmentCheckItem.belongsTo(CheckList);

module.exports = {
  Drug,
  InventoryDrug,
  DrugType,
  Transaction,
  TransactionDrug,
  sequelize,
  Equipment,
  Room,
  EquipmentCheckItem,
};
