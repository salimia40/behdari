const { Router } = require("express");

module.exports = (controller) => {

    const router = Router();    
    router.get("/", (req, res, next) => {  
        req.pagination = {
            limit : req.query.limit || 20,
            skipe : req.query.skip || 0
        }
        next()
    },controller.get);
    router.get("/:id",controller.getItem);
    router.post("/",controller.post);
    router.put("/:id",controller.put);
    router.delete("/:id",controller.delete);

    return router
}
