"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const movieController_1 = require("./controllers/movieController");
const directorController_1 = require("./controllers/directorController");
const actorControllers_1 = require("./controllers/actorControllers");
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect('mongodb://localhost:27017/cartelera', { useNewUrlParser: true })
    .then(() => {
}).catch(err => console.log("Chales no se conecto :'v  " + err));
const port = process.env.port || 1337;
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/movies', movieController_1.movieRouter);
app.use('/director', directorController_1.directorRouter);
app.use('/actor', actorControllers_1.actorRouter);
app.get('/', (req, res) => {
    res.send("API is running OK");
});
app.listen(port, () => {
    console.log('App is running in port: ' + port);
});
//import { authorRouter } from './controllers/authorController'
//import { bookRouter } from './controllers/bookController';
//app.use('/movies',movieRouter)
//app.use('/authors', authorRouter)
//app.use('/books',bookRouter)
//# sourceMappingURL=index.js.map