"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
let DirectorSchema = new Schema({
    name: String,
    age: String
});
module.exports = mongoose_1.default.model('Director', DirectorSchema);
//# sourceMappingURL=directorModel.js.map