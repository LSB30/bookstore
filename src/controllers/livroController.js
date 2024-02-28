import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";


class LivroController {

  static async listarLivros(req,res, next) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch(erro) {
      next(erro);
    }
        
  }

  static async listarLivroVendido(req,res, next) {
    const sold = req.query.sold;

    try {
      const livroSold = await livro.find({sold: sold});
      res.status(200).json(livroSold);
    } catch(erro) {
      next(erro);
    }
        
  }

  static async listarLivroId (req,res, next) {
    try {
      const ID = req.params.id;
      const livroEncontrado = await livro.findById(ID);
      res.status(200).json(livroEncontrado);
    } catch(erro) {
      next(erro);
    }
  }
  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc}};
      
      const livroCriado = await livro.create(livroCompleto);
      
      res.status(201).json({ message: "Criado com succeso", livro: livroCriado  });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const ID = req.params.id;
      await livro.findByIdAndUpdate(ID, req.body);
      const livroAtualizado = await livro.findById(ID);
      res.status(200).json({message : "livro atualizado com sucesso", NovoLivro: livroAtualizado}); 
    } catch(erro) {
      next(erro);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const ID = req.params.id;
      await livro.findByIdAndDelete(ID);
      res.status(204).json({message : "livro deletado com sucesso"}); 
    }  catch(erro) {
      next(erro);
    }
  }

}

export default LivroController;