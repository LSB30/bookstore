import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req,res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    }

    static async livroVendido(req,res) {
        const listaLivros = await livro.find({})

        const livrosVendidos = listaLivros.filter((livro) => livro.sold == true)
        const livrosTitulos = livrosVendidos.map((livro) => livro.titulo)
        res.status(200).json({ message: "Livros Vendidos", livrosVendidos:livrosTitulos})
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com succeso", livro: novoLivro  })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` })
        }
    }

    static async checkLivroVendidos (livros) {
        const livrosVendidos = livros.filter((livro) => livro.sold === true)

        return livrosVendidos;
    }
}

export default LivroController;