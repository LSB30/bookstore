import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req,res) {
        try {
            const listaAutores = await autor.find({});
        res.status(200).json(listaAutores);
        } catch(erro) {
            res.status(500).json( {message: `${erro.message} - falha na requisão`})
        }
        
    }

    // static async livroVendido(req,res) {
    //     try {
    //         const listaLivros = await livro.find({})
    //         const livrosVendidos = listaLivros.filter((livro) => livro.sold == true)
    //         const livrosTitulos = livrosVendidos.map((livro) => livro.titulo)
    //     res.status(200).json({ message: "Livros Vendidos", livrosVendidos:livrosTitulos})
    //     } catch(erro) {
    //         res.status(500).json({message : `${erro.message} - falha ao tentar busca os livro vendido`})
    //     }
        
    // }

    static async listarAutorID (req,res) {
        try {
            const ID = req.params.id
            const autorEncontrado = await autor.findById(ID)
            res.status(200).json(autorEncontrado)
        } catch(erro) {
            res.status(500).json({message : `${erro.message} - falha na requisição do autor`})
        }
    }
    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com succeso", Autor: novoAutor  })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` })
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const ID = req.params.id;
            await autor.findByIdAndUpdate(ID, req.body);
            const autorAtualizado = await autor.findById(ID)
            res.status(200).json({message : "Autor atualizado com sucesso", AutorAtualizado: autorAtualizado}) 
        } catch(erro) {
            res.status(500).json({message: `${erro.messge} - falha na atualisação`})
        }
    }

    static async deletarAutor(req, res) {
        try {
            const ID = req.params.id;
            await autor.findByIdAndDelete(ID)
            res.status(204).json({message : "Autor deletado com sucesso"}) 
        }  catch(erro) {
            res.status(500).json({message: `${erro.messge} - falha ao tentar deletar o autor`})
        }
    }
}

export default AutorController;