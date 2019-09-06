"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
const actorSchema = require('./actorModel').schema;
const directorSchema = require('./directorModel').schema;
let MoviesSchema = new Schema({
    title: String,
    minutes: String,
    actor: actorSchema,
    director: directorSchema
});
module.exports = mongoose_1.default.model('Movies', MoviesSchema);
//# sourceMappingURL=movieModel.js.map