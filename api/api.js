"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../lib/db");
exports.default = () => {
    const router = express_1.Router();
    router.get("/person", async (req, res) => {
        let paginator = 0;
        if (req.query.paginator) {
            paginator = parseInt(req.query.paginator, 10);
        }
        const dbConn = new db_1.db();
        const results = await dbConn.getPerson(paginator);
        res.json(results);
    });
    return router;
};
