import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

    
    static async listarLivros(req,res) {
        try {
            const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
        } catch(erro) {
            res.status(500).json( {message: `${erro.message} - falha na requisão`})
        }
        
    }

    static async listarLivroVendido(req,res) {
        const sold = req.query.sold;

        try {
            const livroSold = await livro.find({sold: sold})
            res.status(200).json(livroSold)
        } catch(erro) {
            res.status(500).json( {message: `${erro.message} - falha na busca`})
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
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor)
            console.log(autorEncontrado)
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc}};
            console.log(livroCompleto)
            const livroCriado = await livro.create(livroCompleto)
            console.log(livroCriado)
            res.status(201).json({ message: "Criado com succeso", livro: livroCriado  });
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

    static async deletarLivro(req, res) {
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