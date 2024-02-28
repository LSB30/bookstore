import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores(req,res, next) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch(erro) {
      next(erro);
    }
        
  }

  static async listarAutorID (req,res,next) {
    try {
      const ID = req.params.id;
      const autorEncontrado = await autor.findById(ID);

      if(autorEncontrado  !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        res.status(404).send({message : "Author ID not found"});
      }

    } catch(erro) {
      next(erro);
    }
  }
  static async cadastrarAutor(req, res,next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com succeso", Autor: novoAutor  });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const ID = req.params.id;
      await autor.findByIdAndUpdate(ID, req.body);
      const autorAtualizado = await autor.findById(ID);
      res.status(200).json({message : "Autor atualizado com sucesso", AutorAtualizado: autorAtualizado}); 
    } catch(erro) {
      next(erro);
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      const ID = req.params.id;
      await autor.findByIdAndDelete(ID);
      res.status(204).json({message : "Autor deletado com sucesso"}); 
    }  catch(erro) {
      next(erro);
    }
  }
}

export default AutorController;