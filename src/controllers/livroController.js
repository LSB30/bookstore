import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req,res) {
        try {
            const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
        } catch(erro) {
            res.status(500).json( {message: `${erro.message} - falha ao tentar buscar os livros`})
        }
        
    }

    static async livroVendido(req,res) {
        try {
            const listaLivros = await livro.find({})
            const livrosVendidos = listaLivros.filter((livro) => livro.sold == true)
            const livrosTitulos = livrosVendidos.map((livro) => livro.titulo)
        res.status(200).json({ message: "Livros Vendidos", livrosVendidos:livrosTitulos})
        } catch(erro) {
            res.status(500).json({message : `${erro.message} - falha ao tentar busca os livro vendido`})
        }
        
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com succeso", livro: novoLivro  })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` })
        }
    }

    
}

export default LivroController;