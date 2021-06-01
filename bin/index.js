"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("../api/api"));
const app = express_1.default();
app.use('/api/v1/', api_1.default());
app.listen(process.env.PORT || 8080, () => {
    console.log(`application started listening on port ${process.env.PORT || 8080}`);
});
