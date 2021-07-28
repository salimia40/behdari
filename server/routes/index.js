const router = require('./router')
const StoreController = require('../controllers/store')
const DrugController = require('../controllers/drugs')
const DrugStoreController = require('../controllers/drugstore')
const TransactionController = require('../controllers/transaction')
const DrugtypeController = require('../controllers/drugtype')
const RoomController = require('../controllers/room')
const EquipmentController = require('../controllers/equipment')

module.exports = (app) => {
    app.use("/store",router(StoreController))
    app.use("/Drugs",router(DrugController))
    app.use("/drugstore",router(DrugStoreController))
    app.use("/transaction",router(TransactionController))
    app.use("/drugtype",router(DrugtypeController))
    app.use("/room",router(RoomController))
    app.use("/equipment",router(EquipmentController))
}