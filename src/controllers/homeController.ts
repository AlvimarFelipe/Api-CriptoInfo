import { Request, Response } from 'express';
import { sequelizes } from '../instances/mysql'
import { Noticia } from '../models/noticias';


export const testeconexao = async (req: Request, res: Response)=>{
    try {
        await sequelizes.authenticate();
        console.log("Conexão estabelecida com sucesso!")
    } catch (error) {
        console.log("Deu problem: ",error);
    }
  
  res.send('Está Funcionado!');
};

export const ADDNoticias = async (req: Request, res: Response)=>{
    const noticia = await Noticia.create({
        titulo:req.body.titulo,
        noticia:req.body.noticia,
        urlimg: req.body.urlimg,
        tipo: req.body.tipo
    });
    res.send(noticia)
};

export const UPDATENoticias = async (req: Request, res: Response)=>{
    await Noticia.update({titulo:req.body.titulo,noticia:req.body.noticia,urlimg:req.body.urlimg},{
        where: {
            id:req.body.id
        }
    });
    res.send('Atualizado com sucesso!')
    
};

export const GETNoticias = async (req: Request, res: Response)=>{
 const noticia = await Noticia.findAll({
    where: {
        tipo:req.query.tipo
    }
  });
 
 res.send(noticia)
};

export const OneNoticia = async (req: Request, res: Response)=>{
 const noticia = await Noticia.findAll({
    where: {
        id:req.query.id
    }
  });
 
 res.send(noticia)
};



export const DELLNoticias = async (req: Request, res: Response)=>{
  await Noticia.destroy({
      where: {
          id: req.query.id
      }
  });
  res.send('Deletado Com sucesso!')
    
};


