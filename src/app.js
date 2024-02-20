import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
const conexao = await conectaNaDataBase();

// const livros = [
//     {
//         id: 1,
//         titulo: "senhor dos aneis"
//     }
// ]

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});

const app = express()

routes(app)

app.post("/livros", (req, res) => {
    livros.push(req.body)
    res.status(201).send("Livro adicionado com sucesso")
})

export default app;
