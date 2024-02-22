import  mongoose  from "mongoose";
import { autorSchema } from "./Autor.js";


const livroSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        titulo: {type: String, required: true},
        editor: {type: String},
        preco: {type: Number},
        paginas: {type: Number},
        sold : {type : Boolean},
        autor : autorSchema
    },
     {versionKey: false}
);

const livro = mongoose.model("livros", livroSchema);

export default livro;