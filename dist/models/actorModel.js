"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
let ActorSchema = new Schema({
    name: String,
    age: Number
});
module.exports = mongoose_1.default.model('Actor', ActorSchema);
//# sourceMappingURL=actorModel.js.map