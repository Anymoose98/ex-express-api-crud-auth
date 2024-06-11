const express = require("express");
const postRouter = require("./router/postRouter");
const tagRouter = require("./router/tagRouter");
const categoryRouter = require("./router/categoryRouter");
const authRouter = require("./router/auth.js")
const app = express();
const cors = require("cors")
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("<h1>Prova<h1>")
})

app.use(express.json());

app.use('',authRouter)

app.use('/posts', postRouter);

app.use('/categories', categoryRouter)

app.use('/tags', tagRouter)


app.listen(port, () => {
    console.log(`Server http://localhost:${port}`)
})