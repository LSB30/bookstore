import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req,res) {
        try {
            const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
        } catch(erro) {
            res.status(500).json( {message: `${erro.message} - falha na requisão`})
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

    static async listarLivroId (req,res) {
        try {
            const ID = req.params.id
            const livroEncontrado = await livro.findById(ID)
            res.status(200).json(livroEncontrado)
        } catch(erro) {
            res.status(500).json({message : `${erro.message} - falha na requisição do livro`})
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

    static async atualizarLivro(req, res) {
        try {
            const ID = req.params.id;
            await livro.findByIdAndUpdate(ID, req.body);
            const livroAtualizado = await livro.findById(ID)
            res.status(200).json({message : "livro atualizado com sucesso", NovoLivro: livroAtualizado}) 
        } catch(erro) {
            res.status(500).json({message: `${erro.messge} - falha na atualisação`})
        }
    }

    static async deleteLivro(req, res) {
        try {
            const ID = req.params.id;
            await livro.findByIdAndDelete(ID)
            res.status(204).json({message : "livro deletado com sucesso"}) 
        }  catch(erro) {
            res.status(500).json({message: `${erro.messge} - falha ao tentar deletar o livro`})
        }
    }
}

export default LivroController;