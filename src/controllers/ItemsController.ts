import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index (req: Request, res: Response) {
    try{
      const items = await knex('items').select('*');
      const serializedItems = items.map(item => {
        return {
          id: item.id,
          title: item.title,
          image_url: `http://localhost:${process.env.PORT}/tmp/${item.image}`,
        }
      });
      return res.status(200).json(serializedItems);
    }catch(error){
      return res.json(error)
    }
  }
};

export default new ItemsController();